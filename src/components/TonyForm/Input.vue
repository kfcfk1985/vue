
<template>
  <input :type="type" :value="value" @input="onInput" :style="styleObj" />
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
      this.$parent.$emit("validator");
    },
  },
  computed: {
    styleObj() {
      if (this.$parent.errorStatus == true) {
        return {
          border: "1px solid red",
        };
      } else {
        return {
          // border: "none",
        };
      }
    },
  },
};
</script>

<style>
</style>

