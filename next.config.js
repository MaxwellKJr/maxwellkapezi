/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_URL: "https://murmuring-tor-19815.herokuapp.com",
    STRAPI_VERCEL_ACCESS_TOKEN:
      "d3b0424c7674226c3b43bdf585f6cd0140d11890705067d361d5ee9ebbfed21ed11ab937e955e8e96aec0f67aa9ccf1531d2a79befd1c08b1cb5064e8a17d71be1d986b1d094a2ad2424a67a165758f02dac727593f07019161c27485a5fe25d220434424f8c68e234eeaf21aad3ea9229baaa776dba354de4fc70ebe2617d2a",
  },
  images: {
    domains: ["assets.vercel.com", "murmuring-tor-19815.herokuapp.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
