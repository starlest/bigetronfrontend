const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");
require("dotenv").config();

const nextConfig = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    STRAPI_API_URL: process.env.STRAPI_API_URL,
  },
  images: {
    domains: ["bigetron-web.s3.ap-southeast-1.amazonaws.com"],
  },
  webpack(config, options) {
    return config;
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
