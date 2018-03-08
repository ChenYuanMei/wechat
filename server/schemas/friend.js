const Mod = require('./mongoose')

const friendSchema = Mod.mongoose.Schema({
  itemID: String,
  currentUid: String,
  friendList: {type: Array, default: []}
})

let Friend = Mod.db.model('Friend', friendSchema, 'friend')

module.exports = Friend
