import request from '../utils/request'

export function fantuantv(params = {}) {
    return request({
        method: 'get',
        url: '/fantuantv/list',
        params,
    })
}

export function fantuantvplay(params = {}) {
    return request({
        method: 'get',
        url: '/fantuantv/play',
        params,
    })
}

export function fantuantvclass(params = {}) {
    return request({
        method: 'get',
        url: '/fantuantv/class',
        params,
    })
}

export function fantuantvsearch(params = {}) {
    return request({
        method: 'get',
        url: '/fantuantv/search',
        params,
    })
}
