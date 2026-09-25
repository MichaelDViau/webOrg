"use client";

import { useEffect, useState } from "react";
import { themeStorageKey } from "@/lib/theme";

/** Moon in light mode, sun in dark mode. The icon follows the CSS dark variant, so it is right before hydration. */
export function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggle() {
    const next = !dark;
    const root = document.documentElement;
    // Switch every color at once instead of letting hover transitions fade some of them.
    const pause = document.createElement("style");
    pause.textContent = "*{transition:none!important}";
    document.head.appendChild(pause);
    if (next) root.dataset.theme = "dark";
    else delete root.dataset.theme;
    void getComputedStyle(root).color;
    pause.remove();
    try {
      localStorage.setItem(themeStorageKey, next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={dark}
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-canvas"
    >
      <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 dark:hidden">
        <path d="M16.5 12.2A7 7 0 0 1 7.8 3.5a7 7 0 1 0 8.7 8.7Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <svg viewBox="0 0 20 20" aria-hidden="true" className="hidden size-5 dark:block">
        <circle cx="10" cy="10" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M4.3 15.7l1.4-1.4M14.3 5.7l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
