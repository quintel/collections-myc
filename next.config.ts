import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:slug',
        destination: 'https://collections.energytransitionmodel.com/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
