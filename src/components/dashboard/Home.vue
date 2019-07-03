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
        <i class="el-icon-bell"></i>
        <img class="user-avatar" src="../../assets/img/avatar.png" alt />
        <span>用户名</span>
        <el-button class="login-out-Btn">退出</el-button>
      </div>
    </el-header>
    <el-container class="container-body">
      <el-aside width="200px">
        <!-- 侧边栏菜单区域 -->
        <el-menu
          text-color="#000"
          unique-opened
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            default-active="0"
            active-text-color="#fff"
            v-for="item in memuList"
            :key="item.id"
            :index="item.id + ''"
          >
            <template slot="title">
              <!-- 图标 -->
              <i :class="isObjecClass[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              text-color="#000"
              active-text-color="#fff"
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState( item.id ,'/' + subItem.path)"
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
        },
        {
          id: 2,
          authName: '学科管理',
          children: [
            { id: 1, authName: '学科管理', path: 'subjects' },
            { id: 2, authName: '目录管理', path: 'directorys' },
            { id: 3, authName: '学科管理', path: 'tags' }
          ]
        },
        {
          id: 3,
          authName: '面试技巧',

          children: [{ id: 1, authName: '文章列表', path: 'articles' }]
        }
      ],
      // 是否折叠
      activePath: '0',
      isActive: 0,
      activeClass: '',
      // 导航栏图标
      isObjecClass: {
        1: 'el-icon-user',
        2: 'el-icon-office-building',
        3: 'el-icon-edit-outline'
      }
    }
  },

  methods: {
    // 点击获取主页内容
    saveNavState(path) {
      this.$router.push(path)
    },
    // 移动到items时获取目标id
    getTargetId(id) {
      console.log(id)
    }
  },
  computed: {},

  created() {}
}
</script>

<style lang='less' scoped>
.el-menu-item:hover {
  background-image: linear-gradient(90deg, #1493fa, #01c6fa) !important;
}
.el_container {
  height: 100%;
}
.container-body {
  margin: 22px 10px;
}
.el-header {
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  color: #fff;
  background-image: linear-gradient(264deg, #01c6fa 0%, #1493fa 80%),
    linear-gradient(#6383e5, #6383e5);
  background-blend-mode: normal, normal;
  font-size: 20px;
  .header_left {
    display: flex;

    > div {
      width: 200px;
      display: flex;
      align-items: center;
      > span {
        margin-left: 10px;
        font-family: SourceHanSansCN-Normal;
        font-size: 23px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #ffffff;
      }
    }
  }
  .header_right {
    display: flex;
    align-items: center;
    > img {
      margin: 0 12px;
      width: 40px;
      height: 40px;
      background-color: #ebeef2;
      border-radius: 50%;
    }
    > span {
      font-family: AdobeHeitiStd-Regular;
      font-size: 12px;
      line-height: 38px;
    }
  }
  .header_searchBtn {
    margin-left: 30px;
  }
}

.el-menu-item {
  padding-left: 50px !important;
}
.el-aside {
  width: 193px;
  height: 704px;
  background-color: #ffffff;
  box-shadow: 0px 3px 21px 0px rgba(20, 147, 250, 0.29);
  border-radius: 5px;
  margin-right: 20px;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  height: 704px;
  width: 1190px;
}
</style>
