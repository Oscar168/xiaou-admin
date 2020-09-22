/**
 * 根据屏幕的宽度，动态的改变 html的font-size
 */

var width = document.documentElement.clientWidth; // 375
// 我们想 将来量多少，自己直接除以100就是我们要的rem的值
document.documentElement.style.fontSize = width / 7.5 + 'px' // 50

window.onresize = function () {
    var width = document.documentElement.clientWidth; // 375
    // 我们想 将来量多少，自己直接除以100就是我们要的rem的值
    document.documentElement.style.fontSize = width / 7.5 + 'px' // 50
}
// 7.5rem => 375px