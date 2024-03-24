/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "img.freepik.com",
            },
            {
                protocol: 'https',
                hostname: "images.generated.photos",
            }
        ]
    }
};

export default nextConfig;
