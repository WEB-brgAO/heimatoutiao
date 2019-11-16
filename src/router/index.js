import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import add from '../components/home/gn/add.vue'
import pinglun from '../components/home/gn/pinglun.vue'
import login from '../components/login.vue'
import liebiao from '../components/home/gn/liebai.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },

  {
    path: '/home',
    component: home,
    children: [
      {
        path: '',
        component: liebiao
      },
      {
        path: '/liebiao',
        component: liebiao
      },
      {
        path: '/add',
        component: add
      },
      {
        path: '/pinglun',
        component: pinglun
      }
    ]

  }
  // 按需加载
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // 箭头函数是 按需加载了意思
  //   component: () =>
  //       import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})
// 使用路由拦截器
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') {
    next()
    return
  }
  // 第一个参数 to 去哪里
  // 第二个参数是来自哪里
  // 第三个是一个方法 他是放行路由的
  const token = window.localStorage.getItem('toutiao')
  if (token) {
    next()
  } else {
    // console.log('没密码')

    next('/login')
    NProgress.done()
  }
})
// 路由导航结束后执行的钩子函数
router.afterEach((to, from) => {
  console.log('afterEach 导航完成')
  // 结束顶部的导航进度条
  NProgress.done()
})

export default router
