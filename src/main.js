import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element.js文件
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
