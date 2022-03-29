const {
    merge
} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const path = require('path')

const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: './dist',
        open: true,
        hot: 'only'
        // hot: false
    },
    output: {
        // punlicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].chunk.js'
    }
}

module.exports = merge(commonConfig, devConfig)