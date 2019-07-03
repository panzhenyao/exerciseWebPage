<template>
  <div>
    <!-- 添加用户按钮 -->
    <el-row>
      <el-col>
        <el-button type="primary" class="el-icon-plus">新增用户名</el-button>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <el-row>
        <el-col>
          <!-- 搜索功能 -->
          <el-form ref="searchFormRef" :model="searchForm" label-width="80px">
            <el-form-item label="标签名称">
              <el-select v-model="selected" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-button>清除</el-button>
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
    <!-- 用户表格内容 -->
    <el-card>
      <el-table :data="usersData" style="width: 100%">
        <el-table-column prop="id" label="序号" width="150" align="center"></el-table-column>
        <el-table-column prop="username" label="用户名" width="150" align="center"></el-table-column>
        <el-table-column prop="role" label="角色" width="150" align="center"></el-table-column>
        <el-table-column prop="permission_group_title" label="来源" width="220" align="center"></el-table-column>
        <el-table-column prop="create_time" label="创建日期" width="160" align="center">
          <template slot-scope="scope">{{ scope.row.create_time | dateformat }}</template>
        </el-table-column>
        <el-table-column prop="introduction" label="备注" width="150" align="center"></el-table-column>
        <el-table-column prop="is_deleted" label="状态" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <!--  -->
          <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
          <!-- 禁用 -->
          <el-button type="warning" icon="el-icon-minus
" circle size="mini"></el-button>
          <!-- 删除功能 -->
          <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="pageSize"
          layout="prev, pager,sizes, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      // 选择框功能数据
      searchForm: {},
      selected: '',
      options: [{ id: '', value: '', label: '' }],
      // 用户表格数据
      usersData: [],
      // 分页功能数据
      currentPage: 0,
      pageSize: 5,
      total: 0
    }
  },

  methods: {
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getUsersTable()
    },
    handleCurrentChange(CurrentPage) {
      this.currentPage = currentPage
      this.getUsersTable()
    },
    // 获取用户信息列表
    async getUsersTable() {
      const { data: res } = await this.$http.get('/users', {
        params: {
          page: this.currentPage,
          pagesize: this.pageSize,
          keyword: ''
        }
      })
      this.usersData = res.list
      this.total = res.counts
    }
  },

  created() {
    this.getUsersTable()
  }
}
</script>

<style lang='less' scoped>
.el-row {
  width: 100%;
}
.box-card {
  margin: 17px 0;
}
.el-select {
  margin-right: 22px;
}
.el-table {
  margin-bottom: 30px;
}
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>
