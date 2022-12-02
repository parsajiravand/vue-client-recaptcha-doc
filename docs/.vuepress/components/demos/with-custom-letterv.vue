<template>
  <div class="sample-captcha">
    <input type="text" v-model="inputValue" />
    <!-- Hide CapitalCase And Number And Set Custom Carachters -->
    <!-- Set 10 Charachter -->
    <VueClientRecaptcha
      :value="inputValue"
      chars="!@#$%^&*"
      :count="10"
      @getCode="getCaptchaCode"
      @isValid="checkValidCaptcha"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import VueClientRecaptcha from "vue-client-recaptcha";
import "vue-client-recaptcha/dist/style.css";
export default {
  components: {
    VueClientRecaptcha,
  },
  setup() {
    /* pass value to captcha  */
    const inputValue = ref(null);

    const getCaptchaCode = (value) => {
      /* you can access captcha code */
      console.log(value);
    };
    const checkValidCaptcha = (value) => {
      /* expected return boolean if your value and captcha code are same return True otherwise return False */
      console.log(value);
    };
    return {
      inputValue,
      getCaptchaCode,
      checkValidCaptcha,
    };
  },
};
</script>