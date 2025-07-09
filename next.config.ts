import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,
  },
  // Disable source maps in production to reduce build time and size
  productionBrowserSourceMaps: false,
  // Optimize for Docker builds
  swcMinify: true,
  poweredByHeader: false,
};

export default nextConfig;
