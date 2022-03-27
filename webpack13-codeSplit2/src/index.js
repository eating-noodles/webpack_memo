// 异步代码的分割
function getComponent() {
    return import('lodash').then(({ default: _ }) => {
        var element = document.createElement('div')
        element.innerHTML = _.join(['1', '2'], '-')
        return element
    })
}

getComponent().then(el => {
    document.body.appendChild(el)
})