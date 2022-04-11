const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core')

const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename, 'utf-8');

    // note: 输出的内容是ast,抽象语法树
    const ast = parser.parse(content, {
        sourceType: 'module'
    })

    // note: 存放依赖的数组
    const dependencies = {}
    traverse(ast, {
        ImportDeclaration({ node }) {
            const dirname = path.dirname(filename)
            // note: 将相对路径转换为针对‘项目根目录’的相对路径
            const newFile = './' + path.join(dirname, node.source.value)
            dependencies[node.source.value] = newFile
        }
    })
    const { code } = babel.transformFromAstSync(ast, null, {
        presets: ["@babel/preset-env"]
    })

    return {
        filename,
        dependencies,
        code
    }
}
// const moduleInfo = moduleAnalyser('./src/index.js')
// console.log(moduleInfo)

const makeDependenciesGraph = (entry) => {
    const entryModule = moduleAnalyser(entry)
    const graphArr = [entryModule]
    for (let i = 0; i < graphArr.length; i++) {
        const item = graphArr[i]
        const { dependencies } = item
        if (dependencies) {
            for (let j in dependencies) {
                graphArr.push(moduleAnalyser(dependencies[j]))
            }
        }
    }
    const graph = {};
    graphArr.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })
    return graph
}
// const graphInfo = makeDependenciesGraph('./src/index.js')
// console.log(graphInfo)

const generateCode = (entry) => {
    const graph = JSON.stringify(makeDependenciesGraph(entry));
    // note: 为了不污染环境，使用闭包
    return `
        (function(graph){
            function require(module) {
                function localRequire(relativePath) {
                    return require(graph[module].dependencies[relativePath]);
                }
                var exports = {};
                (function(require, exports, code) {
                    eval(code);
                })(localRequire, exports, graph[module].code)
                return exports;
            };
            require('${entry}')
        })(${graph});
    `
}

const code = generateCode('./src/index.js')
console.log(code)