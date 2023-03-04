/** @type {import('next').NextConfig} */
const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          forceHTTPSRedirect: [true, { maxAge: 63072000 }],
          frameGuard: "deny",
          noopen: "noopen",
          nosniff: "nosniff",
          xssProtection: "sanitize",
          contentSecurityPolicy: {
            directives: {
              defaultSrc: [
                "*",
                "data:",
                "blob:",
                "'unsafe-inline'",
                "'unsafe-eval'",
              ],
            },
          },
        }),
      },
    ];
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:slug*.php",
        destination: "/no-php",
        permanent: true,
      },
    ];
  },
};
