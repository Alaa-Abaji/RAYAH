import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-globe.gl", "three"],
  allowedDevOrigins: ["http://192.168.1.100:3000", "192.168.1.100", "https://plain-colts-unite.loca.lt", "plain-colts-unite.loca.lt"],
};

export default nextConfig;
