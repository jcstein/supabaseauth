const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    publicExcludes: [
      '!robots.txt',
      'sitemap.xml.gz',
    ],
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
});