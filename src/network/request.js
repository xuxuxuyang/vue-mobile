import axios from 'axios'
export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/m3',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    //这里是请求拦截，请求前做些什么？
    return config
  }, err => {

  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })
  // 发送真正的网络请求
  return instance(config)
}