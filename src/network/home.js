import { request } from 'network/request'

export function getSwiperdata () {
  return request({
    url: '/home/multidata'
  })
}