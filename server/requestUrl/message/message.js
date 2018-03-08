const Message = require('../../model/MessageModel')
// const User = require('../../model/UserModel')
const mongoose = require('mongoose')

const result = {success: false, message: '信息错误查询', data: {}}

module.exports = {
  getMessage: (FromUserUID, ToUserUID) => {
    if (!FromUserUID || !ToUserUID) return Promise.resolve(result)
    // 查询信息
    return new Promise((resolve, reject) => {
      Message._find({FromUserUID: FromUserUID, ToUserUID: ToUserUID}, (res) => {
        if (res === null) {
          result.message = '^_^记得多保持联系哦o(*￣︶￣*)o'
        } else {
          result.success = true
          result.data = res
        }
        console.log('res24535:', res)
        resolve(result)
      })
    })
  },
  InsertMessage: (FromUserUID, ToUserUID, message) => {
    if (!FromUserUID || !ToUserUID || !message || message === '') {
      result.message = '发送的信息不能为空'
      return Promise.resolve(result)
    } else {
      return new Promise((resolve) => {
        let insertData = {
          MID: mongoose.Types.ObjectId(),
          PostMessages: message,
          Mstatus: 1,
          MessagesTypeID: 1,
          FromUserUID: FromUserUID,
          ToUserUID: ToUserUID
        }
        Message._insert(insertData, (res) => {
          if (res === null) {
            result.message = '发送失败'
          } else {
            result.success = true
            result.message = '数据保存成功'
          }
          resolve(result)
        })
      })
    }
  }
}
