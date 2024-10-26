/** @type {import('next').NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["assets.aceternity.com"], // Add your external image domain here
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default config;
