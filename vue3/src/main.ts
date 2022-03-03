import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import { createRouter } from './router/path'
import 'element-plus/dist/index.css'
import App from './App.vue'

const userInfo = localStorage.getItem('userInfo')

if (userInfo) {
  createRouter(JSON.parse(userInfo).pathArr)
}

createApp(App).use(router).use(ElementPlus).mount('#app')
