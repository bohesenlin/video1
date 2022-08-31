import request from '../utils/request'

//tengxun
export function main(params = {}) {
    return request({
        method: 'get',
        url: '/tengxun/main',
        params
        // params: { videoname: '斗罗大陆' },
    })
}

//tengxun
export function tengxun(params = {}) {
    return request({
        method: 'get',
        url: '/tengxun/list',
        params,
        // params: { videoname: '斗罗大陆' },
    })
}

//tengxuncategory
export function tengxunclass(params = {}) {
    return request({
        method: 'get',
        url: '/tengxun/class',
        params,
    })
}
//tengxunsearch
export function tengxunsearch(params = {}) {
    return request({
        method: 'get',
        url: '/tengxun/search',
        params,
    })
}
