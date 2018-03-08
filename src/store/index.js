import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import state from './state'
import chat from './modules/chat'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chat,
    user
  },
  state,
  actions
})
