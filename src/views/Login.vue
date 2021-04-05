<template>
  <div>
    <h1>Login Page</h1>
    <button @click="login">{{ AppVm.isLogin ? "登出" : "登入" }}</button>
    <!-- <button @click="logout"></button> -->
  </div>
</template>

<script>
import Admin from "../views/Admin.vue";
export default {
  inject: ["AppVm"],
  methods: {
    login() {
      this.AppVm.isLogin = !this.AppVm.isLogin;
      if (this.AppVm.isLogin) {
        this.$router.addRoutes([
          {
            path: "/admin",
            name: "Admin",
            component: Admin,
          },
        ]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>