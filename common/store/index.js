// stores/user.js
import { defineStore } from 'pinia'

export const store = defineStore('user', {
  state: () => ({
    name: '',
    token: '',
    cartCount: 0
  }),
  
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  
  actions: {
    login(token, name) {
      this.token = token
      this.name = name
      // 自动持久化（需手动存 Storage）
      uni.setStorageSync('TOKEN', token)
    },
    
    addToCart() {
      this.cartCount++
    }
  }
})