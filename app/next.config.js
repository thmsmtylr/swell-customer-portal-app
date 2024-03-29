/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopau.coffeesupreme.com",
      },
      {
        protocol: "https",
        hostname: "cdn.schema.io",
      },
      {
        protocol: "https",
        hostname: "cdn.swell.store",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
