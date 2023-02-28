/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   target: 'serverless',
//   webpack: function (config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: 'raw-loader',
//     })
//     return config
//   }
// }
// module.exports = nextConfig
