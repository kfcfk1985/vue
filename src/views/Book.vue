<template>
 <div>
      this is book page for id : {{id}}
 </div>
</template>

<script>
export default {
     data() {
          return {
               id:null
          }
     },    
     created(){
          // 2.E 动态路由
          console.log("this.$route",this.$route)
          this.id = this.$route.params.id;
     }
}
</script>

<style>

</style>