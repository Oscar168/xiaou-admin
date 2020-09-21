<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/specs' }">规格管理</el-breadcrumb-item>
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
      <el-form-item label="规格名称" prop="specsname">
        <el-input v-model="ruleForm.specsname"></el-input>
      </el-form-item>

      <!-- 点击添加的方法 addDomain需要显示与隐藏 v-if="index==0" -->
      <el-form-item v-for="(item, index) in ruleForm.attrs" :label="'规格属性' + index" :key="index">
        <el-input v-model="item.value"></el-input>
        <el-button @click="addDomain" v-if="index==0">新增属性</el-button>
        <el-button @click.prevent="removeDomain(item)" v-if="index !=0">删除</el-button>
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
        specsname: "",
        attrs: [
          {
            value: "",
          },
        ],
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
      this.title = "规格编辑";
      this.buttonTitle = "修改";
      this.$http.get("/specsinfo", { id: this.id }).then((res) => {
        console.log(res.data.list[0].attrs);
        let { status } = res.data.list;
        this.ruleForm = {
          ...res.data.list[0],
          status: status == 1 ? true : false,
        };
        let arr = [];
        res.data.list[0].attrs.forEach((item) => {
          arr.push({ value: item });
        });
        this.ruleForm.attrs = arr;
      });
    } else {
      this.title = "规格添加";
      this.buttonTitle = "添加";
    }

    this.$http.get("/specslist").then((res) => {
      console.log(res);
      this.menuList = res.data.list;
    });
  },

  methods: {
    removeDomain(item) {
      var index = this.ruleForm.attrs.indexOf(item);
      if (index !== -1) {
        this.ruleForm.attrs.splice(index, 1);
      }
    },
    addDomain(item) {
      this.ruleForm.attrs.push({
        value: "",
      });
    },
    submitForm(formName) {
      // validate是element-ui中的方法；
      this.$refs[formName].validate((valid) => {
        // 验证通过，以下如果需要生效的话，那么需要在app中拦截判断注释；
        if (valid) {
          //验证通过状态码设置为 1，否则为2
          this.ruleForm.status = this.ruleForm.status ? 1 : 2;

          // 共用的方法将对象中的值取出来
          this.ruleForm.attrs = this.ruleForm.attrs
            .map((item) => {
              return item.value;
            })
            .join(",");

          // 调用以下接口时并将上述的值进行传递；
          if (this.id) {
            this.$http
              .post("specsedit", { ...this.ruleForm, id: this.id })
              .then((res) => {
                console.log(res);
                if (res.data.code == 200) {
                  this.$router.back();
                }
              });
          } else {
            //   [{value:"手机"},{value:"彩电"},{value:"空调"}] 取出值"手机,彩电,空调"
            this.$http.post("specsadd", this.ruleForm).then((res) => {
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