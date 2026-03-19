/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false, // Testing if SWC is causing the "os" TypeError on Windows
    images: {
        domains: [],
    },
}

module.exports = nextConfig
