<template>
  <div>
    <el-button size="mini" type="info" plain>新增面试技巧</el-button>
    <div class="loginSearch">
      <el-input style="width:20%" placeholder="请输入题目编号/题干" v-model="input">
        <template slot="prepend">关键字</template>
      </el-input>
      <div class="loginSearch_fr">
        <templata>
          <el-button>清 除</el-button>
          <el-button type="primary">搜 索</el-button>
        </templata>
      </div>
    </div>
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
.el-button--info {
  height: 30px;
}
.loginSearch {
  margin: 10px 0;
  .loginSearch_fr {
    float: right;
    width: 100px;
    height: 40px;
    background-color: #aaa;
  }
}
</style>
