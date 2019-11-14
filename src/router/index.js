import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import login from '../components/login.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/login'
  // },
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: home
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

export default router
