// DONE REVIEWING: GITHUB COMMIT - 02
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
        port: 3000
      }
    ]
  }
}

module.exports = nextConfig
