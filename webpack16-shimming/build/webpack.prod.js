const {
    merge
} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const path = require('path')

const prodConfig = {
    mode: 'production',
    // devtool: 'cheap-module-source-map',
    output: {
        // punlicPath: '/',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].[contenthash].chunk.js'
    }
}

module.exports = merge(commonConfig, prodConfig)