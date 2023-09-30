/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: { icon: "30px", replaceAttrValues: { "#fff": "currentColor", white: "currentColor" } },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
