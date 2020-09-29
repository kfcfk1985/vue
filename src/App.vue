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
      <router-link :to="{name:'Car',params:{id:888}}">car</router-link>
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
