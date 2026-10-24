import type { NextConfig } from "next";

// Threads tools live in separate Vercel projects, proxied under /threads.
// Order matters: Threads Lab gets /threads itself, its API and its images;
// everything else under /threads/ (e.g. /threads/<shareId>) is the growth dashboard.
const LAB = "https://mat-threads-lab.vercel.app";
const DASHBOARD = "https://mat-threads-dashboard.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/threads", destination: `${LAB}/` },
      { source: "/threads/api/:fn(data|edit)", destination: `${LAB}/api/:fn` },
      { source: "/threads/img/:path*", destination: `${LAB}/img/:path*` },
      { source: "/threads/:path*", destination: `${DASHBOARD}/threads/:path*` },
    ];
  },
};

export default nextConfig;
