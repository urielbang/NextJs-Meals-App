/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // enable server actions for useFormStatus and other features
    appDir: true, // enable the app directory (if you're using the new Next.js layout)
  },
};

export default nextConfig;
