/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://api.alpha7.bet',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
