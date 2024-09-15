/* eslint-disable prettier/prettier */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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

export default withNextIntl(nextConfig);
