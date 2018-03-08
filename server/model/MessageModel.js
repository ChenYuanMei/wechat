
const Message = require('../schemas/message')
const baseModel = require('./BaseModel')

module.exports = {
  // 查询
  _find: (conditions, callback) => {
    return baseModel._query(Message, conditions, callback)
  },
  // 添加
  _insert: (options, callback) => {
    let monInsert = new Message(options)
    return baseModel._insert(monInsert, callback)
  }
}
