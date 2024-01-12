/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  env: {
    API_DOMAIN: process.env.API_DOMAIN,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
};

module.exports = nextConfig;
