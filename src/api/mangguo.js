import request from '../utils/request'


//mangguo
export function mangguo(params = {}) {
    return request({
        method: 'get',
        url: '/mangguotv/list',
        params,
    })
}

//mangguocategory
export function mangguoclass(params = {}) {
    return request({
        method: 'get',
        url: '/mangguotv/class',
        params,
    })
}

//mangguosearch
export function mangguosearch(params = {}) {
    return request({
        method: 'get',
        url: '/mangguotv/search',
        params,
    })
}
