<template>
 <div>
      <p>this is car page for id : {{id}}</p>

      <!-- 2.G 路由嵌套 -->
      <router-view></router-view>    

 </div>
</template>

<script>
export default {
     name:'Car',
     props:['id'],       //2.F 参数属性传递
     data() {
          return {
             
          }
     },    
     created(){
        console.log('Car page created');
     },
     activated(){
           console.log('Car page activated');
     },
     deactivated(){
           console.log('Car page deactivated');
     }
}
</script>

<style>

</style>