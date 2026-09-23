import "server-only";
import { headers } from "next/headers";

/** Best-effort client IP for rate limiting, as reported by the hosting proxy. */
export async function clientIp(): Promise<string> {
  const requestHeaders = await headers();
  return (
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown"
  );
}
