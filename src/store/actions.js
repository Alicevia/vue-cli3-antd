export default {
    recordUser({commit,state},userInfo){
  
        commit(TYPES.RECEIVE_USER_INFO,{userInfo})
    },
}