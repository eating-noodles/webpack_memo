// HMR
import './style.css';

var btn = document.createElement('button')
btn.innerHTML = '新增'
document.body.appendChild(btn)

btn.onclick = function () {
    var div = document.createElement('div')
    div.innerHTML = 'item'
    document.body.appendChild(div)
}

import counter from './counter';
import number from './number';
import number1 from './number1'

counter()
number()
number1()

if (module.hot) {
    module.hot.accept('./number.js', () => {
        document.body.removeChild(document.getElementById('number'))
        number()
    })
}