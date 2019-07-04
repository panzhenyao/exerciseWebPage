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
// 配置过滤器
// 引入过滤器
Vue.filter('dateformat', function(originValue) {
  const date = new Date(originValue)
  const y = date.getFullYear()
  const m = (date.getMonth() + 1 + '').padStart(2, '0')
  const d = (date.getDate() + '').padStart(2, '0')

  const hh = (date.getHours() + '').padStart(2, '0')
  const mm = (date.getMinutes() + '').padStart(2, '0')
  const ss = (date.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
// 引入js-sha256加密
const sha256 = require('js-sha256').sha256
Vue.prototype.$sha256 = sha256

// axios 默认配置
axios.defaults.baseURL = 'http://127.0.0.1:7001/'
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
