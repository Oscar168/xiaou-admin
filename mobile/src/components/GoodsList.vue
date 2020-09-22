<template>
  <div class="goodslist">
    <ul>
      <li v-for="(item,index) in goodsList" :key="item.id">
        <div class="img-box">
          <img :src="'http://localhost:3000'+item.img" alt />
        </div>
        <div class="content">
          <p>{{item.goodsname}}</p>
          <p>{{item.price}}</p>
          <button>立即抢购</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    goodsList: {
      required: true,
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.goodslist   
    ul
        li
            display flex
            height 3rem
            .img-box
            width 3rem
            height 100%
            display flex
            justify-content center
            img
                width 50%
                height 50%
            .content
            flex 1
</style>