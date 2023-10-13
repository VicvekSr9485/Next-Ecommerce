/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com", "lh3.googleusercontent.com", "media.istockphoto.com"],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
