<template>
  <div>
    <h1>detail:{{ name }}</h1>
    <h2>{{ post.msg }}</h2>
  </div>
</template>

<script>
function getPost(name, cb) {
  cb({
    msg: `name is ${name}`,
  });
}

export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      post: {
        msg: "",
      },
    };
  },
  // 组件未渲染，通过给next传递回调访问组件实例
  beforeRouteEnter(to, from, next) {
    getPost(to.params.name, (post) => {
      next((vm) => vm.$set(vm, "post", post))
    });
  },
  // 组件已渲染，可以访问this直接赋值
  beforeRouteUpdate(to, from, next) {
    this.post = null;
    getPost(to.params.name, (post) => {
      this.$set(this, "post", post);
      next();
    });
  },
};
</script>

<style>
</style>