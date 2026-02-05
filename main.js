import App from './App'
import uviewPlus from '@/uni_modules/uview-plus'
import { createPinia } from 'pinia' // 👈 新增导入

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia() // 👈 创建实例
  
  app.use(uviewPlus)
  app.use(pinia) // 👈 挂载 Pinia
  
  return {
    app,
    pinia // 👈 必须返回（UniApp 要求）
  }
}
// #endif