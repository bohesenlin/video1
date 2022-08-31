import request from '../utils/request'

export function cupfox(params = {}) {
    return request({
        method: 'get',
        url: '/cupfox/search',
        params,
    })
}
