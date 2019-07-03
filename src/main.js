import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element.js文件
import './plugins/element.js'
// 导入element.css 文件
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import './assets/css/global.css'
// 导入axios 插件
import axios from 'axios'

Vue.config.productionTip = false

// axios 默认配置
axios.defaults.baseURL =
  'http://127.0.0.1:7001/'
// 配置axios
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 配置拦截请求
axios.interceptors.request.use(config => {
  // 为请求添加 console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // *必须返回配置
  return config
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
