/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    source: "/api/:path*",
    headers: [
      { key: "Access-Control-Allow-Credentials", value: "true" },
      { key: "Access-Control-Allow-Origin", value: "*" },
      { key: "Access-Control-Allow-Methods", value: "GET" },
      { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
    ],
    images: {
      
    domains: ['images.unsplash.com',
      "api.microlink.io",
      "avatars.githubusercontent.com"
    ],
  },
};

export default nextConfig;
