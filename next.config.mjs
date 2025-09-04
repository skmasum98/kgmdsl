/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // Export as static HTML
  images: { unoptimized: true }, // Disable next/image optimization (needed for static hosting)
  trailingSlash: true,    // Ensures reload and pretty URLs work
};

export default nextConfig;
