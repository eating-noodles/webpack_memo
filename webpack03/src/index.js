//  ES Moudule 模块引入方式 浏览器不认识的语法，webpack进行翻译 
import avatar from './avatar.jpg'
// note: 模块化css,引入的样式不会影响到createAvatar中图片的样式
import style from './index.scss'
import createAvatar from './createAvatar'

createAvatar()

var img = new Image()
img.src = avatar
img.classList.add(style.avatar)

var root = document.getElementById('root');
root.append(img)

