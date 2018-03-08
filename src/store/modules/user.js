import * as types from '../mutationsType'
import Request from '../../api/RequestApi'
import crypto from '../../../utils/crypto'
import { Toast } from 'mint-ui'
import Router from '../../router'

const state = {
  loginInfo: {username: '', password: ''},
  registerInfo: {username: '', password: '', passwordAgain: '', email: ''},
  addFriends: {username: ''}
}

const getters = {
  loginInfo: state => state.loginInfo,
  addFriend: state => state.addFriends,
  registerInfo: state => state.registerInfo
}

const mutations = {
  // 用户登录操作
  async [types.LOGIN] (state) {
    let encryptPwd = crypto.md5(state.loginInfo.password)
    let result = await Request.login({username: state.loginInfo.username, password: encryptPwd})
    Toast(result.message)
    if (result.success === false) {
      return false
    } else {
      Router.push('/chat')
    }
  },
  // 用户注册操作
  async [types.REGISTER] (state) {
    if (state.registerInfo.password !== state.registerInfo.passwordAgain) {
      Toast('两次输入的密码不一样')
      return false
    } else {
      let encryptPwd = crypto.md5(state.registerInfo.password)
      let result = await Request.register({username: state.registerInfo.username, password: encryptPwd, email: state.registerInfo.email})
      if (result.success === false) {
        Toast(result.message)
        return false
      } else {
        Toast(result.data.username + result.message)
        Router.push('/chat')
      }
    }
  },
  // 添加好友
  async [types.ADDFRIENDS] (state) {
    let result = await Request.addFriends({username: state.addFriends.username})
    Toast(result.message)
    if (result.success === false) {
      return false
    } else {
      Router.push('/chat')
    }
  }
}

export default {
  state,
  getters,
  mutations
}
