<template>
  <h1>detail:{{ name }}</h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {         //为了提高组件的效率，所以会复用组件，导致声明周期不会重复执行。因此要用watch
        console.log(`watch:获取${this.name} 数据`);
      },
    },
  },
};
</script>

<style>
</style>