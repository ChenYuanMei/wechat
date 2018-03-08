import axios from 'axios'
import router from '../router'
import { Toast } from 'mint-ui'

// 添加一个请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

// 添加一个响应拦截器
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
    // 检查是否需要授权
  if (err.response.status && err.response.status === 401) {
    sessionStorage.clear()
    localStorage.clear()
    router.push('/login')
    return false
  } else if (err.response.status === 404) { // 404页面不存在
    router.push('/error')
  } else if (err.response.status === 500 || err.response.status === 501 || err.response.status === 502 || err.response.status === 504) { // 检查服务器500
    Toast({
      message: '服务器繁忙 稍后再试',
      duration: 2000
    })
  } else { // 其他错误
    Toast({
      message: '出错啦! ' + err.response.status + JSON.stringify(err.response.data),
      duration: 3000
    })
  }
  return Promise.reject(err)
})

// 请求地址
export const httpFetch = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
