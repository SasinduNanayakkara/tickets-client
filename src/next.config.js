/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          domains: ['uploads-ssl.webflow.com',"i.ytimg.com","mytickets.lk"],
        },
        reactStrictMode: false,
        output: 'standalone'
}

module.exports = nextConfig
