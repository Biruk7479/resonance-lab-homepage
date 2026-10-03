import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// IBM Plex (SIL Open Font License), self-hosted: no third-party font requests.
const plexSans = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

const plexSerif = localFont({
  src: "./fonts/ibm-plex-serif-latin-600-normal.woff2",
  weight: "600",
  variable: "--font-plex-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const description =
  "RESONANCE (Responsible AI Solutions and Networks for Sustainable Development) is an AI4D lab at Addis Ababa University's College of Technology and Built Environment, building ethical and scalable AI for health, agriculture, governance and energy in Ethiopia.";

export const metadata: Metadata = {
  title: "RESONANCE AI4D Lab | Addis Ababa University",
  description,
  openGraph: {
    title: "RESONANCE AI4D Lab",
    description,
    siteName: "RESONANCE AI4D Lab",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#005747",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
