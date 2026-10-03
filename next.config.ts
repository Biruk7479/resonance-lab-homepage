import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pre-render every page to static HTML in out/, so the site can be
  // served from any static host (or a university web server) without Node.
  output: "export",
  // Images are pre-optimised (WebP at 2x display size) and committed,
  // so the Next.js image server is not needed for the static export.
  images: { unoptimized: true },
};

export default nextConfig;
