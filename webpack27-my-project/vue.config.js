const path = require('path')

module.exports = {
    outputDir: 'noodles',
    // note: 可以写原生的webpack配置
    configureWebpack: {
        devServer: {
            contentBase: [path.resolve(__dirname, "static")]
        }
    }
}