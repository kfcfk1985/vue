<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  /* 2.I 导航守卫 << start */
  beforeRouteEnter (to, from, next) {
    console.log("this is:组件内的守卫 before route enter")
    next();
  },
  beforeUpdate(to, from, next) {
    console.log("this is:组件内的守卫 before update")
    next();
  },
    beforeRouteLeave (to, from, next) {
    console.log("this is:组件内的守卫 before route leave")
    next();
  },
  /* 2.I 导航守卫 >> end*/
}
</script>

<style>

</style>