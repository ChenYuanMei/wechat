
const User = require('../schemas/user')
const baseModel = require('./BaseModel')

module.exports = {
  // 查询
  _find: (conditions, callback) => {
    return baseModel._findOne(User, conditions, callback)
  },
  // findIn查询
  _findIn: (options, field, select, sort, callback) => {
    return baseModel._findInMany(User, options, field, select, sort, callback)
  },
  // 添加
  _insert: (options, callback) => {
    let monInsert = new User(options)
    // 检查该用户名是否已经被注册
    baseModel._findOne(User, {username: options.username}, (res) => {
      if (res) {
        return callback(null)
      } else {
        return baseModel._insert(monInsert, callback)
      }
    })
  }
}
