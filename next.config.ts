import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ protocol: "http", hostname: "84.247.132.242", port: "1337" }],
	},
};

export default nextConfig;
