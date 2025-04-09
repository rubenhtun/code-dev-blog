import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ugkmxq8dxms97mg5.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["lh3.googleusercontent.com"],
  },
};

export default nextConfig;
