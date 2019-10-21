import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/v1',
        timeout: 5000
    })

    // axios 拦截器
    //   拦截请求
    instance.interceptors.request.use(config => {
        // 1.修改config
        // 2. 每次请求界面显示图标
        // 3. 携带 token
        return config
    }, err => {
        console.log(err)
    })
    //   拦截响应
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    return instance(config)
}