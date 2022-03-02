import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router/index.js'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App).use(router).use(ElementPlus).mount('#app')
