import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login.vue')
  },
  { path: '/', redirect: '/login', }
]

console.log(12312)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
  // let token = getToken() 
  // if(!token) { next('/login') }
  // 返回 false 以取消导航
  // return false
// })

export default router
