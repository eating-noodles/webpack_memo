//  ES Moudule 模块引入方式 浏览器不认识的语法，webpack进行翻译 
import avatar from './avatar.jpg'

var img = new Image()
img.src = avatar
var root = document.getElementById('root');
root.append(img)

