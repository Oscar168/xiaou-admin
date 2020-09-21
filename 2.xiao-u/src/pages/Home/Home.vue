<template>
    <div class="home">
        <main>
            <router-view/>
        </main>
        <footer>
            <router-link to="/home/index" tag="span">首页</router-link >
            <router-link to="/home/cart" tag="span">购物车</router-link >
            <router-link to="/home/my" tag="span">我的</router-link >
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uname:""
            }
        },
        mounted() {
            this.uname=this.$route.params.uname
        },
    }
</script>

<style lang="stylus" scoped>
.home{
    width 100%
    height 100%
    display flex
    flex-direction column
}
main{
    width 100%;
    flex 1
}
footer{
    display flex
    width 100%
    height .5rem
    background #f26b11
}
footer span{
    flex 1
    text-align center
    line-height .5rem
    font-size 14px
}
footer span.router-link-active{
    color white
}
</style>