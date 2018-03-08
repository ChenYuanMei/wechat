// 消息模型
const Mod = require('./mongoose')

const MessageSchema = Mod.mongoose.Schema({
  MID: String,
  PostMessages: String,
  Mstatus: {type: Number, default: 1},
  SendTime: {type: Date, default: Date.now},
  MessagesTypeID: {type: Number, default: 1},
  FromUserUID: String,
  ToUserUID: String
})

let Message = Mod.db.model('Message', MessageSchema, 'message')

module.exports = Message
