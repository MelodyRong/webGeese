import { createRouter, createWebHistory } from 'vue-router'
import pcRouter from './pcRouter/index'
import mobileRouter from './mobileRouter/index'

export function redirectF () {
  const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  if (flag) {
    return '/mobileIndexView'
  } else {
    return '/pcHomePage'
  }
}

const routes = [
  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../components/cannotFind')
  },
  {
    path: '/',
    name: 'homePage',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '../views/homePage')
    // redirect: () => { return redirectF() }
    // children: [{
    //   path: '/',
    //   name: 'recommend',
    //   // component: () => import('@/views/yueTao'),
    //   meta: {},
    //   redirect: () => { return redirectF() }
    // }]
  },
  ...pcRouter,
  ...mobileRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由守卫导航
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   // 返回 false 以取消导航
//   const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
//   if (flag) {
//     // 如果flag不为空，说明可以匹配到，是手机端
//     next({
//       path: '/mobileIndexView'
//     })
//   }
//   next()
// })

export default router
