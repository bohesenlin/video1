import axios from 'axios'
const request = axios.create({
    // baseURL: 'https://test-three-flax.vercel.app/api',
    // baseURL: 'http://192.168.0.210:3000/api',
    // baseURL: 'http://127.0.0.1:3000/api',
    // baseURL: 'https://videop.vercel.app/api',
    baseURL: 'http://42.194.192.142:3000/api',
    timeout: 10000,
})

export default request
