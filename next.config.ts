
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // The lines below are required for Capacitor to work correctly with Next.js
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
