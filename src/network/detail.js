import { request } from 'network/request'

export function getgoodsitems (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}