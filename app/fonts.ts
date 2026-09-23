import localFont from "next/font/local";

/** Body, navigation and UI text. Self-hosted so no third-party font requests are made. */
export const instrumentSans = localFont({
  src: "../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2",
  weight: "400 700",
  variable: "--font-instrument-sans",
  display: "swap",
});

/** Display headings only; it has a single weight by design. */
export const instrumentSerif = localFont({
  src: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});
