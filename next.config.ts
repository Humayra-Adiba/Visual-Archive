import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["imgur.com", "img.freepik.com"], // Add imgur.com to allowed domains
  },
};

export default nextConfig;