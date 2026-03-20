/** @type {import('next').NextConfig} */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === "true";
const useBasePath = Boolean(rawBasePath && rawBasePath !== "/" && !isCustomDomain);

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: useBasePath ? rawBasePath : "",
  assetPrefix: useBasePath ? rawBasePath : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
