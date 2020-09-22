<template>
  <div class="index">
    <header>
      <div class="logo-box">
        <img src="../../assets/logo.jpg" alt />
      </div>
      <input type="text" />
      <i class="iconfont icon-gengduo"></i>
    </header>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="item.id">
          <img :src="'http://localhost:3000'+item.img" alt />
        </div>
      </div>
    </div>
    <nav>
      <div>
        <i class="iconfont icon-icon-test"></i>
        <p>限时抢购</p>
      </div>
      <div>
        <i class="iconfont icon-shangcheng"></i>
        <p>积分商城</p>
      </div>
      <div>
        <i class="iconfont icon-lianxiwomen"></i>
        <p>联系我们</p>
      </div>
      <div @click="goCategory">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <p>商品分类</p>
      </div>
    </nav>
    <div class="tab">
      <!-- 点击tab切换 -->
      <span
        :class="{active:index==ind}"
        @click="change(index)"
        v-for="(item,index) in navList"
        :key="index"
      >{{ietm}}</span>
    </div>
    <!-- 数据列表 -->
    <GoodsList v-if="GoodsList.length>0" :goodsList="goodsList[ind].content" />
  </div>
</template>

<script>
import Swiper from "swiper";
import GoodsList from "@/components/GoodsList";
export default {
  components: {
    GoodsList,
  },
  data() {
    return {
      ind: 0,
      navList: ["最热商品", "最新商品", "全部商品"],
      bannerList: [],
      goodsList: [],
    };
  },
  mounted() {
    this.getGoodsList();
    this.$http.get("/getbanner").then((res) => {
      console.log(res);
      this.bannerList = res.data.list;
      //   this.$nextTick(()=>{})
      // 当数据发生变化，会发生页面的重新渲染，而页面渲染也是异步操作，我们需要保证后续代码在页面进行渲染后再执行；
      this.$nextTick(() => {
        let myswiper = new Swiper(".swiper-container", {
          autoplay: {
            delay: 2000,
          },
        });
      });
    });
  },
  methods: {
    change(i) {
      //    高亮切换，数据切换
      this.ind = i;
    },
    getGoodsList() {
      this.$http.get("/getindexgoods").then((res) => {
        console.log(res);
        this.goodsList = res.data.list;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.index
  width 100%
  height 100%
  header
    width 100%
    height 0.88rem
    display flex
    justify-content space-between
    .logo-box
      width 1.5rem
      height 0.4rem
    input
      width 3rem
      height 0.4rem
      background-color #eee
  .banner
    width 100%
    height 2.9rem
    .swiper-container, .swiper-wrapper, .swiper-slide
      width 100%
      height 100%
  nav
    display flex
    height 1.18rem
    align-items center
    div
      flex 1
      text-align center
  .tab
    .tab-box
      display flex
      height 0.66rem
      line-height 0.66rem
      span
        flex 1
        text-align center
        border 0.01rem solid #ccc
        &.active
          background-color color
          color #fff
</style>