const User = require('../../model/UserModel')
const mongoose = require('mongoose')

const result = {success: false, message: '', data: {}}
module.exports = {
  // 用户登录
  userLogin: (username, password) => {
    if (username.length <= 0 || password.length <= 0) return Promise.resolve(result)
    return new Promise((resolve) => {
      User._find({username: username}, (res) => {
        if (res === null) {
          result.message = '当前用户没有注册'
        } else {
          // 检查密码是否正确
          if (res.password === password) {
            result.success = true
            result.message = '登陆成功'
            result.data = res
          } else {
            result.message = '密码不正确,请重新输入'
          }
        }
        resolve(result)
      })
    })
  },
  // 用户注册
  userRegister: (options) => {
    if (options.username.length <= 0 || options.password.length <= 0) return Promise.resolve(result)
    options.alias = options.username
    options.uid = mongoose.Types.ObjectId()
    options.sex = 1
    options.isEnable = 1
    return new Promise((resolve) => {
      User._insert(options, (res) => {
        if (res === null) {
          result.message = '当前用户已经被注册'
        } else {
          result.success = true
          result.message = '注册成功'
          result.data = res
        }
        resolve(result)
      })
    })
  }
}
