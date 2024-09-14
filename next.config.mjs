/* eslint-disable prettier/prettier */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "preodemo.gumlet.io",
      },
    ],
  },
};

export default nextConfig;
