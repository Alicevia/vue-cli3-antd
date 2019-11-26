import axios from 'axios'

let instance1 = axios.create({
  baseURL:'https://www.cluster-dt.com/pcwechat/',
  timeout:10000
})

instance1.interceptors.request.use(config=>{
  return config
},err=>{
  return Promise.reject(err)
})

instance1.interceptors.response.use(response=>{
  return response
},err=>{
  return Promise.reject(err)
})

let instance2 = axios.create({
  baseURL:'https://www.cluster-dt.com/pcwechat/',
  timeout:10000
})

instance2.interceptors.request.use(config=>{
  return config
},err=>{
  return Promise.reject(err)
})

instance2.interceptors.response.use(response=>{
  return response
},err=>{
  return Promise.reject(err)
})


export  {instance1,instance2}