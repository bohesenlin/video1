import request from '../utils/request'

//youku
export function youku(params = {}) {
    return request({
        method: 'get',
        url: '/youku/list',
        params,
    })
}

//youku
export function main() {
    return request({
        method: 'get',
        url: '/youku/main',
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
