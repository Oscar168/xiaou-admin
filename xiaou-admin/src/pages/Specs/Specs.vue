<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>规格管理</el-breadcrumb-item>
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
      <el-table-column prop="id" label="规格编号" width="180"></el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180"></el-table-column>
      <el-table-column label="规格属性" width="180">
           <template slot-scope="scope">
                <el-tag v-for="(item,index) in scope.row.attrs" :key="index">{{item}}</el-tag>
            </template>

      </el-table-column>
  
      <el-table-column label="状态">
        <template slot-scope="scope">
          <!-- 知道自己使用数据的各项表示什么意思，以下使用的是过滤器，后面表示过滤器函数的名称，表示要将前面的值渲染成什么字符串，封装的过滤器在filter文件中；-->
          <el-tag>{{scope.row.status|statusFormat}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-popconfirm title="您确定要删除吗？" @onConfirm="del(scope.row.id)">
            <!-- slot="reference"需要加入以下否则不会显示删除 -->
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
      this.$http.get("/specslist",{size:10,page:1}).then((res) => {
        console.log(res);
        this.tableData = res.data.list;
      });
    },

    // 表格编辑
    handleEdit(index, row) {
      console.log(index, row);
      // 点击编辑时跳转至响应的编辑页面，但是该页面是根据id进行相应的回显功能；
      this.$router.push("/specs/edit?id=" + row.id);
    },

    //表格删除
    del(id) {
      // 调用接口
      this.$http.post("/specsdelete", { id }).then((res) => {
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
      this.$router.push("/specs/add");
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