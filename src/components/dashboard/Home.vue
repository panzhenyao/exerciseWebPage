<template>
  <el-container class="home_container">
    <el-header>
      <div class="header_left">
        <div>
          <img src="../../assets/img/login_icon_m.png" />
          <span>黑马面面</span>
        </div>
        <el-input class="header_searchBtn" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </div>
      <div class="header_right">
        <el-button></el-button>
        <img src alt />
        <el-button>退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#fff"
          text-color="#000"
          unique-opened
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu active-text-color="fff" v-for="item in memuList" :key="item.id">
            <template slot="title">
              <!-- 图标 -->
              <i></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              active-text-color="87919b"
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <template slot="title">
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      memuList: [
        {
          id: 1,
          authName: '用户管理',
          children: [{ id: 1, authName: '用户列表', path: 'users' }]
        }
      ],
      // 是否折叠
      activePath: ''
    }
  },

  methods: {
    // 点击获取主页内容
    saveNavState() {}
  },

  created() {}
}
</script>

<style lang='less' scoped>
.home_container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  color: #fff;
  background-image: linear-gradient(264deg, #01c6fa 0%, #1493fa 80%),
    linear-gradient(#6383e5, #6383e5);
  background-blend-mode: normal, normal;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    > span {
      font-family: SourceHanSansCN-Normal;
      font-size: 23px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #ffffff;
    }
  }
}
.el-input {
  margin-left: 30px;
  .el-input__inner {
    background-color: #c9d4f6;
    border-radius: 12px;
  }
}
.el-menu-item {
  margin-left: 0;
}
.el-aside {
  background-color: rgb(51, 55, 68);
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: rgb(234, 237, 241);
}
</style>
