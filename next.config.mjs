import "./src/env.mjs"

import nextPWA from "next-pwa"

const withPWA = nextPWA({
  dest: "public",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "samehadaku.mba",
      },
      {
        protocol: "https",
        hostname: "gogocdn.net",
      },
    ],
    unoptimized: true,
  },
  output: "standalone",
}

export default process.env.NODE_ENV === "development"
  ? nextConfig
  : withPWA(nextConfig)
