import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Car from '../views/Car.vue'
import CarChild1 from '../views/CarChild1.vue'



Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    redirect: '/home' //重定向的使用
  },
  {
    path: '/home',
    name: 'Home',
    components: {       //2.H 命名视图
      default:Home,     //默认视图显示的组件
      side:CarChild1    //命名视图显示的组件
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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    
    /* 2.I 导航守卫 << start */
    beforeEnter: (to, from, next) => {
      console.log("this is:路由独享守卫 before enter")
      next();
    }
    /* 2.I 导航守卫 >> end*/
  }
]

const router = new VueRouter({
  mode: "history", //路由若使用哈希（hash）的方式，是不利于网站的营销推广的（SEO），
                   //因此路由配置的时候建议用history的方式。
  routes
})


/* 2.I 导航守卫 << start */
router.beforeEach((to, from, next) => {
  console.log("\n\r\n\rthis is:全局守卫 before Each")
  next();
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