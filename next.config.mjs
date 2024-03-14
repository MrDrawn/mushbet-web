/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: 'https://api.moonkode.com.br',
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
