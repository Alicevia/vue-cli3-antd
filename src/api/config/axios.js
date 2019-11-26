import {instance1 as Axios,instance2 as Ajax} from './axiosDefault'
import qs from 'qs'

function spliceUrl(data) {
  data = qs.stringify(data, { encode: false })
  data = '?' + data
  return data
}

export  function axios({url,data={},method='get',flag=false,config={}}){
  let promise
  if (!flag) {
    promise = Axios({url,method,data,...config})
  }else {
    if (method==='get') {
      promise = Axios({url,method,params:data,...config})
    }else {
      url+=spliceUrl(data)
      promise = Axios({url,method,...config})
    }
  }
  return promise
}

export  function ajax({url,data={},method='get',flag=false,config={}}){
  let promise
  if (!flag) {
    promise = Ajax({url,method,data,...config})
  }else {
    if (method==='get') {
      promise = Ajax({url,method,params:data,...config})
    }else {
      url+=spliceUrl(data)
      promise = Ajax({url,method,...config})
    }
  }
  return promise
}