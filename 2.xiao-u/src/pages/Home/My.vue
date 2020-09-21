<template>
    <div>
          <!-- 页眉 -->
        <div class="wrap">
            <header class="header">
                <div class="header-top">
                    <div class="btn"><a href="order.html" target="_blank"><img src="../img/classify/arrow.jpg" alt=""></a></div>
                    <div class="title"><a href=mine.html>我的订单</a></div>
                    <div class="bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="top-bar">
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
                <div class="header-bottom">
                    <ul>
                        <li><a href="###"></a></li>
                        <li>
                            <p>悠溯</p>
                            <p>V1</p>
                        </li>
                        <li><a href="###">每日签到</a></li>
                    </ul>

                </div>
            </header>
        </div>
        <!-- 订单导航 -->
        <div class="wrap">
            <div class="nav-order">
                <div class="nav-order-top">
                    <ul>
                        <li>
                            <p><a href="order.html" target="_blank"><img src="../img/mine_images/icon_1.jpg" alt=""></a></p>
                            <p><a href="order.html" target="_blank">全部订单</a></p>
                        </li>
                        <li>
                            <p><a href="###"><img src="../img/mine_images/icon_2.jpg" alt=""></a></p>
                            <p><a href="###">待付款</a></p>
                        </li>
                        <li>
                            <p><a href="###"><img src="../img/mine_images/icon_3.jpg" alt=""></a></p>
                            <p><a href="###">待收货</a></p>
                        </li>
                    </ul>
                </div>
                <div class="nav-order-bottom">
                    <ul>
                        <li>
                            <div class="icon"><a href="###"><img src="../img/mine_images/icon_4.jpg" alt=""></a></div>
                            <div class="name"><a href="###">地址管理</a></div>
                            <div class="btn"><a href="###"><img src="../img/mine_images/right.jpg" alt=""></a></div>
                        </li>
                        <li>
                            <div class="icon"><a href="###"><img src="../img/mine_images/icon_5.jpg" alt=""></a></div>
                            <div class="name"><a href="###">我的钱包</a></div>
                            <div class="subname">200余额</div>
                            <div class="btn"><a href="###"><img src="../img/mine_images/right.jpg" alt=""></a></div>
                        </li>
                        <li>
                            <div class="icon"><a href="###"><img src="../img/mine_images/icon_6.jpg" alt=""></a></div>
                            <div class="name"><a href="###">我的优惠券</a></div>
                            <div class="btn"><a href="###"><img src="../img/mine_images/right.jpg" alt=""></a></div>
                        </li>
                        <li>
                            <div class="icon"><a href="###"><img src="../img/mine_images/icon_7.jpg" alt=""></a></div>
                            <div class="name"><a href="###">我的二维码</a></div>
                            <div class="btn"><a href="###"><img src="../img/mine_images/right.jpg" alt=""></a></div>
                        </li>
                        <li>
                            <div class="icon"><a href="###"><img src="../img/mine_images/icon_8.jpg" alt=""></a></div>
                            <div class="name"><a href="###">我的小伙伴</a></div>
                            <div class="btn"><a href="###"><img src="../img/mine_images/right.jpg" alt=""></a></div>
                        </li>
                    </ul>
                </div>
            </div>
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
  color: #333;
}
.header {
  background-color: #f26b11;
}
.header .header-top {
  display: flex;
  justify-content: space-between;
  font-size: 0.36rem;
  height: 1.3rem;
  padding-top: 0.68rem;
  box-sizing: border-box;
  position: relative;
}
.header .header-top a {
  color: white;
}
.header .header-top span {
  display: inline-block;
  width: 0.14rem;
  height: 0.14rem;
  border-radius: 50%;
  background-color: white;
}
.header .header-top .btn {
  width: 0.15rem;
  height: 0.32rem;
  margin-left: 0.28rem;
}
.header .header-top .bar {
  margin-right: 0.34rem;
}
.header .header-top .top-bar {
  position: absolute;
  left: 0.16rem;
  top: 0.18rem;
}
.header .header-bottom {
  height: 2.06rem;
}
.header .header-bottom ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .header-bottom ul li:nth-child(1) {
  width: 1.56rem;
  height: 1.56rem;
  line-height: 1.56rem;
  border-radius: 50%;
  border: solid white;
  background: url(../img/mine_images/head.jpg) center center;
  background-clip: border-box;
  background-size: cover;
  margin-left: 0.32rem;
}
.header .header-bottom ul li:nth-child(2) p:nth-child(1) {
  color: white;
  margin-bottom: 0.26rem;
}
.header .header-bottom ul li:nth-child(2) p:nth-child(2) {
  color: black;
}
.header .header-bottom ul li:nth-child(3) {
  width: 1.6rem;
  height: 0.72rem;
  border-radius: 0.04rem;
  text-align: center;
  line-height: 0.72rem;
  background-color: #fff;
  margin-left: 2.88rem;
  margin-right: 0.38rem;
}
.header .header-bottom ul li:nth-child(3) a {
  color: #f26b11;
}
.nav-order {
  background-color: #f1f1f1;
}
.nav-order .nav-order-top {
  height: 1.42rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.nav-order .nav-order-top ul {
  display: flex;
  height: 100%;
  justify-content: space-between;
}
.nav-order .nav-order-top ul li {
  width: 1.56rem;
  height: 100%;
  text-align: center;
}
.nav-order .nav-order-top ul li p {
  margin: auto;
}
.nav-order .nav-order-top ul li:nth-child(1) {
  margin-left: 0.32rem;
}
.nav-order .nav-order-top ul li:nth-child(1) p:nth-child(1) {
  width: 0.34rem;
  height: 0.34rem;
  margin-top: 0.34rem;
  margin-bottom: 0.2rem;
}
.nav-order .nav-order-top ul li:nth-child(2) p:nth-child(1) {
  width: 0.38rem;
  height: 0.3rem;
  margin-top: 0.34rem;
  margin-bottom: 0.2rem;
}
.nav-order .nav-order-top ul li:nth-child(3) {
  margin-right: 0.6rem;
}
.nav-order .nav-order-top ul li:nth-child(3) p:nth-child(1) {
  width: 0.34rem;
  height: 0.34rem;
  margin-top: 0.34rem;
  margin-bottom: 0.2rem;
}
.nav-order .nav-order-bottom {
  background-color: #fff;
}
.nav-order .nav-order-bottom ul li {
  display: flex;
  height: 1.1rem;
  line-height: 1.1rem;
  justify-content: space-between;
  border-bottom: 0.01rem solid #d9d9d9;
}
.nav-order .nav-order-bottom ul li img {
  vertical-align: middle;
}
.nav-order .nav-order-bottom ul li .btn {
  width: 0.19rem;
  height: 0.26rem;
  margin-right: 0.32rem;
}
.nav-order .nav-order-bottom ul li .icon {
  margin-left: 0.32rem;
  margin-right: 0.32rem;
}
.nav-order .nav-order-bottom ul li:nth-child(1) .icon {
  width: 0.36rem;
  height: 0.4rem;
}
.nav-order .nav-order-bottom ul li:nth-child(1) .btn {
  margin-left: 4.86rem;
}
.nav-order .nav-order-bottom ul li:nth-child(2) .subname {
  margin-left: 3.5rem;
  color: #df763c;
}
.nav-order .nav-order-bottom ul li:nth-child(2) .icon {
  width: 0.36rem;
  height: 0.36rem;
}
.nav-order .nav-order-bottom ul li:nth-child(2) .btn {
  margin-left: 0.24rem;
  margin-right: 0.32rem;
}
.nav-order .nav-order-bottom ul li:nth-child(3) .icon {
  width: 0.46rem;
  height: 0.32rem;
  margin-right: 0.18rem;
}
.nav-order .nav-order-bottom ul li:nth-child(3) .btn {
  margin-left: 4.6rem;
}
.nav-order .nav-order-bottom ul li:nth-child(4) .icon {
  width: 0.36rem;
  height: 0.34rem;
  margin-right: 0.18rem;
}
.nav-order .nav-order-bottom ul li:nth-child(4) .btn {
  margin-left: 4.6rem;
}
.nav-order .nav-order-bottom ul li:nth-child(5) .icon {
  width: 0.38rem;
  height: 0.36rem;
  margin-right: 0.18rem;
}
.nav-order .nav-order-bottom ul li:nth-child(5) .btn {
  margin-left: 4.6rem;
}

</style>