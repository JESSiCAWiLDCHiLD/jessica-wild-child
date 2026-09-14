/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All portfolio images are static files already committed to /public —
    // serve them as-is instead of routing through Vercel's Image
    // Optimization service at runtime. That extra step was the likely
    // cause of images failing in production while working locally.
    unoptimized: true,
  },
};
export default nextConfig;
