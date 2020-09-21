<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/menu' }">商品分类管理</el-breadcrumb-item>
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
      <el-form-item label="上级分类" prop="pid">
        <el-select v-model="ruleForm.pid" placeholder="请选择">
          <!-- value添加冒号，那么其中的0就表示一个变量而非字符串 -->
          <!-- 以下代码很重要，用于保存顶级菜单的添加项目，lable和value都用冒号表明是动态获取的，可是没有效果-->
          <el-option label="顶级分类" :value="0"></el-option>
          <el-option
            :label="item.catename"
            :value="item.id"
            v-for="item in cateList"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="分类名称" prop="catename">
        <el-input v-model="ruleForm.catename"></el-input>
      </el-form-item>

      <!-- 图片功能：on-change="change" 如果不添加冒号，那么change就会是一个字符串而非变量，auto-upload为 true自动上传图片;file-list控制图片是否回显 -->
      <el-form-item label="图片" prop="img">
        <el-upload
          action="#"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-change="change"
          :auto-upload="false"
          :file-list="ary"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
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
  mounted() {
    // 回显
    this.id = this.$route.query.id;
    if (this.id) {
      this.title = "商品分类编辑";
      this.buttonTitle = "修改";
      this.$http.get("/cateinfo", { id: this.id }).then((res) => {
        this.ary.push({url:"http://localhost:3000" + res.data.list.img});
        let { status } = res.data.list;
        this.ruleForm = {
          ...res.data.list,
          status: status == 1 ? true : false,
        };
      });
    } else {
      this.title = "商品分类添加";
      this.buttonTitle = "添加";
    }

    this.$http.get("/catelist", { pid: 0 }).then((res) => {
      console.log(res);
      this.cateList = res.data.list;
    });
  },
  data() {
    return {
      ary: [],
      cateList: [],
      id: "",
      title: "",
      buttonTitle: "",
      // 调用接口文档的数据参数；
      ruleForm: {
        pid: "", //上级分类编号
        catename: "", //上级分类名称
        img: "",
        status: true,
      },

      // 表单验证信息；
      rules: {
        pid: [
          {
            required: true,
            message: "请选择上级商品分类名称",
            trigger: "change",
          },
        ],
        catename: [
          { required: true, message: "请输入商品分类名称", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    //   图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 使用的 element-ui中的图片点击方法，raw是其中的一种方法；
    change(file, filelist) {
      this.ruleForm.img = file.raw;
    },

    submitForm(formName) {
      // validate是element-ui中的方法；
      this.$refs[formName].validate((valid) => {
        // 验证通过，以下如果需要生效的话，那么需要在app中拦截判断注释；
        if (valid) {
          //验证通过状态码设置为 1，否则为2
          this.ruleForm.status = this.ruleForm.status ? 1 : 2;

          //生成一个 FormData实例对象，append是其中的一种方法；
          let form = new FormData();
          for (var key in this.ruleForm) {
            form.append(key, this.ruleForm[key]);
          }

          // 调用以下接口时并将上述的值进行传递；
          if (this.id) {
            //  添加的id语法如上
            form.append("id", this.id);
            this.$http.post("cateedit", form).then((res) => {
              console.log(res);
              if (res.data.code == 200) {
                this.$router.back();
              }
            });

            // 将图片的地址传递给空的数组；
          } else {
            //   生成的form实例对象需要应用在以下；
            this.$http.post("cateadd", form).then((res) => {
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