
<template>
  <input :type="type" :value="value" @input="onInput" />
</template>

<script>
export default {
  name: "Tnput",
  props: {
    value: {
      default: "",
      type: String,
    },
    type: {
      default: "text",
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    onInput(e) {
      console.log("你输入了:", e);
      let value = e.target.value;
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>

