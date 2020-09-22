<template>
  <div class="home">
    <main>
      <router-view />
    </main>
    <footer>
      <router-link to="/home/index" tag="span">
        <p class="iconfont icon-index"></p>
        <p>首页</p>
      </router-link>
      <router-link to="/home/cart" tag="span">
        <p class="iconfont icon-che"></p>
        <p>购物车</p>
      </router-link>
      <router-link to="/home/my" tag="span">
        <p class="iconfont icon-wode1"></p>
        <p>我的</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
    };
  },
  mounted() {
    this.uname = this.$route.params.uname;
  },
};
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  display flex
  flex-direction column
main
  width 100%
  flex 1
footer
  display flex
  width 100%
  background #f26b11
footer span
  flex 1
  text-align center
  line-height 0.5rem
  font-size 14px
footer span.router-link-active
  color white
p.iconfont
  width 0.5rem
  height 0.5rem
</style>