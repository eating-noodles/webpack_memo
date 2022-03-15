const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.(jpg|png)$/,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name]_[hash].[ext]',
            //             outputPath: 'images/'
            //         }
            //     },
            // },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 20480
                    }
                },

            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}