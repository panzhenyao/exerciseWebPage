import Vue from 'vue'
import Router from 'vue-router'
// 面板模块
// 登陆页
import Login from './components/dashboard/Login.vue'
// 主页
import Home from './components/dashboard/Home.vue'
// 后台企业模块
import Users from './components/user/User.vue'
import Articles from './components/articles/Articles.vue'
import Subjects from './components/subjects/Subjects.vue'
import Directorys from './components/subjects/Directorys.vue'

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
        { path: '/subjects', component: Subjects },
        { path: '/directorys', component: Directorys }
      
      ]
    }
  ]
})
