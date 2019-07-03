<template>
  <el-container>
    <el-main class="container">
      <el-card>
        <el-row>
          <el-col>
            <div class="form-hearder">
              <img src="../../assets/img/login_icon_color.png" alt />
              <span>黑马面面</span>
              <span>|</span>
              <span>用户登陆</span>
            </div>
          </el-col>
        </el-row>
        <el-form label-position="right" ref="form">
          <el-form-item>
            <el-input prefix-icon placeholder="邮箱/手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col :span="18">
                <el-input prefix-icon placeholder="验证码"></el-input>
              </el-col>
              <el-col :span="6">
                <div class="erweima-box">
                  <img src="../../assets/img/erweima.png" alt />
                </div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-checkbox class="additional-box" v-model="checked">
              我已阅读并同意
              <span>用户协议</span>和
              <span>隐私条款</span>
            </el-checkbox>
          </el-form-item>
          <!-- 登陆按钮 -->
          <el-form-item class="submitBtn-box">
            <el-button type="primary">登陆</el-button>
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
    return {
      isChecked: false
    }
  },

  methods: {},

  created() {}
}
</script>

<style lang='less' scoped>
.form-hearder {
  display: flex;
  align-items: center;
  font-family: SourceHanSansCN-Regular;
  font-size: 24px;
  > img {
    margin-right: 10px;
  }
  > span:nth-of-type(2) {
    margin: 0 10px;
    color: #c7c7c7;
  }
}
.container {
  .login-banner {
    position: absolute;
    bottom: 0;
    right: 39px;
    width: 633px;
    height: 435px;
    background: url('../../assets/img/login_banner_ele.png') no-repeat;
  }
  .el-form {
    margin-top: 30px;
    .additional-box {
      span {
        color: #1299fa;
      }
    }
    .submitBtn-box {
      button {
        height: 50px;
        width: 100%;
      }
    }
  }
  width: 100%;
  height: 788px;
  background-color: #1299fa;
  .el-card {
    position: relative;
    top: 198px;
    left: 181px;

    width: 435px;
    height: 357px;
    padding: 20px;

    background-color: #f5f5f5;
    z-index: 999;
  }
}
</style>
