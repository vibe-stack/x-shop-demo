import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/x-shop-demo',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
