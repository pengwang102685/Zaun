import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// iconfont图标
import './assets/iconfont/iconfont.css'
// import VueAxios from 'vue-axios'
import './assets/lz.iconfont/iconfont.css'
import './assets/user_iconfont/iconfont.css'
import './assets/service_iconfont/iconfont.css'
import './assets/px_font/iconfont.css'
// Vue.use(VueAxios, axios)
// import axios from 'axios'
import '../node_modules/swiper/dist/css/swiper.min.css'
import elementUi from 'element-ui'
import '../node_modules/element-ui/lib/index'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import vueResource from 'vue-resource'
import md5 from '../node_modules/md5'
// Vue.use(VueAxios, axios)
Vue.use(vueResource)
Vue.use(elementUi)
Vue.use(md5)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  md5,
  // axios,
  render: h => h(App)
}).$mount('#app')
