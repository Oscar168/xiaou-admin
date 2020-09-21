<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
// 使用插件 stylus，下载时在项目名称下使用命令 npm i stylus stylus-loader即可，该插件直接使用即可，不需要像 jquery或 axios那样还需要在入口文件中引用；
*{
  margin 0
  padding 0
}
html,body,#app{
  width 100%
  height 100%
  font-size 16px;
}
</style>
