import {defineStore} from 'pinia'


export const useLuasStore = defineStore('luas', {
    // state
    state : () => ({
        sisi : 0,
    }),
    // getters
    getters:{
        luasPersegi:(state) =>{
            return state.sisi * state.sisi
        }
    },

    // actions
    actions: {
        increment() {
            this.sisi++
        },
        decrement() {
            this.sisi--
        },
    }
})