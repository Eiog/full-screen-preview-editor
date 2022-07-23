import http from "@/http"
import { useAppStore } from "@/store"
const login = (data) => {
    const appStore = useAppStore()
    return new Promise((resolve, reject)=> {
        http.post('/login', data).then((res:any) => {
            appStore.user = res
            appStore.auth = res.auth
            appStore.isLogin = true
            appStore.token = res.token
            return resolve(res)
        }).catch((err) => {
            return reject(err)
        })
    })
}
const status = ()=>{
    const appStore = useAppStore()
    const token = appStore.token
    return new Promise((resolve,reject)=>{
        http.get('/status',{token:token}).then((res:any)=>{
            appStore.user = res
            appStore.auth = res.auth
            appStore.isLogin = true
            appStore.token = res.token
            return resolve(res)
        }).catch((err)=>{
            return reject(err)
        })
    })
}
export const loginApi = {
    login,status
}