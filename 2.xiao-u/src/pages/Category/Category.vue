<template>
    <div>
          <!-- 页眉 -->
        <div class="wrap">
            <header class="header">
                <div class="btn"><a href="index.html" target="_blank"><img src="../img/classify/arrow.jpg" alt=""></a></div>
                <div class="title">商品分类</div>
                <div class="bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="top-bar">
                    <span></span><span></span><span></span><span></span>
                </div>
            </header>
        </div>
        <!-- 产品分类信息 -->
        <div class="wrap">
            <section class="section">
                <!-- 左列信息 -->
                <div class="section-left">
                    <div class="nav"><a href="###">施华蔻</a></div>
                    <div class="nav"><a href="###">沙宣</a></div>
                    <div class="nav"><a href="###">欧莱雅</a></div>
                    <div class="nav"><a href="###">潘婷</a></div>
                    <div class="nav"><a href="###">资生堂</a></div>
                    <div class="nav"><a href="###">阿道夫</a></div>
                    <div class="nav"><a href="###">卡诗</a></div>
                    <div class="nav"><a href="###">海飞丝</a></div>
                    <div class="nav"><a href="###">资生堂</a></div>

                </div>
                <!-- 右边列信息 -->
                <div class="section-right">
                    <div class="section-right-in">
                        <ul>
                            <!-- 洗发类 -->
                            <li class="more">
                                <p>洗发水</p>
                                <p><a href="list.html" target="_blank">更多></a></p>
                            </li>
                            <li>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_1.jpg" alt=""></a></p>
                                    <p>护亮泽洗发水</p>
                                </div>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_1.jpg" alt=""></a></p>
                                    <p>滋养洗发水</p>
                                </div>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_1.jpg" alt=""></a></p>
                                    <p>柔顺洗发露</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_1.jpg" alt=""></a></p>
                                    <p>去屑洗发露</p>
                                </div>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_1.jpg" alt=""></a></p>
                                    <p>柔顺洗发露</p>
                                </div>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_1.jpg" alt=""></a></p>
                                    <p>焕彩洗发水</p>
                                </div>
                            </li>
                            <!-- 染发类 -->
                            <li class="more">
                                <p>染发类</p>
                                <p><a href="list.html" target="_blank">更多></a></p>
                            </li>
                            <li>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_2.jpg" alt=""></a></p>
                                    <p>施华蔻染色</p>
                                </div>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_2.jpg" alt=""></a></p>
                                    <p>施华蔻双氧乳</p>
                                </div>
                                <div>
                                    <p><a href="detail.html" target="_blank"><img src="../img/classify/shop_2.jpg" alt=""></a></p>
                                    <p>施华蔻染发膏</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
*
 list-style none
img{vertical-align: bottom;border:none; width:100%;height:100%;}
a,button,input,select,textarea {
    -webkit-tap-highlight-color:rgba(0,0,0,0); 
    /*去掉a、input和button点击时的蓝色外边框和灰色半透明背景*/
}
a{text-decoration: none;color:#333;}
input{margin:0;padding:0;border:none; font-family:inherit;}
input,textarea{outline:none;}
.wrap {
  width: 7.5rem;
  margin: auto;
  font-size: 0.24rem;
}
.header {
  display: flex;
  justify-content: space-between;
  background-color: #f26b11;
  color: white;
  font-size: 0.34rem;
  height: 1.3rem;
  padding-top: 0.68rem;
  box-sizing: border-box;
  position: relative;
}
.header span {
  display: inline-block;
  width: 0.14rem;
  height: 0.14rem;
  border-radius: 50%;
  background-color: white;
}
.header .btn {
  width: 0.15rem;
  height: 0.32rem;
  margin-left: 0.28rem;
}
.header .bar {
  margin-right: 0.34rem;
}
.header .top-bar {
  position: absolute;
  left: 0.16rem;
  top: 0.18rem;
}
.section .section-left {
  width: 1.62rem;
  position: absolute;
  border-right: 0.01rem  solid #d9d9d9;
}
.section .section-left .nav {
  width: 100%;
  height: 0.54rem;
  line-height: 0.54rem;
  text-align: center;
  color: #666666;
  border-left: 0.08rem solid transparent;
  box-sizing: border-box;
  margin-bottom: 0.54rem;
}
.section .section-left .nav:hover {
  border-color: #f26b11;
}
.section .section-left .nav:hover a {
  color: #f26b11;
}
.section .section-left .nav:nth-child(1) {
  margin-top: 0.4rem;
  border-color: #f26b11;
}
.section .section-right {
  width: 100%;
}
.section .section-right .section-right-in {
  padding-left: 1.62rem;
  color: #868686;
}
.section .section-right .section-right-in ul {
  overflow: hidden;
}
.section .section-right .section-right-in ul li {
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
}
.section .section-right .section-right-in ul li div {
  margin-left: 0.28rem;
}
.section .section-right .section-right-in ul li div p:nth-child(1) {
  margin-bottom: 0.24rem;
}
.section .section-right .section-right-in ul li div p:nth-child(2) {
  width: 1.69rem;
}
.section .section-right .section-right-in ul li:nth-child(1) {
  margin-top: 0.52rem;
  margin-bottom: 0.5rem;
}
.section .section-right .section-right-in ul li:nth-child(1) p:nth-child(1) {
  color: #454545;
  margin-left: 0.56rem;
}
.section .section-right .section-right-in ul li:nth-child(1) p:nth-child(2) {
  margin-right: 0.44rem;
}
.section .section-right .section-right-in ul li:nth-child(1) p:nth-child(2) a {
  color: #c2c2c2;
}
.section .section-right .section-right-in ul li:nth-child(2) {
  margin-right: 0.24rem;
}
.section .section-right .section-right-in ul li:nth-child(3) {
  margin-top: 0.52rem;
}
.section .section-right .section-right-in ul li:nth-child(4) {
  margin-left: 0.56rem;
  margin-top: 1.14rem;
  margin-bottom: 0.6rem;
}
.section .section-right .section-right-in ul li:nth-child(5) {
  margin-left: 0.2rem;
  margin-right: 0.36rem;
}
.section .section-right .section-right-in ul li:nth-child(5) p:nth-child(1) {
  width: 0.82rem;
  height: 1.33rem;
}
.section .section-right .section-right-in ul li.more p:nth-child(1) {
  color: #454545;
}
.section .section-right .section-right-in ul li.more p:nth-child(2) a {
  color: #808080;
}
</style>