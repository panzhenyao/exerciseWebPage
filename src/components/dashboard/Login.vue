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
        <el-form
          label-position="right"
          :model="loginForm"
          ref="loginFormRef"
          :rules="loginFormRule"
        >
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" placeholder="邮箱/手机号" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-row>
              <el-col :span="18">
                <el-input
                  prefix-icon="el-icon-search"
                  v-model="loginForm.password"
                  placeholder="验证码"
                ></el-input>
              </el-col>
              <el-col :span="6">
                <div class="erweima-box">
                  <img src="../../assets/img/erweima.png" alt />
                </div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-checkbox class="additional-box" v-model="isChecked">
              我已阅读并同意
              <span>用户协议</span>和
              <span>隐私条款</span>
            </el-checkbox>
          </el-form-item>
          <!-- 登陆按钮 -->
          <el-form-item class="submitBtn-box">
            <el-button type="primary" @click="sendUserInfo">登陆</el-button>
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
      isChecked: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRule: {
        username: [
          { required: true, message: '请输入邮箱名或手机号', trigger: 'blur' },
          { min: 3, max: 22, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '填写密码', trigger: 'blur' }]
      }
    }
  },

  methods: {
    // 发起用户请求跳转页面
    sendUserInfo() {
      if (!this.isChecked) return this.$message.info('请勾选协议哦~')
      this.$refs.loginFormRef.validate(async vail => {
        if (!vail) {
          return this.$message.info('请正确填入表单信息')
        }
        const password = this.$sha256(this.loginForm.password)
        const { data: res } = await this.$http.post(
          '/frame/login',
          {
            username: this.loginForm.username,
            password: password
          }
        )
        this.$message.success('登陆成功')
        window.sessionStorage.setItem('token', res.token)
        this.$router.push('/home')
      })
      // 发起请求
    }
  },

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
