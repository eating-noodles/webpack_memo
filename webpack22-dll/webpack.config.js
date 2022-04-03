const path = require('path');
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

const plugin = [new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
  new CleanWebpackPlugin()
]
const files = fs.readdirSync(path.resolve(__dirname, './dll'))
console.log(files)
files.forEach(file => {
  if (/.*\.dll.js/.test(file)) {
    plugin.push(new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, './dll', file),
      publicPath: './',
    }))
  }
  if (/.*\.manifest.json/.test(file)) {
    plugin.push(new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, './dll', file),
    }))
  }
})

module.exports = {
  mode: 'development', // development\production 模式
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, ],
  },
  plugins: plugin,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};