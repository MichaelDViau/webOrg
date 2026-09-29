"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ComponentProps } from "react";
import type { AssistantWidget as AssistantWidgetType } from "./AssistantWidget";

const AssistantWidget = dynamic(() => import("./AssistantWidget").then((module) => module.AssistantWidget), {
  ssr: false,
});

/**
 * Loads the chat assistant only after the page has finished loading and the browser is idle, so it never
 * competes with the content a visitor came for (Core Web Vitals, and the guideline's "minimal scripts").
 */
export function AssistantLoader(props: ComponentProps<typeof AssistantWidgetType>) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 5000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(load, 3000);
    return () => clearTimeout(timer);
  }, []);

  return ready ? <AssistantWidget {...props} /> : null;
}
