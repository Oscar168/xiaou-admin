<template>
  <div>
    注册：
    <br />用户名：
    <el-input v-model="input" placeholder="请输入用户名" size="mini"></el-input>密码：
    <el-input v-model="input" placeholder="请输入密码" size="mini"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="css" scoped>
</style>