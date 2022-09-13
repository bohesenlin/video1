import request from '../utils/request'

export function doubanclass(params = {}) {
    return request({
        method: 'get',
        url: '/douban/class',
        params,
    })
}
