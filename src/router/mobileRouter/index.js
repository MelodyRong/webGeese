// 手机端路由
export default [
  // 首页
  {
    path: '/mobileIndexView',
    name: 'mobileIndexView',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/mobileViews/mobileIndex')
  },
  // 分类
  {
    path: '/mobileClassifyView',
    name: 'mobileClassifyView',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/mobileViews/mobileClassifyPage')
  },
  // 消息
  {
    path: '/mobileMesView',
    name: 'mobileMesView',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/mobileViews/mobileMesPage')
  },
  // 我的
  {
    path: '/mobileMyHomeView',
    name: 'mobileMyHomeView',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/mobileViews/mobileMyHomePage')
  },
  // 搜索结果页
  {
    path: '/mobileSearchResultView',
    name: 'mobileSearchResultView',
    component: () => import(/* webpackChunkName: "mobileIndexView" */ '@/views/mobileViews/mobileSearchResultView')
  }
]
