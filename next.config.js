/** @type {import('next').NextConfig} */
const nextConfig = {    
    // allows us to use external images on our website
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            }
        ]
    },

};

module.exports = nextConfig
