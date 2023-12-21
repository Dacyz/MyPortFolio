/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "icon-library.com",
      "*",
      "www.qfs.de",
      "i0.wp.com",
      "www.ensenalia.com",
      "mloorxyis2tz.i.optimole.com",
      "pbs.twimg.com",
    ],
  },
};

module.exports = nextConfig;
