const path = require('path');
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

const makePlugins = (configs) => {
  const plugins = [new CleanWebpackPlugin()]

  Object.keys(configs.entry).forEach(item => {
    plugins.push(new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: `${item}.html`,
      chunks: ['vendors', item]
    }), )
  })

  const files = fs.readdirSync(path.resolve(__dirname, './dll'))
  // console.log(files)
  files.forEach(file => {
    if (/.*\.dll.js/.test(file)) {
      plugins.push(new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, './dll', file),
        publicPath: './',
      }))
    }
    if (/.*\.manifest.json/.test(file)) {
      plugins.push(new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, './dll', file),
      }))
    }
  })

  return plugins
}


const configs = {
  mode: 'development', // development\production 模式
  entry: {
    index: './src/index.js',
    list: './src/list.js',
    detail: './src/detail.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};

configs.plugins = makePlugins(configs)

module.exports = configs