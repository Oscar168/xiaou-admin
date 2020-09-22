/* 
 重写get和post，因为基础用法的get和post无法携带请求头，也就是无法传递token
*/
import axios from "axios"
// import  router from "../router/index"
// import  store from "../store/index"

let instance = axios.create({
    baseURL: "/api",
    timeout: 6000
})

/* 
    请求拦截，所有的http请求都会被拦截下来
    instance.interceptors.request.use(config=>{
        //config 关于请求的所有信息
        config.headers.authorization= store.state.user.token
        return config
 })

    响应拦截
    instance.interceptors.response.use(res=>{
        if(res.data.code==403){
            //跳到登录页
            router.push("/login")
        }
        return res
    })
*/

function get (url, params) {
    return instance.get(url, {
        params
    })
}

function post (url, params) {
    return instance.post(url, params)
}

export default {
    get,
    post
}