<template>
  <div id="app">
    <p>{{ value }}</p>
    <t-input v-model="value"></t-input>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TInput from "./components/Input.vue";

export default {
  name: "app",
  data() {
    return {
      value: "123",
    };
  },
  components: {
    TInput,
  },
  methods: {

  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
