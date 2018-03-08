const Mod = require('./mongoose')

let userSchema = Mod.mongoose.Schema({
  'uid': String,
  'username': String,
  'password': String,
  'thumbs': {type: String, default: 'captain-america.jpg'},
  'mobile': {type: Number, default: ''},
  'alias': {type: String, default: ''},
  'email': {type: String, default: ''},
  'sex': {type: Number, default: 1},
  'isEnable': {type: Number, default: 1},
  'create_time': {type: Date, default: Date.now()},
  'update_time': {type: Date, default: Date.now()}
  // 'create_time': {type: Date, default: Date.parse(Date.now)},
  // 'update_time': {type: Number, default: Date.parse(Date.now)}
})

let User = Mod.db.model('User', userSchema, 'user')

module.exports = User
