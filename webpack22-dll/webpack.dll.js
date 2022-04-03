const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: {
    vendors: ['lodash'],
    react: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './dll'),
    library: '[name]',
  },
  plugins: [
    // 表示对生成的dll库([name]是占位符，表示dll库的名字，在这里代表vendors)进行分析，并把分析的结果放到'./dll/[name].manifest.json'文件里里面
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, './dll/[name].manifest.json')
    })
  ]
};
