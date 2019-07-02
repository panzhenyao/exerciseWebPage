<template>
  <el-container>
    <div class="container">
      <div class="login-banner"></div>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},

  created() {}
};
</script>

<style lang='less' scoped>
.container {
  height: 788px;
  .login-banner {
    position: absolute;
    bottom: 0;
    right: 39px;
    width: 633px;
    height: 435px;
    background: url('../../assets/img/login_banner_ele.png') no-repeat;
  }
}
</style>
