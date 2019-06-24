import AxiosLibrary from 'axios'
import {Message} from 'element-ui'

const axios = AxiosLibrary.create()

axios.interceptors.request.use((config) =>{
    return config;
}, (err) =>{
    console.log(err)
    return Promise.reject(err);
})

axios.interceptors.response.use((response) =>{
   let data = response.data;
    console.log(JSON.stringify(response))
    if(data.code === 0){
        Message.error('数据被拦截')
        //return Promise.reject('请求数据。。。'); 
    }
    return response;
}, (err) =>{
    console.log('interceptors:'+JSON.stringify(err.response))
    Message.error('请求失败')
    return Promise.reject(err); 
})

export {
    axios,
}