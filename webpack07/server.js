const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')

// note:编译器执行一次，会重新打包一次代码
const complier = webpack(config)

const app = new express()
app.use(webpackDevMiddleware(complier, {
    // publicPath: config.output.publicPath
}))

app.listen(3000, () => {
    console.log('server is running')
})