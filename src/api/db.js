import request from '../utils/request'

// 视频记录
export function update(params = {}) {
    return request({
        method: 'get',
        url: '/db/update',
        params,
        // params: { videoname: '斗罗大陆' },
    })
}
export function find(params = {}) {
    return request({
        method: 'get',
        url: '/db/find',
        params,
        // params: { videoname: '斗罗大陆' },
    })
}
export function getInterface(params = {}) {
    return request({
        method: 'get',
        url: '/db/getInterface',
        params,
    })
}
