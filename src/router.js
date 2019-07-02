import Vue from 'vue'
import Router from 'vue-router'
// 面板模块
// 登陆页
import Login from './components/dashboard/Login.vue'
// 主页
import Home from './components/dashboard/Home.vue'
// 后台企业模块
<<<<<<< HEAD
import Users from './components/user/User.vue';
// 面试技巧
import Articles from './components/articles/Articles.vue'
=======
import Users from './components/user/User.vue'
>>>>>>> 46a3f0ec1a63ae50b8935c74f5dadd5894f9c3cb

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/users',
      children: [
        { path: '/users', component: Users },
        { path: '/articles', component: Articles },
      ]
    }
  ]
})
