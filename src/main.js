import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui/'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import 'nprogress/nprogress.css'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(elementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
