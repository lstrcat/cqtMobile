import { createRouter, createWebHashHistory  } from 'vue-router'
 
const routerHistory = createWebHashHistory ()
 
const jianjie = () => import("../views/briefInts.vue")
const zhengshu = () => import("../views/certs.vue")
const claim = () =>import("../views/claim.vue")
const home = () => import("../views/home.vue")
const login = () => import("../views/login.vue")

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      // 当访问 '/'的时候 路由重定向 到新的地址 '/home'
      redirect: '/brief'
    },  
    {
      path: '/brief',
      component: jianjie
    },
    {
      path: '/certs',
      component: zhengshu
    },
    {
      path: '/claim',
      component: claim
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    }
  ]
})
export default router
 