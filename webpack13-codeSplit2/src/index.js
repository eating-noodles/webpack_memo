import test from './test.js'

console.log(test.name)

// import _ from 'lodash'
// var element = document.createElement('div')
// element.innerHTML = _.join(['1', '2'], '-')
// 异步代码的分割
// function getComponent() {
//     return import(/* webpackChunkName:"loadsh"*/'lodash').then(({ default: _ }) => {
//         var element = document.createElement('div')
//         element.innerHTML = _.join(['1', '2'], '-')
//         return element
//     })
// }

// getComponent().then(el => {
//     document.body.appendChild(el)
// })