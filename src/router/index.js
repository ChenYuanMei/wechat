import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'
import Register from '@/view/register/register'
import Chat from '@/view/chat/chat'
import Error from '@/view/error/error'
import NotFiles from '@/view/error/notFiles'
import AddFriends from '@/view/friend/addFriends'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/addFriends',
      name: 'AddFriends',
      component: AddFriends
    },
    {
      path: '*',
      name: 'NotFiles',
      component: NotFiles
    }
  ]

})
