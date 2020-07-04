import { request } from 'network/request'

export function getHomedata () {
  return request({
    url: '/home/multidata'
  })
}