// 获取 html 宽度（设备宽度）
var deviceWidth = document.documentElement.clientWidth;
// 750 可以根据实际设计稿的宽度进行修改
if (deviceWidth > 750) {
    deviceWidth = 750;
}
if (deviceWidth <= 320) {
    fs = 40;
}
var fs = (deviceWidth * 100) / 750;
document.documentElement.style.fontSize = fs + 'px';