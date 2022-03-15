const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        sub: './src/index.js',
    },
    module: {
        rules: [{
                test: /\.(ttf|woff|woff2)$/,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        publicPath: 'http://cdn.com',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}