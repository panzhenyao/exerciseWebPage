<template>
  <div>
    <!-- 添加用户按钮 -->
    <el-row>
      <el-col>
        <el-button type="primary" class="el-icon-plus">新增标签</el-button>
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
        <el-table-column type="index" label="序号" width="150" align="center"></el-table-column>
        <el-table-column prop="name" label="标签名称" width="150" align="center"></el-table-column>
        <el-table-column prop="author" label="创建者" width="150" align="center"></el-table-column>
        <el-table-column prop="date" label="创建日期" width="220" align="center"></el-table-column>
        <el-table-column prop="taskNum" label="面试题数量" width="160" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" width="150" align="center"></el-table-column>
        <el-table-column label="操作" align="center"></el-table-column>
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
          :total="400"
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
      pageSize: 5
    }
  },

  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  },

  created() {}
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
  justify-content: center
}
</style>
