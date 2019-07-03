<template>
  <div>
  <el-row>
  <el-button type="info" plain style="margin-bottom:10px">新增学科</el-button>
  </el-row>
  <div>
<el-input placeholder="请输入内容" v-model="input1" style="width:350px " >
    <template slot="prepend">学科名称</template>
  </el-input>

  <div class="button"  >
   <el-button >清除</el-button>
       <el-button type="primary">搜索</el-button>
  </div>
    </div>
      <div class="line"></div>
    <el-card>
<template >
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="学科名称"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="创建者"
     >
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建日期"
     >
    </el-table-column>
    <el-table-column
      prop="name"
      label="前台是否显示"
     >
    </el-table-column>
    <el-table-column
      prop="address"
      label="二级目录"
      >
    </el-table-column>
    <el-table-column
      prop="date"
      label="标签"
     >
    </el-table-column>
    <el-table-column
      prop="name"
      label="题目数量"
     >
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作"
      width="250">
    </el-table-column>
  </el-table>
</template>
    </el-card>


  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },

  methods: {},

  created () {
  }
}
</script>

<style lang='less' scoped>
.button{
  float: right;
}
.line {
  height: 20px;
}

</style>
