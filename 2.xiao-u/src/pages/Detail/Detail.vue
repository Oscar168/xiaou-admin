<template>
    <div>
        <!-- 页眉 -->
        <div class="wrap">
            <header class="header">
                <div class="btn"><a href="index.html" target="_blank"><img src="../img/public/arrow.jpg" alt=""></a></div>
                <div class="title">商品详情</div>
                <div class="bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="top-bar">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
            </header>
        </div>
        <!-- 商品详情 -->
        <div class="wrap">
            <section class="detail">
                <div class="detail-bg">
                    <ul>
                        <li><a href="###"><img src="../img/detail_images/pic_1.jpg" alt=""></a></li>
                        <li><a href="###"><img src="../img/detail_images/pic_2.jpg" alt=""></a></li>
                        <li>娅芝贵妇素颜霜贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</li>
                        <li>
                            <span>￥123.00</span>
                            <span>(此价格不与套装优惠同时享受)</span>
                        </li>
                    </ul>
                </div>
                <div class="detail-dis">
                    <div class="detail-dis-top">
                        <ul>
                            <li>
                                <span>促销 :</span>
                                <span>满减</span>
                                <span>满2件9折;</span>
                                <span>3件8折</span>
                            </li>
                        </ul>
                        <div class="btn">
                            <a href="###"><img src="../img/detail_images/arrow (2).jpg" alt=""></a>
                        </div>
                    </div>
                    <div class="detail-dis-middle">
                        <ul>
                            <li>购买数量</li>
                            <li>
                                <span><a href="###">-</a></span>
                                <span>1</span>
                                <span><a href="###">+</a></span>
                            </li>
                        </ul>
                    </div>
                    <div class="detail-dis-bottom">
                        <h2>商品属性</h2>
                        <p>
                            <span>规格</span>
                            <span>30g</span>
                            <span>5g</span>
                        </p>
                        <div class="btn">
                            <a href="###"><img src="../img/detail_images/arrow (2).jpg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="detail-more">
                    <ul>
                        <li>商品详情</li>
                        <li><a href="###"><img src="../img/detail_images/pic_3.jpg" alt=""></a></li>
                        <li><a href="###"><img src="../img/detail_images/pic_4.jpg" alt=""></a></li>
                        <li><a href="###"><img src="../img/detail_images/pic_5.jpg" alt=""></a></li>
                        <li><a href="###"><img src="../img/detail_images/pic_6.jpg" alt=""></a></li>
                        <li><a href="###"><img src="../img/detail_images/pic_7.jpg" alt=""></a></li>
                    </ul>
                </div>
                <div class="rating">
                    <ul>
                        <li>商品评价</li>
                        <li>
                            <p>1235668fg</p>
                            <p>效果很好,物流到位，下次继续来!</p>
                            <p>
                                <a href="###"><span><img src="../img/detail_images/pic_8.jpg" alt=""></span></a>
                                <a href="###"><span><img src="../img/detail_images/pic_9.jpg" alt=""></span></a>
                                <a href="###"><span><img src="../img/detail_images/pic_10.jpg" alt=""></span></a>
                            </p>
                            <p>2020-01-13</p>
                        </li>
                        <li>
                            <p>共1000+条评论</p>
                            <p><a href="list.html" target="_blank">查看更多></a></p>
                        </li>
                        <li>
                            <div>
                                <p><img src="../img/public/icon_8.jpg" alt=""></p>
                                <p>购物车</p>
                            </div>
                            <div>
                                <a href="shopping-cart.html" target="_blank"><span>加入购物车</span></a><a href="###"><span class="buy">立即购买</span></a>
                                <!-- 如果换行的时候span标签会出现缝隙 -->
                            </div>
                        </li>
                    </ul>
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
  font-size: 0.26rem;
}
.header {
  display: flex;
  justify-content: space-between;
  background-color: #f26b11;
  color: white;
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
.detail {
  background-color: #f1f1f1;
}
.detail .detail-bg {
  height: 9.56rem;
  background-color: white;
}
.detail .detail-bg ul li img {
  display: block;
}
.detail .detail-bg ul li:nth-child(3) {
  font-size: 0.3rem;
  color: #333;
  margin: 0.3rem 0.46rem auto 0.46rem;
  line-height: 0.46rem;
}
.detail .detail-bg ul li:nth-child(4) {
  margin: 0.4rem 0.46rem auto 0.38rem;
}
.detail .detail-bg ul li:nth-child(4) span {
  vertical-align: middle;
}
.detail .detail-bg ul li:nth-child(4) span:nth-child(1) {
  font-size: 0.26rem;
  color: #e3393a;
}
.detail .detail-bg ul li:nth-child(4) span:nth-child(2) {
  font-size: 0.2rem;
  color: #acacac;
}
.detail .detail-dis {
  font-size: 0.24rem;
  margin: 0.16rem auto;
  background-color: white;
}
.detail .detail-dis .detail-dis-top {
  position: relative;
  height: 1rem;
  line-height: 1rem;
}
.detail .detail-dis .detail-dis-top ul li span:nth-child(1) {
  margin-left: 0.26rem;
}
.detail .detail-dis .detail-dis-top ul li span:nth-child(2) {
  display: inline-block;
  width: 0.64rem;
  height: 0.38rem;
  text-align: center;
  line-height: 0.38rem;
  border: 1px solid #b0281a;
  color: #b0281a;
  font-size: 0.2rem;
  border-radius: 0.04rem;
  margin-left: 0.28rem;
  margin-right: 0.16rem;
}
.detail .detail-dis .detail-dis-top .btn {
  position: absolute;
  width: 0.32rem;
  height: 0.15rem;
  right: 0;
  bottom: 1.2rem;
}
.detail .detail-dis .detail-dis-middle {
  height: 1.08rem;
  line-height: 1.08rem;
  background-color: #fff;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
}
.detail .detail-dis .detail-dis-middle ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail .detail-dis .detail-dis-middle ul li:nth-child(1) {
  margin-left: 0.26rem;
}
.detail .detail-dis .detail-dis-middle ul li:nth-child(2) {
  height: 0.6rem;
  line-height: 0.6rem;
  border: 1px solid #333;
  border-radius: 0.04rem;
  text-align: center;
  margin-right: 0.28rem;
}
.detail .detail-dis .detail-dis-middle ul li:nth-child(2) span {
  display: inline-block;
  width: 0.68rem;
  height: 0.6rem;
}
.detail .detail-dis .detail-dis-middle ul li:nth-child(2) span:nth-child(2) {
  width: 0.76rem;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}
.detail .detail-dis .detail-dis-bottom {
  padding-left: 0.26rem;
  height: 1.8rem;
  overflow: hidden;
  background-color: white;
  position: relative;
}
.detail .detail-dis .detail-dis-bottom h2 {
  margin-top: 0.4rem;
  margin-bottom: 0.28rem;
}
.detail .detail-dis .detail-dis-bottom p span {
  display: inline-block;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.04rem;
  color: white;
}
.detail .detail-dis .detail-dis-bottom p span:nth-child(1) {
  color: #acacac;
}
.detail .detail-dis .detail-dis-bottom p span:nth-child(2) {
  width: 1.5rem;
  background-color: #e43a3d;
  margin-left: 0.7rem;
  margin-right: 0.16rem;
}
.detail .detail-dis .detail-dis-bottom p span:nth-child(3) {
  width: 1.16rem;
  background-color: #e1e1e3;
}
.detail .detail-dis .detail-dis-bottom .btn {
  position: absolute;
  width: 0.32rem;
  height: 0.15rem;
  right: 0;
  bottom: 0.9rem;
}
.detail .detail-more {
  background-color: #fff;
}
.detail .detail-more ul li img {
  display: block;
}
.detail .detail-more ul li:nth-child(1) {
  height: 1.02rem;
  line-height: 1.02rem;
  margin-left: 0.25rem;
}
.detail .detail-more ul li:nth-child(2) {
  height: 4.58rem;
}
.detail .detail-more ul li:nth-child(3) {
  height: 6.48rem;
}
.detail .detail-more ul li:nth-child(4) {
  height: 5.92rem;
}
.detail .detail-more ul li:nth-child(5) {
  height: 3.50rem;
}
.detail .detail-more ul li:nth-child(6) {
  height: 3.31rem;
  margin-bottom: 0.3rem;
}
.detail .rating {
  background-color: #fff;
  margin-top: 0.3rem;
}
.detail .rating ul {
  padding-left: 0.26rem;
}
.detail .rating ul li:nth-child(1) {
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
}
.detail .rating ul li:nth-child(2) {
  height: 3.78rem;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
}
.detail .rating ul li:nth-child(2) p:nth-child(1) {
  font-size: 0.2rem;
  color: #989898;
  margin-top: 0.28rem;
  margin-bottom: 0.34rem;
}
.detail .rating ul li:nth-child(2) p:nth-child(2) {
  color: #868686;
}
.detail .rating ul li:nth-child(2) p:nth-child(3) {
  margin: 0.36rem auto;
}
.detail .rating ul li:nth-child(2) p:nth-child(3) span {
  display: inline-block;
  width: 1.54rem;
  height: 1.51rem;
}
.detail .rating ul li:nth-child(2) p:nth-child(4) {
  font-size: 0.2rem;
  color: #acacac;
}
.detail .rating ul li:nth-child(3) {
  display: flex;
  justify-content: space-between;
  height: 0.92rem;
  line-height: 0.92rem;
  color: #acacac;
  font-size: 0.24rem;
  border-bottom: 1px solid #f1f1f1;
}
.detail .rating ul li:nth-child(3) a {
  color: #acacac;
}
.detail .rating ul li:nth-child(3) p:nth-child(2) {
  margin-right: 0.28rem;
}
.detail .rating ul li:nth-child(4) {
  display: flex;
  height: 1.16rem;
}
.detail .rating ul li:nth-child(4) div:nth-child(1) {
  margin-right: 0.2rem;
}
.detail .rating ul li:nth-child(4) div:nth-child(1) p:nth-child(1) {
  margin-top: 0.2rem;
  margin-bottom: 0.12rem;
  width: 0.52rem;
  height: 0.53rem;
}
.detail .rating ul li:nth-child(4) div:nth-child(1) p:nth-child(2) {
  position: relative;
  font-size: 0.18rem;
  color: #acacac;
}
.detail .rating ul li:nth-child(4) div:nth-child(1) p:nth-child(2):after {
  content: '2';
  display: block;
  width: 0.24rem;
  height: 0.24rem;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 0.24rem;
  position: absolute;
  right: -0.1rem;
  top: -0.7rem;
  background-color: #e3393c;
}
.detail .rating ul li:nth-child(4) div:nth-child(2) span {
  display: inline-block;
  width: 2.9rem;
  height: 100%;
  text-align: center;
  line-height: 1.16rem;
  background-color: #f26b11;
  color: white;
}
.detail .rating ul li:nth-child(4) div:nth-child(2) .buy {
  background-color: #e43a3d;
}


</style>