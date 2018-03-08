'use strict'
let express = require("express")
let bodyParser =require('body-parser')
let httpRequest = require('./config/router')
let config = require('./config/index')
let app = express()
let server = require('http').Server(app);
let history = require('connect-history-api-fallback')
let cookieParser = require('cookie-parser') 
let session = require('express-session')

let port = process.env.PORT || config.dev.port
let env = process.env.NODE_ENV || 'development'

let router = express.Router()
// 用于静态展示入口
router.get('/', function (req, res, next) {
  req.url = './index.html'
  next()
})
//声明静态资源地址 
app.use(history())   // 这里千万要注意，要在static静态资源上面
app.use(express.static('./dist'))
app.use(router)

// 服务器提交的数据json化
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser())
//session
app.use(session({
  secret: 'vueWeChat',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 60 * 1000 * 30} // 过期时间（毫秒）
  //cookie: { secure: true } 当secure属性设置为true时，cookie只有在https协议下才能上传到服务器，而在http协议下是没法上传的，所以也不会被窃听。
}))

//请求地址
httpRequest(app)

server.listen(3000)