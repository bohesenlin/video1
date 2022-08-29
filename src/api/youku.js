import request from '../utils/request'


//youku
export function youku(params = {}) {
    return request({
        method: 'get',
        url: '/youku/list',
        params,
        // params: { videoname: '斗罗大陆' },
    })
}

//youku
export function main() {
    return request({
        method: 'get',
        url: '/youku/main',
        // params,
        // params: { videoname: '斗罗大陆' },
    })
}

//youkucategory
export function youkuclass(params = {}) {
    return request({
        method: 'get',
        url: '/youku/class',
        params,
    })
}
//youkusearch
export function youkusearch(params = {}) {
    return request({
        method: 'get',
        url: '/youku/search',
        params,
    })
}



// 视频播放页面
// export function getvideo_aiqiyivideolist(params = {}) {
//     return request({
//         method: 'get',
//         url: '/aiqiyivideolist',
//         params,
//         // params: { videoname: '斗罗大陆' },
//     })
// }

