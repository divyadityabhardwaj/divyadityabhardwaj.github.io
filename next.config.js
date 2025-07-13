/** @type {import('next').NextConfig} */
const repo = 'divyadityabhardwaj.github.io'; // your repo name
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 