<template>
  <el-container>
    <el-main class="container">
      <el-card>
        <el-form label-position="right" ref="form">
          <el-form-item label="活动名称">
            <el-input ></el-input>
          </el-form-item>
        </el-form>
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

    width: 435px;
    height: 397px;
    padding: 20px;

    background-color: #f5f5f5;
    z-index: 999;
  }
}
</style>
