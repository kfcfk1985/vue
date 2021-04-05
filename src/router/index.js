import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Car from '../views/Car.vue'

import CarChild1 from '../views/CarChild1.vue'

import Course from '../views/Course.vue'
import CourseDetail from '../views/CourseDetail.vue'

import Bike from '../views/Bike.vue'
import BikeDetail from '../views/BikeDetail.vue'

import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [,
  {
    //2.L 通配符：适合做404页面路由
    path: '*',
    component: () => import('../views/404.vue')
  },
  {
    path: '/',
    name: 'index',
    redirect: '/home' //重定向的使用
  },
  {
    path: '/home',
    name: 'Home',
    components: { //2.H 命名视图
      default: Home, //默认视图显示的组件
      side: CarChild1 //命名视图显示的组件
    }
  },
  {
    path: '/book/:id', //2.E 动态路由
    name: 'Book',
    component: Book
  },
  {
    path: '/car/:id',
    props: true, //2.F 参数属性传递
    name: 'Car',
    component: Car,

    // 2.G 路由嵌套
    children: [{
      path: 'child1',
      component: CarChild1
    }]
  },
  {
    path: '/about',
    name: 'About', //命名路由
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 2.K 异步组件，可以实现按需加载，webpack会单独打包，这是提高性能速度的一种方法。
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),

    /* 2.I 导航守卫 << start */
    beforeEnter: (to, from, next) => {
      console.log("this is:路由独享守卫 before enter")
      next();
    }
    /* 2.I 导航守卫 >> end*/
  },

  //2.N 组件复用时的注意事项
  {
    path: '/course',
    name: 'Course',
    component: Course,
    children: [{
      path: 'detail/:name',
      props: true,
      component: CourseDetail,
      name: "CourseDetail" //使用name，更便捷（不用写长的路径
    }]
  },
  //2.O 获取数据的时机：路由导航前
  {
    path: '/bike',
    name: 'Bike',
    component: Bike,
    children: [{
      path: 'bike/:name',
      props: true,
      component: BikeDetail,
      name: "BikeDetail" //使用name，更便捷（不用写长的路径
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,

  },
]

const router = new VueRouter({
  mode: "history", //路由若使用哈希（hash）的方式，是不利于网站的营销推广的（SEO），
  //因此路由配置的时候建议用history的方式。
  routes
})


/* 2.I 导航守卫 << start */
router.beforeEach((to, from, next) => {
  console.log("\n\r\n\rthis is:全局守卫 before Each")

  next() 

})
router.beforeResolve((to, from, next) => {
  console.log("this is:全局守卫 before resolve")
  next();
})
router.afterEach((to, from) => {
  console.log("this is:全局守卫 after each")

})
/* 2.I 导航守卫 >> end*/



export default router