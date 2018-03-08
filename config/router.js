let apiUrl = require('./serverUrl')
let path = require("path")

//用户模块
let User = require("../server/requestUrl/user/user")
//好友列表模块
let Friend = require("../server/requestUrl/user/friend")
//聊天记录信息模块
let Message = require("../server/requestUrl/message/message")

//其他错误返回信息定义
const returnErr = {success:false,message:"服务器开了点小差"}
module.exports = function(app){
    //用户登录
    app.post(apiUrl.login,(req, res)=>{
        let _user = req.body
        let username = _user.username
        let password = _user.password
        //请求检验
        User.userLogin(username,password).then((result)=>{
            //登录成功设置session
            if(result.success === true){
                req.session.username = result.data.username
                req.session.uid = result.data.uid
                console.log(req.session)
            }
            res.json(result)
        }).catch((err)=>{
            res.json(returnErr)
        })  
    }),
    //用户注册
    app.post(apiUrl.register,(req,res)=>{
        let _register = req.body
        let options = {}
        options.username = _register.username
        options.password = _register.password
        options.email = _register.email
        User.userRegister(options).then((result)=>{
            //注册成功设置session
            if(result.success === true){
                req.session.username = result.data.username
                req.session.uid = result.data.uid
            }
            res.json(result)
        }).catch((err)=>{
            res.json(returnErr)
        })  
    }),
    //聊天列表
    app.post(apiUrl.chatList,(req,res)=>{
        //判断身份认证是否登录
        if(!req.session && !req.session.uid){
            returnErr.message = "请登录"
            res.json(returnErr)
        }else{
            //查询当前用户列表
            Friend.getFriendList(req.session.uid).then((result)=>{
                res.json(result)
            }).catch((err)=>{
                console.log("err:",err)
                res.json(returnErr)
            })
        }
    }),
    //添加好友
    app.post(apiUrl.addFriends,(req,res)=>{
        //判断身份认证是否登录
        if(!req.session && !req.session.uid){
            returnErr.message = "请登录"
            res.json(returnErr)
        }else{
            //查询当前用户列表
            let params = {currentUid:req.session.uid,friendUsername:req.body.username}
            Friend.addFriends(params).then((result)=>{
                res.json(result)
            }).catch((err)=>{
                console.log("err:",err)
                res.json(returnErr)
            })
        }
    }),
    //获取聊天记录信息
    app.post(apiUrl.getMessage,(req,res)=>{
         //判断身份认证是否登录
         if(!req.session && !req.session.uid){
            returnErr.message = "请登录"
            res.json(returnErr)
        }else{
            //查询当前用户列表
            let fromUserUID = req.session.uid
            let toUserUID = req.body.ToUserUID
            Message.getMessage(fromUserUID,toUserUID).then((result)=>{
                console.log("resultL:",result)
                res.json(result)
            }).catch((err)=>{
                console.log("err:",err)
                res.json(returnErr)
            })
        }
    })
}