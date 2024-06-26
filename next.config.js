/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  }
})
