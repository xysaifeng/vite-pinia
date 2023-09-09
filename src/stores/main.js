import { defineStore } from "pinia";


export const useMainStore = defineStore({
  id: 'main',
  state() {
    return {
      count: 0
    }
  },

  getters: {
    double() {
      return this.count * 2
    }
  },

  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})