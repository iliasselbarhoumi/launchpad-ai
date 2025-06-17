/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
    optimizePackageImports: ["lucide-react", "@clerk/nextjs"],
  },
};

module.exports = nextConfig;
