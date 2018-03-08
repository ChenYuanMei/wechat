const Friend = require('../../model/FriendModel')
const User = require('../../model/UserModel')
const mongoose = require('mongoose')

const result = {success: false, message: '', data: {}}

module.exports = {
    /**
     * 请求好友列表
     * @params currentUid 当前用户的UID
     */
  getFriendList: (currentUid) => {
    if (!currentUid) return Promise.resolve(result)
    return new Promise((resolve) => {
      Friend._find({currentUid: currentUid}, (res) => {
        if (res === null) {
          result.message = '当前好友列表为空'
          resolve(result)
        } else {
            // 获取当前所有好友的信息
          let conditions = []
          res.friendList.forEach((v) => {
            if (v.uid) {
              conditions.push(v.uid)
            }
          })
          User._findIn(conditions, 'uid', 'uid username alias thumbs email', {'create_time': -1}, (data) => {
            if (!data || data === null) {
              result.message = '未查询到你的好友'
            } else {
              result.success = true
              result.data = data
            }
            resolve(result)
          })
        }
      })
    })
  },
    /**
     * 添加好友
     * @params currentUid 当前用户的UID
     */
  addFriends: (params) => {
    if (!params && !params.currentUid && !params.friendUsername) return Promise.resolve(result)
    let currentUid = params.currentUid // 当前用户的uid
    let friendUsername = params.friendUsername // 当前被添加的好友名称
    // 检查添加的好友 是否已经存在
    return new Promise((resolve) => {
      User._find({username: friendUsername}).then((res) => {
        if (res === null) {
          result.message = '当前好友不存在'
        } else {
            // 查询当前用户时候是否已经有好友
          Friend._find({currentUid: currentUid}).then((data) => {
            let Arr = []
            let insertData = {}
            let isUpdate = false
            if (data === null) {
                // 插入新数据
              insertData.itemID = mongoose.Types.ObjectId()
              insertData.currentUid = currentUid // 当前用户的uid
            } else {
              Arr = data.friendList
              isUpdate = true
            }
            Arr.push({uid: res.uid, beFriendTime: new Date()})
            insertData.friendList = Arr
            if (!isUpdate) { // 插入数据
              Friend._insert(insertData, (rtn) => {
                if (rtn !== null) {
                  result.success = true
                  result.message = '添加成功'
                } else {
                  result.message = '添加失败'
                }
                resolve(result)
              })
            } else {
              Friend._update({currentUid: currentUid}, {friendList: insertData.friendList}, (rtn) => {
                if (rtn !== null) {
                  result.success = true
                  result.message = '添加成功'
                } else {
                  result.message = '添加失败'
                }
                resolve(result)
              })
            }
          })
        }
        resolve(result)
      })
    })
  }
}
