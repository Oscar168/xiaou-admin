// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入需要使用封装好的http文件
import http from './http'

// 引入过滤器
import "./filters/statusFormat"

Vue.use(ElementUI)
Vue.config.productionTip = false
//在 vue原型上重新命名；
Vue.prototype.$http=http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
