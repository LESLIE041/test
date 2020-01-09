import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Element from 'element-ui'
// // 用于登录界面，用于接口获取数据
// import axios from 'axios'
// // 配置请求的根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8080/#'
// axios.interceptors.request.use(config => {
//   console.log(config)
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   // 在最后必须返回config
//   return config
// })
// Vue.prototype.$http = axios

Vue.use(Element, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
