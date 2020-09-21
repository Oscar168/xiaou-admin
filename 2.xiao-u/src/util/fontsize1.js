// rem 1rem=html的font-size 16px;
//根据屏幕的宽度来动态设置 rem；
var width=document.documentElement.clientWidth;
// 1rem=100px html的font-size=100px；
document.documentElement.style.fontSize=width / 3.75 + "px"

/* 
 文件创建完毕，然后在入口文件 main.js中引入即可；
*/