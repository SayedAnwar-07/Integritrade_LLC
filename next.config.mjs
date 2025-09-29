/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, 
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  },
  output: "export" 
};

export default nextConfig;
