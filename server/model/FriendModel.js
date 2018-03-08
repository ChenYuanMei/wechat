const Friend = require('../schemas/friend')
const baseModel = require('./BaseModel')

module.exports = {
    // 查询
  _find: (conditions, callback) => {
    return baseModel._findOne(Friend, conditions, callback)
  },
    // 添加
  _insert: (options, callback) => {
    let monInsert = new Friend(options)
      // 查询是否有数据
    baseModel._findOne(Friend, {currentUid: options.currentUid}, (res) => {
      if (res) {
        return callback(null)
      } else {
        return baseModel._insert(monInsert, callback)
      }
    })
  },
  // 更新操作
  _update: (conditions, options, callback) => {
      // 查询是否有数据
    baseModel._findOne(Friend, {currentUid: options.currentUid}, (res) => {
      console.log('hahah:', res)
      if (res) {
        return callback(null)
      } else {
        return baseModel._update(Friend, conditions, options, callback)
      }
    })
  }
}
