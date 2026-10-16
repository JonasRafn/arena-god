import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        // unoptimized: true,
        minimumCacheTTL: 2678400, //31 Days
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ddragon.leagueoflegends.com",
            },
        ],
    },
};

export default nextConfig;
