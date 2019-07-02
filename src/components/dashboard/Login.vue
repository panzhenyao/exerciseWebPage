<template>
  <el-container>
    <el-main class="container">
      <el-card>
        
      </el-card>
      <div class="login-banner"></div>
    </el-main>
  </el-container>
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
.container {
  width: 100%;
  height: 788px;
  background-color: #1299fa;
  .login-banner {
    position: absolute;
    bottom: 0;
    right: 39px;
    width: 633px;
    height: 435px;
    background: url('../../assets/img/login_banner_ele.png') no-repeat;
  }
  .el-card {
    position: relative;
    top: 198px;
    left: 181px;

    width: 475px;
    height: 397px;

    background-color: #f5f5f5;
  }
}
</style>
