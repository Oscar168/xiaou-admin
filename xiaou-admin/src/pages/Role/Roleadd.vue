<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/role' }">角色管理</el-breadcrumb-item>
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
      <el-form-item label="角色名称" prop="rolename">
        <el-input v-model="ruleForm.rolename"></el-input>
      </el-form-item>

      <!-- element-ul的树形结构, 添加的 ref="mytree",check-strictly 严格选中, 再设置为动态的数组:default-checked-keys="checkedArr" -->
      <el-form-item label="角色权限" prop="menus">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[1]"
          :default-checked-keys="checkedArr"
          :props="defaultProps"
          ref="mytree"
          check-strictly
        ></el-tree>
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
      id: "",
      title: "",
      buttonTitle: "",
      menuList: [],

      // 调用接口文档的数据参数；
      ruleForm: {
        rolename: "",
        // 根据接口文档的定义的数组，
        menus: [],
        status: true,
      },

      checkedArr: [], //默认选中

      // 表单验证信息；
      rules: {
        // 修改title为 rolename
        rolename: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
        ],
      },

      data: [],
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },

  mounted() {
    // 回显
    this.id = this.$route.query.id;
    if (this.id) {
      this.title = "角色编辑";
      this.buttonTitle = "修改";
      // roleinfo单词写错，写成 ruleinfo
      this.$http.get("/roleinfo", { id: this.id }).then((res) => {
        let { status } = res.data.list;
        this.ruleForm = {
          ...res.data.list,
          status: status == 1 ? true : false,
        };
        // 将字符串转为数组；
        this.checkedArr = res.data.list.menus.split(",");
      });
    } else {
      // 说明是点击的添加
      this.title = "角色添加";
      this.buttonTitle = "添加";
    }

    this.$http.get("/menulist", { istree: true }).then((res) => {
      // console.log(res);
      // 将 menuList修改为 data
      this.data = res.data.list;
    });
  },

  methods: {
    submitForm(formName) {
      // formName 等同于"ruleFomr； "validate是element-ui中的方法；
      this.$refs[formName].validate((valid) => {
        // 验证通过，以下如果需要生效的话，那么需要在app中拦截判断注释；
        if (valid) {
          //验证通过状态码设置为 1，否则为2
          this.ruleForm.status = this.ruleForm.status ? 1 : 2;
          // 调用以下接口时并将上述的值进行传递；
          this.ruleForm.menus = this.$refs.mytree.getCheckedKeys();
          if (this.id) {
            this.$http
              .post("/roleedit", { ...this.ruleForm, id: this.id })
              .then((res) => {
                console.log(res);
                if (res.data.code == 200) {
                  this.$router.back();
                }
              });
          } else {
            this.$http.post("/roleadd", this.ruleForm).then((res) => {
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
.el-breadcrumb{
  margin-bottom:10px;
}
</style>