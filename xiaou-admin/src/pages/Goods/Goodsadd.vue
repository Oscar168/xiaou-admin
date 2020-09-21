<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/goods' }">商品列表</el-breadcrumb-item>
      <!-- 是商品添加还是商品编辑，因此使用变量动态修改 -->
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
      <!-- 一级分类 -->
      <el-form-item label="一级分类" prop="first_cateid">
        <el-select v-model="ruleForm.first_cateid" placeholder="请选择">
          <el-option label="顶级分类" :value="0"></el-option>
          <el-option
            :label="item.catename"
            :value="item.id"
            v-for="item in menuList"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <!-- 二级分类 -->
      <el-form-item label="二级分类" prop="second_cateid">
        <el-select v-model="ruleForm.second_cateid" placeholder="请选择">
          <el-option label="一级分类" :value="0"></el-option>
          <el-option
            :label="item.second_cateid"
            :value="item.id"
            v-for="item in menuList"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品名称" prop="goodsname">
        <el-input v-model="ruleForm.goodsname"></el-input>
      </el-form-item>

      <el-form-item label="价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>

      <el-form-item label="市场价格" prop="market_price">
        <el-input v-model="ruleForm.market_price"></el-input>
      </el-form-item>

      <!-- :on-change="change" ; :file-list="ary"-->
      <el-form-item label="图片" prop="img">
        <el-upload
          action="#"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :auto-upload="false"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="商品规格" prop="specsid">
        <el-select v-model="ruleForm.specsid" placeholder="请选择">
          <el-option label="一级分类" :value="0"></el-option>
          <el-option :label="item.specsid" :value="item.id" v-for="item in menuList" :key="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="规格属性" prop="specsattr">
        <el-select v-model="ruleForm.specsattr" placeholder="请选择">
          <el-option label="一级分类" :value="0"></el-option>
          <el-option
            :label="item.specsattr"
            :value="item.id"
            v-for="item in menuList"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="是否新品" prop="isnew">
        <el-radio-group v-model="ruleForm.isnew">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否热卖" prop="ishot">
        <el-radio-group v-model="ruleForm.ishot">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="ruleForm.status"></el-switch>
      </el-form-item>

      
      <!-- 不知是否可行 -->
      <el-form-item label="商品描述" prop="description">
        <template>
          <el-input id="editor" v-model="ruleForm.description"></el-input>
        </template>
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
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: "",
        description: "",
        specsid: "",
        specsattr: "",
        isnew: "",
        ishot: "",
        status: true,
      },

      // 表单验证信息；
      rules: {
        fid: [
          { required: true, message: "请输入一级分类名称", trigger: "change" },
        ],
        sid: [
          { required: true, message: "请选择二级分类名称", trigger: "change" },
        ],
        goodsname: [
          { required: true, message: "请选择商品名称", trigger: "change" },
        ],
      },
    };
  },

  mounted() {
    //   同 echart 直接在生命周期中引入即可；
    var E = require("wangeditor"); // 使用 npm 安装
    // 创建编辑器
    var editor = new E(".editor");
    editor.create();
    // 回显
    this.id = this.$route.query.id;
    if (this.id) {
      this.title = "商品编辑";
      this.buttonTitle = "修改";
      this.$http.get("/goodsinfo", { id: this.id }).then((res) => {
        let { status } = res.data.list;
        this.ruleForm = {
          ...res.data.list,
          status: status == 1 ? true : false,
        };
      });
    } else {
      this.title = "商品添加";
      this.buttonTitle = "添加";
    }

    this.$http.get("/goodslist").then((res) => {
      console.log(res);
      this.menuList = res.data.list;
    });
  },

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.ruleForm.status = this.ruleForm.status ? 1 : 2;
          if (this.id) {
            console.log(this.id);

            this.$http
              .post("goodsedit", { ...this.ruleForm, id: this.id })
              .then((res) => {
                console.log(res);
                if (res.data.code == 200) {
                  this.$router.back();
                }
              });
          } else {
            console.log(this.ruleForm);
            this.$http.post("/goodsadd", this.ruleForm).then((res) => {
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