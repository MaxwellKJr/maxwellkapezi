/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.vercel.com", "murmuring-tor-19815.herokuapp.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
