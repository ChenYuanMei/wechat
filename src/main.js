// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import Common from '../utils/common'
import store from './store'
import Helper from '../utils/helper'

Vue.config.productionTip = false

Vue.use(Common)
Vue.use(Helper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
