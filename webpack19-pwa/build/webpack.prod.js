const {
    merge
} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const prodConfig = {
    mode: 'production',
    // devtool: 'cheap-module-source-map',
    output: {
        // punlicPath: '/',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].[contenthash].chunk.js'
    },
    plugins: [new WorkboxWebpackPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
    })]
}

module.exports = merge(commonConfig, prodConfig)