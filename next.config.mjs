/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages serves the site as static files; there is no server
  // runtime, no API routes, and nothing dynamic on the page.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
