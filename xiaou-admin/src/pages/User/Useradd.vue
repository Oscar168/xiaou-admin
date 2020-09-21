<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user' }">管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 表单 -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="角色编号" prop="roleid">
        <el-select v-model="ruleForm.roleid" placeholder="请选择角色">
          <el-option
            :label="item.rolename"
            :value="item.id"
            v-for="item in menuList"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="ruleForm.status"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{buttonTitle}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      id: "",
      title: "",
      buttonTitle: "",
      // 调用接口文档的数据参数；
      ruleForm: {
        roleid: "",
        username: "",
        password: "",
        status: true,
      },

      // 表单验证信息；
      rules: {
        roleid: [
          { required: true, message: "请输入角色名称", trigger: "change" },
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        // password: [
        //   { required: true, message: "请输入密码", trigger: "blur" },
        // ],
      },
    };
  },
  mounted() {
    // 回显
    this.id = this.$route.query.id;
    if (this.id) {
      this.title = "菜单编辑";
      this.buttonTitle = "修改";
      this.$http.get("/userinfo", { uid: this.id }).then((res) => {
        let { status } = res.data.list;
        this.ruleForm = {
          ...res.data.list,
          status: status == 1 ? true : false,
          password: "",
        };
      });
    } else {
      this.title = "菜单添加";
      this.buttonTitle = "添加";
    }

    this.$http.get("/rolelist").then((res) => {
      console.log(res);
      this.menuList = res.data.list;
    });
  },
  methods: {
    submitForm(formName) {
      // validate是element-ui中的方法；
      this.$refs[formName].validate((valid) => {
        // 验证通过，以下如果需要生效的话，那么需要在app中拦截判断注释；
        if (valid) {
          //验证通过状态码设置为 1，否则为2
          this.ruleForm.status = this.ruleForm.status ? 1 : 2;
          // 调用以下接口时并将上述的值进行传递；
          if (this.id) {
            this.$http
              .post("/useredit", { ...this.ruleForm, uid: this.id })
              .then((res) => {
                console.log(res);
                if (res.data.code == 200) {
                  this.$router.back();
                }
              });
          } else {
            this.$http.post("/useradd", this.ruleForm).then((res) => {
              console.log(res);
              if (res.data.code == 200) {
                this.$router.back();
              }
            });
          }
        }
        // 验证不通过
        else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>