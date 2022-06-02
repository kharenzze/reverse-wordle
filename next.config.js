const packageJson = require('./package.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    VERSION: packageJson.version,
  },
}

module.exports = nextConfig
