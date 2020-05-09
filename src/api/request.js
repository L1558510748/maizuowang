import axios from 'axios';
import { Toast } from 'vant'
var services = axios.create({
    baseURL: "/mz",
    timeout: 3000,
    headers: {
        "content-type": "application/json",
    }
})
var toast =null;
services.interceptors.request.use((config) => {
    toast = Toast.loading({
        duration: 0,
        message: "loading...",
        forbidClick: false
    })
    config.headers["X-Client-Info"] = `{"a":"3000","ch":"1002","v":"5.0.4","e":"15886887402641404888273","bc":"110100"}`
    return config;
})
services.interceptors.response.use((res) => {
    toast.clear();
    return res.data;
})
export default services;