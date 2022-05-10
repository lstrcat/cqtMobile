import { createRouter, createWebHashHistory  } from 'vue-router'
 
const routerHistory = createWebHashHistory ()
 
const jianjie = () => import("../views/briefInts.vue")
const zhengshu = () => import("../views/certs.vue")
const claim = () =>import("../views/claim.vue")
const cqt = () =>import("../components/Cqt.vue")

const hello = () =>import("../components/HelloWorld.vue")

const home = () => import("../views/home.vue")
const article = () => import("../views/article.vue")

const router = createRouter({
  history: routerHistory,
  routes: [   
    {
      path: "/",
      name: "index",
      redirect: '/home'
    },
    {
      component: home,
      children:[
        {
          path: '/home',
          name: 'home',
          components: {
            qr2cqt: hello
          }
        },
        {
          path: '/page1',
          name: 'page1',
          components: {
            qr2cqt: cqt
          },
          redirect: '/brief',
          children:[
            {
              path: '/brief',
              name: 'brief',
              components: {
                renshi: jianjie
              }
            },
            {
              path: '/certs',
              name: 'certs',
              components: {
                renshi: zhengshu
              }
            },
            {
              path: '/claim',
              name: 'claim',
              components: {
                renshi: claim
              }
            }
          ]       
        },

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
 