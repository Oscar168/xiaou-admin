<template>
    <div>
         <!-- 页眉 -->
        <div class="wrap">
            <header class="header">
                <div class="btn"><a href="detail.html" target="_blank"><img src="../img/classify/arrow.jpg" alt=""></a></div>
                <div class="title"><a href="shopping-cart.html" target="_self">购物车</a></div>
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
        <!-- 购物车 -->
        <div class="wrap">
            <div class="shopping-cart">
                <ul>
                    <li class="btn"></li>
                    <li class="img"><a href="detail.html" target="_blank"><img src="../img/shoping_car_images/shop.jpg" alt=""></a></li>
                    <li class="detail">
                        <p>欧莱雅面霜</p>
                        <p>规格: 50g</p>
                        <p>￥123.00</p>
                    </li>
                    <li class="number">
                        <span><a href="###">-</a></span>
                        <span>1</span>
                        <span><a href="###">+</a></span>
                    </li>
                </ul>
                <ul>
                    <li class="img"><img src="../img/shoping_car_images/shop.jpg" alt=""></li>
                    <li class="detail">
                        <p>雅诗兰黛护手霜</p>
                        <p>规格: 50g</p>
                        <p>￥26.00</p>
                    </li>
                    <li class="number">
                        <span><a href="###">-</a></span>
                        <span>1</span>
                        <span><a href="###">+</a></span>
                    </li>
                    <li class="delete"><a href="###">删除</a></li>
                </ul>
                <ul>
                    <li class="btn"></li>
                    <li class="img"><img src="../img/shoping_car_images/shop.jpg" alt=""></li>
                    <li class="detail">
                        <p>雅诗兰黛护手霜</p>
                        <p>规格: 50g</p>
                        <p>￥123.00</p>
                    </li>
                    <li class="number">
                        <span><a href="###">-</a></span>
                        <span>1</span>
                        <span><a href="###">+</a></span>
                    </li>
                </ul>
                <!-- 结算 -->
                <!-- 结构问题,如果重新再另外一个结构书写,由于弹性盒子的属性特征,这个盒子会直接排在第一个ul的下方 -->
                <div class="select-all">
                    <ul>
                        <li>
                            <span></span>
                            <span>全选</span>
                        </li>
                        <li>
                            <p>
                                <span>总计: </span>
                                <span>163.00</span>
                            </p>
                            <p>不含运费，已优惠￥0.00</p>
                        </li>
                        <li><a href="order.html" target="_blank">去结算(2件)</a></li>
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
}
.header {
  display: flex;
  justify-content: space-between;
  background-color: #f26b11;
  font-size: 0.34rem;
  height: 1.3rem;
  padding-top: 0.68rem;
  box-sizing: border-box;
  position: relative;
}
.header a {
  color: white;
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
.shopping-cart {
  height: 1.76rem;
  background-color: white;
}
.shopping-cart ul {
  height: 100%;
  margin: 0.24rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.8rem 0.1rem #f4f4f4;
  overflow: hidden;
}
.shopping-cart ul:nth-child(2) .img {
  margin-left: 0;
}
.shopping-cart ul:nth-child(2) .delete {
  width: 0.98rem;
  height: 100%;
  text-align: center;
  line-height: 1.76rem;
  background-color: #e43a3d;
}
.shopping-cart ul:nth-child(2) .delete a {
  color: white;
}
.shopping-cart ul:nth-child(2) .number {
  margin-left: 0.4rem;
}
.shopping-cart ul:nth-child(3) .number {
  margin-left: 0.4rem;
}
.shopping-cart ul .btn {
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 50%;
  border: 0.01rem solid #b63b2b;
  background: url(../img/shoping_car_images/select.jpg) no-repeat center center;
  margin-left: 0.26rem;
}
.shopping-cart ul .img {
  width: 1.02rem;
  height: 0.82rem;
  margin-left: 0.42rem;
  margin-right: 0.36rem;
}
.shopping-cart ul .detail p:nth-child(1) {
  color: #333333;
  margin-top: 0.22rem;
}
.shopping-cart ul .detail p:nth-child(2) {
  color: #666666;
  margin-top: 0.2rem;
  margin-bottom: 0.18rem;
}
.shopping-cart ul .detail p:nth-child(3) {
  color: #e43a3d;
}
.shopping-cart ul .number {
  border: 0.02rem solid #515151;
  border-radius: 0.04rem 0.04rem;
  margin-left: 1.2rem;
  margin-right: auto;
}
.shopping-cart ul .number span {
  display: inline-block;
  width: 0.68rem;
  height: 0.58rem;
  text-align: center;
  line-height: 0.58rem;
}
.shopping-cart ul .number span:nth-child(2) {
  width: 0.8rem;
  border-left: 0.01rem solid #515151;
  border-right: 0.01rem solid #515151;
}
.shopping-cart .select-all {
  margin-top: 3.68rem;
  height: 1.18rem;
  border-top: 0.01rem solid #d0cfcf;
  border-bottom: 0.01rem solid #d0cfcf;
}
.shopping-cart .select-all ul {
  margin: 0;
  height: 100%;
}
.shopping-cart .select-all ul li span {
  vertical-align: middle;
}
.shopping-cart .select-all ul li:nth-child(1) span:nth-child(1) {
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 50%;
  border: 0.01rem solid #b63b2b;
  background: url(../img/shoping_car_images/select.jpg) no-repeat center center;
  margin-left: 0.24rem;
  margin-right: 0.14rem;
}
.shopping-cart .select-all ul li:nth-child(1) span:nth-child(2) {
  font-size: 0.22rem;
  color: #666666;
}
.shopping-cart .select-all ul li:nth-child(2) p:nth-child(1) span:nth-child(1) {
  color: #333333;
  font-size: 0.28rem;
}
.shopping-cart .select-all ul li:nth-child(2) p:nth-child(1) span:nth-child(2) {
  color: #e43a3d;
  font-size: 0.24rem;
}
.shopping-cart .select-all ul li:nth-child(2) p:nth-child(2) {
  color: #666666;
  font-size: 0.18rem;
  margin-top: 0.16rem;
}
.shopping-cart .select-all ul li:nth-child(3) {
  width: 2.46rem;
  height: 100%;
  text-align: center;
  line-height: 1.18rem;
}
.shopping-cart .select-all ul li:nth-child(3):hover {
  background-color: #f26b11;
}
.shopping-cart .select-all ul li:nth-child(3):hover a {
  color: white;
}

</style>