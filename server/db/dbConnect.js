'use strict'
let mongoose = require('mongoose')
// 用于异步回调
mongoose.Promise = require('bluebird')

// 链接数据库
let db = mongoose.createConnection('mongodb://127.0.0.1:27017/wechat')

db.on('error', console.error.bind(console, 'mongoose connnection fail'))

db.once('open', function (callback) {
  console.log('mongoose success')
})

module.exports = db
