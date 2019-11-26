import * as TYPES from './mutations-types'

export default {
    [TYPES.RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
}