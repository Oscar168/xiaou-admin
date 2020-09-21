<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/menu' }">菜单管理</el-breadcrumb-item>
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
      <el-form-item label="菜单名称" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>

      <el-form-item label="上级菜单" prop="pid">
        <el-select v-model="ruleForm.pid" placeholder="请选择菜单名称">
          <!-- value添加冒号，那么其中的0就表示一个变量而非字符串 -->
          <el-option label="顶级菜单" :value="0"></el-option>
          <!-- 以下代码很重要，用于保存顶级菜单的添加项目，lable和value都用冒号表明是动态获取的，可是没有效果-->
          <el-option :label="item.title" :value="item.id" v-for="item in menuList" :key="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="菜单类型" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <!-- 根据接口，1表示目录，2表示菜单，其中label添加冒号，那么其中的1和2就表示一个变量 -->
          <el-radio :label="1">目录</el-radio>
          <el-radio :label="2">菜单</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 当上述选项为目录时显示 -->
      <el-form-item label="菜单图标" prop="icon" v-show="ruleForm.type==1">
        <el-input v-model="ruleForm.icon"></el-input>
      </el-form-item>

      <!-- 当选项为菜单时显示 -->
      <el-form-item label="菜单地址" prop="url" v-show="ruleForm.type==2">
        <el-input v-model="ruleForm.url"></el-input>
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
        title: "",
        pid: "",
        type: "",
        icon: "",
        url: "",
        status: true,
      },

      // 表单验证信息；
      rules: {
        title: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
        pid: [
          { required: true, message: "请选择上级菜单名称", trigger: "change" },
        ],
      },
    };
  },

  mounted() {
    // 回显
    this.id = this.$route.query.id;
    if (this.id) {
      this.title = "菜单编辑";
      this.buttonTitle = "修改";
      this.$http.get("/menuinfo", { id: this.id }).then((res) => {
        let { status } = res.data.list;
        this.ruleForm = {
          ...res.data.list,
          status: status == 1 ? true : false,
        };
      });
    } else {
      this.title = "菜单添加";
      this.buttonTitle = "添加";
    }

    this.$http.get("/menulist").then((res) => {
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
              .post("menuedit", { ...this.ruleForm, id: this.id })
              .then((res) => {
                console.log(res);
                if (res.data.code == 200) {
                  this.$router.back();
                }
              });
          } else {
            this.$http.post("menuadd", this.ruleForm).then((res) => {
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
.el-breadcrumb
  margin 10px
</style>