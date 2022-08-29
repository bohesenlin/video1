import request from '../utils/request'

export function cupfox(params = {}) {
    return request({
        method: 'get',
        url: '/cupfox/search',
        params,
    })
}

// export function tengxun(params = {}) {
//     return request({
//         method: 'get',
//         url: '/tengxun/list',
//         params,
//         // params: { videoname: '斗罗大陆' },
//     })
// }

