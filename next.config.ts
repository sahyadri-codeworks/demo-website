import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH is set to "/demo-website" by the GitHub Pages
// deploy workflow; local dev and Vercel serve from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
