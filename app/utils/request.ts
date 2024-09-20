import axios from 'axios'


axios.defaults.baseURL = process.env.baseURL // 设置axios的默认请求URL
axios.defaults.timeout = 100000 // 设置axios的默认超时时间为10秒
axios.defaults.withCredentials = true // 设置axios默认请求带上跨域请求的凭证
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest' // 用来标识Ajax请求
axios.defaults.headers.post['Content-Type'] = 'application/json' // 设置axios默认POST请求体为json

/**
 * 在请求发送之前，通过拦截器给请求头添加Authorization字段，值为getToken()的返回值，用于携带用户的身份认证信息。
 */
axios.interceptors.request.use(config => {
    // const token = getToken()
    // if (token != null) {
    //     config.headers['Authorization'] = 'Bearer ' + getToken()
    // } else {
    //     config.headers['Authorization'] = ''
    // }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

/**
 * 在响应返回之前，通过拦截器对响应进行处理。
 * 1.首先判断响应数据是否为对象，如果不是，则提示服务端异常并返回错误。
 * 2.然后判断响应数据的code字段，如果不是00000，则根据具体的错误码进行相应的处理，如显示错误信息、清除token等操作。
 * 3.最后，如果响应数据符合预期，则将响应数据返回。
 */
// axios.interceptors.response.use(res => {
//     if (typeof res.data !== 'object') {
//         return Promise.reject(res)
//     }
//     if (res.data.code != "00000") {
//         if (res.data.message) {
//             console.log(res.data.message)
//         }

//         if (res.data.code == 'A0230') {// 登录已过期
//             // router.push({ path: '/login' })
//         }
//         return Promise.reject(res.data)
//     }
//     return res.data
// }, error => {
//     console.log(error)
//     Promise.reject(error)
// })

export default axios;
