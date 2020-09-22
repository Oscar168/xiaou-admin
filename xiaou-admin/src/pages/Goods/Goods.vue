<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/goods' }">商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 添加按钮 -->
    <el-button type="primary" @click="goAdd">添加</el-button>

    <!-- 表格数据 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="商品编号" width="180"></el-table-column>
      <el-table-column prop="goodsname" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="price" label="商品价格" width="180"></el-table-column>
      <el-table-column prop="market_price" label="市场价格" width="180"></el-table-column>
      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <!-- 好吧，图片的 src是需要添加冒号图片才会动态更新,而且需要添加后端的地址才会显示，否则会是路径 -->
          <img :src="'http://localhost:3000'+scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column label="是否新品" width="180">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.isnew==1">{{scope.row.isnew|ishotFormat}}</el-tag>
          <el-tag v-if="scope.row.isnew==2" type="danger">{{scope.row.isnew|ishotFormat}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="是否热卖" width="180">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.ishot==1">{{scope.row.ishot|ishotFormat}}</el-tag>
          <el-tag v-if="scope.row.ishot==2" type="danger">{{scope.row.ishot|ishotFormat}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag>{{scope.row.status|statusFormat}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-popconfirm title="您确定要删除吗？" @onConfirm="del(scope.row.id)">
            <el-button size="mini" type="danger" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },

  mounted() {
    this.getList();
  },

  methods: {
    // 封装的方法
    getList() {
      this.$http.get("/goodslist", { size: 10, page: 1 }).then((res) => {
        console.log(res);
        this.tableData = res.data.list;
      });
    },

    // 表格编辑
    handleEdit(index, row) {
      console.log(index, row);
      // 点击编辑时跳转至响应的编辑页面，但是该页面是根据id进行相应的回显功能；
      this.$router.push("goods/edit?id=" + row.id);
    },

    //表格删除
    del(id) {
      // 调用接口
      this.$http.post("/goodsdelete", { id }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.getList();
          this.$message({
            message: "删除成功",
            type: "success",
          });
        }
      });
    },

    //点击添加
    goAdd() {
      this.$router.push("/goods/add");
    },
  },
};
</script>

<style lang="stylus" scoped>
.demo-table-expand
  font-size 0
.demo-table-expand label
  width 90px
  color #99a9bf
.demo-table-expand .el-form-item
  margin-right 0
  margin-bottom 0
  width 50%
.el-button.el-button--primary
  margin 10px
</style>