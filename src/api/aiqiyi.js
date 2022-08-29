import request from '../utils/request'

export function main() {
    return request({
        method: 'get',
        url: '/aiqiyi/main',
    })
}

// 影视分类
export function aiqiyiclass(params = {}) {
    return request({
        method: 'get',
        url: '/aiqiyi/class',
        params,
    })
}
// 视频搜索
export function aiqiyisearch(params = {}) {
    return request({
        method: 'get',
        url: '/aiqiyi/search',
        params,
    })
}
// 视频播放页面
export function aiqiyi(params = {}) {
    return request({
        method: 'get',
        url: '/aiqiyi/list',
        params,
    })
}
