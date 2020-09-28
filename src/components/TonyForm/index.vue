<template>
  <div>
    <h3>tony 封装的 组件 1</h3>

    <t-form :model="model" :rules="rules">
      <t-form-item label="用户名" prop="userName">
        <t-input v-model="model.userName"></t-input>
      </t-form-item>

       <t-form-item label="密码" prop="passWord">
        <t-input v-model="model.passWord"></t-input>
      </t-form-item>
    </t-form>
  </div>
</template>

<script>
import TForm from "./Form.vue";
import TFormItem from "./FormItem.vue";
import TInput from "./Input.vue";
export default {
  components: {
    TForm,
    TFormItem,
    TInput,
  },
  data() {
    return {
      model: {
        userName: "ldf",
        passWord: "123",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名" },
          { min: 6, max: 10, message: "请输入6~10的用户名" },
        ],
        passWord: [{ required: true, message: "请输入密码" }],
      },
    };
  },
};
</script>

<style>
</style>