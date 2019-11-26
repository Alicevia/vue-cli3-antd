// import axios from '../axios'
import {axios,ajax} from '../config/axios'
export function reqLogin(data){
  return axios({
    url:'register/login1',
    data,
    method:'post',
  })
}