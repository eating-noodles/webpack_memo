const merge = require("webpack-merge")
const commonConfig = require("./webpack.common")

const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: './dist',
        open: true,
        hot: 'only'
        // hot: false
    },
    optimization: {
        usedExports: true
    },
}

module.exports = merge(commonConfig, devConfig)