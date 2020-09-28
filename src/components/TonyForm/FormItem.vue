


<template>
  <div>
    <label for="">{{ label }}</label>
    <slot> </slot>

    <p v-if="errorStatus" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  inject: ["TForm"],        //问：为什么这里用 provide /inject 的形式，而不用$parent的形式？
                            //答：因为有可能手贱，多包了一层
  props: ["label", "prop"],
  data() {
    return {
      errorMessage: "",
      errorStatus: false,
    };
  },

  mounted() {
    this.$on("validator", this.doValidator);
  },
  methods: {
    doValidator() {
      console.log("i am goning to do the validator");

      //有两个input!  一个用户名 一个密码
      const rules = this.TForm.rules[this.prop];
      const value = this.TForm.model[this.prop];

      // 描述对象
      const descriptor = { [this.prop]: rules };
      console.log("descriptor", descriptor);

      const schema = new Schema(descriptor);
      schema.validate({ [this.prop]: value }, (errors, fields) => {
        console.log("errors", errors);
        console.log("fields", fields);

        if (errors) {
          this.errorMessage = errors[0].message;
          this.errorStatus = true;
        } else {
          this.errorMessage = "";
          this.errorStatus = false;
        }
      });
    },
  },
};
</script>

<style>
</style>
