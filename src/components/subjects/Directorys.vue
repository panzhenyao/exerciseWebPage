<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:10px">
      <el-breadcrumb-item>学科管理</el-breadcrumb-item>
      <el-breadcrumb-item>JavaEE</el-breadcrumb-item>
      <el-breadcrumb-item>目录管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-button type="info">新建目录</el-button>
      <el-button type="info">返回学科</el-button>
    </div>
    <el-input placeholder="请输入内容" v-model="input1" style="width:350px ">
      <template slot="prepend">目录名称</template>
    </el-input>
  
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      
      <el-option label value="1"></el-option>
      <el-option label value="2"></el-option>
      <el-option label value="3"></el-option>
    </el-select>
   
    
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {},

  created() {}
}
</script>

<style lang='less' scoped>
</style>
