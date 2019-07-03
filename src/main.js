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

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
