import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './user'
import orderInfo from './order'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userInfo,
    order: orderInfo
  }
})
