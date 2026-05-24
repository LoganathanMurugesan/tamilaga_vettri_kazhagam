import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // Static HTML export → outputs to /out
  images: {
    unoptimized: true,    // Required for static export (no server-side image optimisation)
  },
};

export default nextConfig;
