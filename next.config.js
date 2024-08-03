/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)', // Matches all routes
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allows all origins
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS', // Specifies allowed methods
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization', // Specifies allowed headers
          },
        ],
      },
    ];
  },
};
