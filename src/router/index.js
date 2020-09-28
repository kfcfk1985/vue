import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',      
    redirect:'/home'    //重定向的使用
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',     
    name: 'About',    //命名路由
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode:"history",//路由若使用哈希（hash）的方式，是不利于网站的营销推广的（ICU），
                 //因此路由配置的时候建议用history的方式。
  routes
})

export default router
