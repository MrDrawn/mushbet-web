/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://api.mush.bet',
    // API_URL: 'http://127.0.0.1:3333',
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
