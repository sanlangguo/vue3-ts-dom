import { RouteRecordRaw } from 'vue-router'
import router from './index'

const pageRouters: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/about.vue')
  },
  {
    path: "/home",
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
  }
]

// 动态创建路由
export const createRouter = function(data: Array<string>) {
  if (data && data.length) {
    pageRouters.map(item => {
      data.map(val => {
        console.log(val, item.path)
        if (item.path === val) {
          router.addRoute(item)
        }
      })
    })
  }
}
