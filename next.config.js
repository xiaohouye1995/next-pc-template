/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    // basePath: '/',
    sassOptions: {
        includePaths: [path.join(__dirname, './src/styles')],
        prependData: `@import "px2viewport.scss";`
    }
}

module.exports = nextConfig
