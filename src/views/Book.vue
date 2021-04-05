<template>
 <div>
      this is book page for id : {{id}}
 </div>
</template>

<script>
export default {
     name:"Book",
     data() {
          return {
               id:null
          }
     },    
     created(){
          // 2.E 动态路由
          console.log("this.$route",this.$route)
          this.id = this.$route.params.id;

           console.log('Book page created');
     }
}
</script>

<style>

</style>