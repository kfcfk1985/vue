<template>
  <div id="app">
    <div id="nav">

      
    
      <!-- 导航的使用 -->
      <router-link to="/">Home</router-link> |

      <!-- 命名路由的使用 -->
      <router-link :to="{name:'About'}">About</router-link> | 

      <!-- 2.E 动态路由 -->
      <router-link :to="{name:'Book',params:{id:123}}">book</router-link> | 

      <!-- 2.F 参数属性传递 -->
      <router-link :to="`/car/${888}/child1`">car</router-link> 


      <p>
        <!-- 2.N 组件复用时的注意事项 -->
        <router-link :to="{name:`CourseDetail`,params:{name:'web'}}">course:web</router-link> | 
        <router-link :to="{name:`CourseDetail`,params:{name:'java'}}">course:java</router-link>
      </p>


      <p>
        <!-- 2.O 获取数据的时机：路由导航前 -->
        <router-link :to="{name:`BikeDetail`,params:{name:'yichi'}}">bike:yichi</router-link> | 
        <router-link :to="{name:`BikeDetail`,params:{name:'fenghuang'}}">bike:fenghuang</router-link>
      </p>
    </div>
      
      <!-- 2.P：动态路由 -->
       <p>
        <router-link :to="{name:`Login`}">Login</router-link> 
      </p>


      <p v-if="isLogin">
        <router-link :to="{name:`Admin`}">Admin</router-link> 
      </p>
     
     <!-- 2.Q:	使用keep-alive实现路由组件缓存 -->
     <keep-alive :include="['Car']">
       <router-view></router-view>
     </keep-alive>

     <!-- 2.H 命名视图 -->
     <router-view name="side"></router-view>

   
  </div>
</template>



<script>

export default{
  provide() {
    return {
      AppVm: this
    }
  },
  data() {
    return {
      isLogin: false
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
