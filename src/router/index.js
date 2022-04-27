import { createRouter, createWebHashHistory  } from 'vue-router'
 
const routerHistory = createWebHashHistory ()
 
const jianjie = () => import("../views/briefInts.vue")
const zhengshu = () => import("../views/certs.vue")
const claim = () =>import("../views/claim.vue")
const home = () => import("../views/home.vue")
const article = () => import("../views/article.vue")

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      // 当访问 '/'的时候 路由重定向 到新的地址 '/home'
      redirect: '/brief'
    },    
    {
      component: home,
      children:[
        {
          path: '/brief',
          name: 'brief',
          components: {
            cqt: jianjie
          }
        },
        {
          path: '/certs',
          name: 'certs',
          components: {
            cqt: zhengshu
          }
        },
        {
          path: '/claim',
          name: 'claim',
          components: {
            cqt: claim
          }
        }
      ]
    },
    {
      name: 'Detail',
      path: '/article',
      components:  {
        default: article
      }
    }
  ]
})
export default router
 