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

    </div>

     
     <router-view></router-view>

     <!-- 2.H 命名视图 -->
     <router-view name="side"></router-view>

   
  </div>
</template>

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
