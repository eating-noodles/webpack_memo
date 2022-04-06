// note: 不能是箭头函数
// note: source这里是源代码
module.exports = function (source) {
    console.log(this.query)

   return source.replace('foo', 'world')
}

// this.callback(
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: SourceMap,
//   meta?: any
// );