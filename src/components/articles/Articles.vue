<template>
  <div>
    <el-button type="infor" class="newKill">新增面试技巧</el-button>
    <el-input placeholder="请输入内容" v-model="input">
      <template slot="prepend">关键字</template>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },

  methods: {},

  created() {}
}
</script>

<style lang='less' scoped>
.newKill {
  width: 100px;
  font-size: 12px;
}
.el-input-group .el-input-group__prepend {
  width: 200px;
}
</style>
