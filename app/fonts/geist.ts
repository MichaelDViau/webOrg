import localFont from "next/font/local";

/**
 * Geist Sans, self-hosted. The file is a Latin subset of the variable font, cut down to what the site
 * renders (see README.md in this folder for how it was made and when to regenerate it). It is served from
 * our own domain, so there is no third-party font request, and Next.js preloads it and generates a
 * size-adjusted fallback font so the text does not shift when the real font arrives.
 */
export const geistSans = localFont({
  src: "./Geist-latin.woff2",
  variable: "--font-geist-sans",
  // The subset keeps the 400 to 600 range: regular text, medium labels and semibold headings.
  weight: "400 600",
  display: "swap",
});
