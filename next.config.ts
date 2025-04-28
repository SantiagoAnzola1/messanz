import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   swcPlugins: [["next-superjson-plugin", {}]],
  // },

  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
      "cdn.discordapp.com",
    ],
  },
};

export default nextConfig;
