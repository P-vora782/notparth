import type { NextConfig } from "next";

// Threads growth dashboards live in a separate Vercel project (mat-threads-dashboard).
const DASHBOARD = "https://mat-threads-dashboard.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/threads/:path*", destination: `${DASHBOARD}/threads/:path*` },
    ];
  },
};

export default nextConfig;
