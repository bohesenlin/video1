import request from '../utils/request'


//tengxun
export function fantuantv(params = {}) {
    return request({
        method: 'get',
        url: '/fantuantv/list',
        params,
        // params: { videoname: '斗罗大陆' },
    })
}

export function fantuantvplay(params = {}) {
    return request({
        method: 'get',
        url: '/fantuantv/play',
        params,
        // params: { videoname: '斗罗大陆' },
    })
}

//tengxuncategory
export function fantuantvclass(params = {}) {
    return request({
        method: 'get',
        url: '/fantuantv/class',
        params,
    })
}
//tengxunsearch
export function fantuantvsearch(params = {}) {
    return request({
        method: 'get',
        url: '/fantuantv/search',
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

