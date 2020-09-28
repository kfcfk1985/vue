


<template>
  <form>
    <slot> </slot>
  </form>
</template>

<script>
export default {
  provide(){      //注意：这里不能用箭头函数，将没法找到 this 对象
    return {
      TForm: this,
    };
  },
  props: {
    model: {
      default: () => {
        return {
          userName: "ldf",
          passWord: "123",
        };
      },
      type: Object,
      required:true
    },
    rules: {
      default: () => {
        return {
          userName: [{ type: "string", required: true }],
          passWord: [{ type: "string", required: true }],
        };
      },
      type: Object,
    },
  },
};
</script>

<style>
</style>