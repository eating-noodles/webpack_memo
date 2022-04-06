// note: 不能是箭头函数
// note: source这里是源代码
module.exports = function (source) {
    console.log(this.query)
    const callback = this.async()

    setTimeout(() => {
        const result = source.replace('noodles', this.query.name)
        callback(null, result)
    }, 1000)
}

// this.callback(
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: SourceMap,
//   meta?: any
// );