<template>
  <div class="sample-captcha">
    <input type="text" v-model="inputValue" />
    <!-- Hide Letters And Show NumbersOnly Without Lines -->
    <!-- Can Set Your Custom Icon Or Text With Slot -->
    <VueClientRecaptcha
      :value="inputValue"
      :count="4"
      chars="12345"
      :hideLines="true"
      custom-text-color="black"
      @getCode="getCaptchaCode"
      @isValid="checkValidCaptcha"
    >
      <template #icon>
       <span style="color:blue">with Custom Text Or Icon</span> 
        </template>
    </VueClientRecaptcha>
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