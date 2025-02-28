import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:slug',
        destination: 'https://collections.energytransitionmodel.com/:slug',
        permanent: true,
      },
      {
        source: '/:slug/:charts',
        destination: 'https://collections.energytransitionmodel.com/:slug/:charts',
        permanent: true,
      },
      {
        source: '/:slug/:charts/:chart',
        destination: 'https://collections.energytransitionmodel.com/:slug/:charts/:chart',
        permanent: true,
      },
      {
        source: '/:slug/:charts/:chart/:sub',
        destination: 'https://collections.energytransitionmodel.com/:slug/:charts/:chart/:sub',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
