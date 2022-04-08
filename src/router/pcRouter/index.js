// pc端路由
export default [
  // {
  //   path: '/acthds',
  //   name: 'acthds',
  //   component: () => import('@/views/activity/index'), // 懒加载方式
  //   meta: {
  //     title: '活动'
  //   }
  // }
  // 首页
  {
    path: '/pcHomePage',
    name: 'pcHomePage',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/pcViews/pcIndex')
  },
  // 分类
  {
    path: '/pcClassifyPage',
    name: 'pcClassifyPage',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/pcViews/pcClassifyPage')
  },
  // 消息
  {
    path: '/pcMesPage',
    name: 'pcMesPage',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/pcViews/pcMesPage')
  },
  // 我的
  {
    path: '/pcMyHomePage',
    name: 'pcMyHomePage',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/pcViews/pcMyHomePage')
  }
]
