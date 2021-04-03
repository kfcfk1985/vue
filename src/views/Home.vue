<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

     <!-- 2.M 编程路由 -->
    <div>
      <button @click="goToBook">编程路由的方式跳转</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },methods: {
    //  2.M 编程路由 
    goToBook() {
      this.$router.push({
        name:"Book",
        params:{
          id:123
        }
      })
    }
  },
}
</script>
