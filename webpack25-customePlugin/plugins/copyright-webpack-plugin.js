class CopyrightWebpackPlugin {
    constructor(options) {
        console.log('插件被使用了', options)
    }

    // note: 插件被使用时,会自动调用apply方法
    apply(compiler) {
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log("compiler")
        })

        // note: compiler是webpack的实例，存储了webpack一系列的配置和内容
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            // note: compiler存储的是打包的内容和配置；compilation存储的是这次打包的配置和内容
            compilation.assets['copyright.txt'] = {
                source: function () {
                    return 'copyright by noodles'
                },
                size: function () {
                    return 21;
                }
            }
            cb()
        })
    }
}

module.exports = CopyrightWebpackPlugin;