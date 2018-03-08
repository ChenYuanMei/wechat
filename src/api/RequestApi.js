
import {httpFetch} from './HttpRequest'
import RequestUrl from '../../config/httpRequestUrl'

export default{
    // 登陆请求
  login: data => httpFetch(RequestUrl.login, data),
  // 用户注册
  register: data => httpFetch(RequestUrl.register, data),
  // 聊天界面
  chatList: data => httpFetch(RequestUrl.chatList, data),
  // 添加好友
  addFriends: data => httpFetch(RequestUrl.addFriends, data),
  // 获取聊天记录
  getMessage: data => httpFetch(RequestUrl.getMessage, data)
}
