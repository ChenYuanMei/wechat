import * as types from '../mutationsType'
import Request from '../../api/RequestApi'
// import { Toast } from 'mint-ui'
// import Router from '../../router'

const state = {
  friends: {code: '1000', message: '', friendList: []},
  getMessage: {code: '1000', message: '', list: []}

}

const getters = {
  friends: state => state.friends,
  getMessage: state => state.getMessage
}

const mutations = {
  // 展示聊天界面
  async [types.CHATLIST] (state) {
    // 请求后端数据
    let result = await Request.chatList()
    if (result.success === false) {
      state.friends.code = '1001'
      state.friends.message = result.message
    } else {
      state.friends.friendList = result.data
    }
  },
  async [types.OPENALERT] (state, params) {
    let uid = params.uid
    let result = await Request.getMessage({ToUserUID: uid})
    if (result.success === false) {
      state.getMessage.code = '1001'
      state.getMessage.message = result.message
    } else {
      state.getMessage.list = result.data
    }
    console.log('params:', uid)
  },
  // 发送消息
  [types.SENDMESSAGE] (state, message) {
    console.log()
  }
}

export default{
  state,
  getters,
  mutations
}
