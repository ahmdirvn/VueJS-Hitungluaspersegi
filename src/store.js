import { defineStore } from 'pinia';

// Membuat dan mengekspor store Pinia
export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  
  },
})

