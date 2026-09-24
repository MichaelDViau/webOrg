"use client";

import Link from "@/components/i18n/Link";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { assistantLimits } from "@/lib/assistant";
import type { Ui } from "@/lib/content/en/ui";
import { useLocale } from "@/components/i18n/Link";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface AssistantWidgetProps {
  /** Site paths the assistant may mention; these are rendered as links. */
  linkablePaths: string[];
  bookingHref: string;
  labels: Ui["assistant"];
}

/** Renders assistant text, turning known site paths and email addresses into links. */
function renderWithLinks(text: string, linkablePaths: string[]): ReactNode[] {
  const escaped = [...linkablePaths].sort((a, b) => b.length - a.length).map((path) => path.replace(/[/-]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})(?![\\w/-])|([\\w.+-]+@[\\w-]+\\.[\\w.]+\\w)`, "g");

  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    const [value, path, email] = match;
    parts.push(
      path ? (
        <Link key={index} href={path} className="font-medium text-ink underline underline-offset-2">
          {path}
        </Link>
      ) : (
        <a key={index} href={`mailto:${email}`} className="font-medium text-ink underline underline-offset-2">
          {value}
        </a>
      ),
    );
    last = index + value.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function AssistantWidget({ linkablePaths, bookingHref, labels: t }: AssistantWidgetProps) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const panelId = useId();
  const titleId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const atLimit = messages.length >= assistantLimits.maxMessages - 1;

  async function send(question: string) {
    const text = question.trim().slice(0, assistantLimits.maxMessageLength);
    if (!text || busy || atLimit) return;

    const history: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setDraft("");
    setBusy(true);

    const appendToReply = (chunk: string) =>
      setMessages((current) => {
        const next = [...current];
        const reply = next[next.length - 1];
        next[next.length - 1] = { ...reply, content: reply.content + chunk };
        return next;
      });

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, locale }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        appendToReply(data?.error ?? t.failed);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        appendToReply(decoder.decode(value, { stream: true }));
      }
    } catch {
      if (!controller.signal.aborted) appendToReply(t.interrupted);
    } finally {
      setBusy(false);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void send(draft);
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="fixed right-4 bottom-4 z-30 inline-flex h-11 items-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-paper shadow-md transition-colors hover:bg-ink/85 sm:right-6 sm:bottom-6"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4">
          {open ? (
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.75" />
          ) : (
            <path
              d="M3.5 5.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-3.5 3v-3h0a2 2 0 0 1-2-2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          )}
        </svg>
        {open ? t.close : t.open}
      </button>

      <div
        id={panelId}
        role="dialog"
        aria-labelledby={titleId}
        hidden={!open}
        className="fixed inset-x-4 bottom-20 z-30 flex h-136 max-h-[calc(100dvh-7rem)] flex-col overflow-hidden rounded-lg border border-line bg-paper shadow-lg sm:inset-x-auto sm:right-6 sm:bottom-22 sm:w-96"
      >
        <div className="border-b border-line px-5 py-4">
          <h2 id={titleId} className="text-base font-semibold">
            {t.title}
          </h2>
          <p className="mt-0.5 text-xs text-muted">
            {t.disclaimer}
          </p>
        </div>

        <div ref={logRef} role="log" aria-live="polite" className="flex-1 space-y-4 overflow-y-auto px-5 py-4 text-sm">
          <p className="max-w-[90%] rounded-lg bg-canvas px-3.5 py-2.5 leading-relaxed">{t.greeting}</p>

          {messages.length === 0 && (
            <ul aria-label={t.suggested} className="flex flex-col items-start gap-2">
              {t.suggestions.map((question) => (
                <li key={question}>
                  <button
                    type="button"
                    onClick={() => void send(question)}
                    className="rounded-md border border-line-strong px-3 py-2 text-left text-ink transition-colors hover:border-ink"
                  >
                    {question}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[90%] rounded-lg px-3.5 py-2.5 leading-relaxed whitespace-pre-line",
                message.role === "user" ? "ml-auto bg-ink text-paper" : "bg-canvas",
              )}
            >
              <span className="sr-only">{message.role === "user" ? t.you : t.assistant}</span>
              {message.role === "assistant"
                ? message.content
                  ? renderWithLinks(message.content, linkablePaths)
                  : <span className="text-muted">{t.thinking}</span>
                : message.content}
            </div>
          ))}
        </div>

        <div className="border-t border-line px-4 py-3">
          {atLimit ? (
            <p className="text-sm leading-relaxed">
              {t.limit}{" "}
              <Link href={bookingHref} className="font-medium text-ink underline underline-offset-2">
                {t.book}
              </Link>
              .
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <label htmlFor={`${panelId}-input`} className="sr-only">
                {t.inputLabel}
              </label>
              <textarea
                id={`${panelId}-input`}
                ref={inputRef}
                value={draft}
                rows={1}
                maxLength={assistantLimits.maxMessageLength}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void send(draft);
                  }
                }}
                placeholder={t.placeholder}
                className="max-h-32 min-h-10 flex-1 resize-none rounded-md border border-line-strong px-3 py-2 text-base text-ink focus:border-ink focus:outline-none sm:text-sm"
              />
              <button
                type="submit"
                disabled={busy || !draft.trim()}
                className={cn(buttonClass("primary", "sm"), "shrink-0")}
              >
                {t.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
