import Anthropic from "@anthropic-ai/sdk";
import { assistantLimits, buildAssistantPrompt } from "@/lib/assistant";
import { defaultLocale, isLocale, localizePath, locales, type Locale } from "@/lib/i18n/config";
import { getContentFor } from "@/lib/i18n/content";
import { format } from "@/lib/i18n/format";
import { rateLimit } from "@/lib/rate-limit";
import { clientIp } from "@/lib/request";
import { site } from "@/lib/site";

export const maxDuration = 60;

// Built once per server instance and language; identical text on every request keeps the prompt cache warm.
const systemPrompts = Object.fromEntries(
  locales.map((locale) => [locale, buildAssistantPrompt(getContentFor(locale))]),
) as Record<Locale, string>;

/** The page language sent by the widget. Route Handlers can't read root params, so it comes in the body. */
function requestLocale(body: unknown): Locale {
  const value = (body as { locale?: unknown })?.locale;
  return typeof value === "string" && isLocale(value) ? value : defaultLocale;
}

function badRequest(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

/** Accepts only an alternating user/assistant history that starts and ends with the visitor. */
function parseMessages(body: unknown): Anthropic.Beta.BetaMessageParam[] | null {
  const messages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > assistantLimits.maxMessages) return null;

  const parsed: Anthropic.Beta.BetaMessageParam[] = [];
  for (const [index, message] of messages.entries()) {
    const { role, content } = (message ?? {}) as { role?: unknown; content?: unknown };
    const expectedRole = index % 2 === 0 ? "user" : "assistant";
    if (role !== expectedRole || typeof content !== "string") return null;

    const text = content.trim();
    if (!text || text.length > assistantLimits.maxMessageLength) return null;
    parsed.push({ role: expectedRole, content: text });
  }
  return parsed.at(-1)?.role === "user" ? parsed : null;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const locale = requestLocale(body);
  const t = getContentFor(locale).ui.assistant;

  if (!process.env.ANTHROPIC_API_KEY) return badRequest(t.unavailable, 503);

  // Only accept requests from this site's own pages.
  const origin = request.headers.get("origin");
  if (!origin || new URL(origin).host !== request.headers.get("host")) {
    return badRequest(t.wrongOrigin, 403);
  }

  if (!rateLimit(`assistant:${await clientIp()}`, { limit: 20, windowMs: 10 * 60 * 1000 })) {
    return badRequest(t.rateLimited, 429);
  }

  const messages = parseMessages(body);
  if (!messages) return badRequest(t.invalid);

  const fallbackReply = format(t.declined, { email: site.email, contact: localizePath("/contact", locale) });

  const client = new Anthropic();
  const encoder = new TextEncoder();

  const responseBody = new ReadableStream<Uint8Array>({
    async start(controller) {
      let wroteText = false;
      try {
        const stream = client.beta.messages.stream(
          {
            model: "claude-opus-5",
            max_tokens: 4096,
            // Short conversational answers don't need deep reasoning; low effort keeps replies fast and inexpensive.
            output_config: { effort: "low" },
            // If a request is declined by a safety classifier, retry it on the recommended fallback model.
            betas: ["server-side-fallback-2026-07-01"],
            fallbacks: "default",
            system: [{ type: "text", text: systemPrompts[locale], cache_control: { type: "ephemeral" } }],
            messages,
          },
          { signal: request.signal },
        );

        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            wroteText = true;
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }

        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(encoder.encode(wroteText ? `\n\n${fallbackReply}` : fallbackReply));
        }
      } catch (error) {
        if (!request.signal.aborted) {
          const status = error instanceof Anthropic.APIError ? error.status : undefined;
          console.error("Assistant request failed", status);
          if (!wroteText) {
            controller.enqueue(encoder.encode(format(t.serverError, { email: site.email })));
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(responseBody, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
