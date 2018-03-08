import * as types from './mutationsType'

export default{
    // 打开聊天窗口
  openAlert: ({commit}, obj) => {
    commit(types.OPENALERT, obj)
  },
  // 用户登录
  login: ({commit}) => {
    commit(types.LOGIN)
  },
  // 用户注册
  register: ({commit}) => {
    commit(types.REGISTER)
  },
  // 聊天界面展示
  showChatList: ({commit}) => {
    commit(types.CHATLIST)
  },
  // 添加好友
  addFriends: ({commit}) => {
    commit(types.ADDFRIENDS)
  },
  // 发送消息
  sendMessage: ({commit}) => {
    commit(types.SENDMESSAGE)
  }
}
