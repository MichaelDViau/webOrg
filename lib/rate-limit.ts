import "server-only";

interface RateWindow {
  count: number;
  resetAt: number;
}

const windows = new Map<string, RateWindow>();

/**
 * Fixed-window rate limiter held in memory. It protects a single server
 * instance; deployments running several instances should back this with a
 * shared store such as Redis.
 */
export function rateLimit(key: string, { limit, windowMs }: { limit: number; windowMs: number }): boolean {
  const now = Date.now();
  const current = windows.get(key);

  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    if (windows.size > 10_000) {
      for (const [entryKey, entry] of windows) {
        if (entry.resetAt <= now) windows.delete(entryKey);
      }
    }
    return true;
  }

  current.count += 1;
  return current.count <= limit;
}
