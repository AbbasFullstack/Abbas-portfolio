import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve optimized AVIF/WebP variants through next/image on Vercel.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
