<template>
    <div>
        账号登录<br>
        账号：<input type="text" v-model="uname"><br>
        密码：<input type="text" v-model="upwd"><br>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uname:"",
                upwd:""
            }
        },
        methods: {
            login(){
                if(this.uname=="admin"||this.upwd=="123"){
                    // 使用以下方法存储数据；
                    localStorage.setItem("uname",this.uname)
                    // this.$router.push 指定跳转的页面；
                    this.$router.push("/home/my")
                }
            }
        },
    }
</script>

<style lang="css" scoped>

</style>