Build simple recaptcha for vuejs without need server

vue-client-recaptcha is a vue based component with **no external depenendcies** which simplifies tab wizard management and allows you to focus on the functional part of your app rather than
wasting time on details. Just forget about id's, external scripts and jQuery dependencies


# Usage

## NPM
`npm install vue-client-recaptcha --save`
## YARN
`yarn add vue-client-recaptcha`

## Direct script include
Download the css and js files from `dist` folder or reference them directly from github (check jsfiddle links)
```html
<link rel="stylesheet" href="https://unpkg.com/vue-client-recaptcha/dist/style.css">
<script src="https://unpkg.com/vue-client-recaptcha"></script>
```
## Global registration
```js
import { createApp } from 'vue'
import VueClientRecaptcha from 'vue-client-recaptcha'

const app= createApp(App)
app.component("VueClientRecaptcha", VueClientRecaptcha);  
```

## Component registration
```js
import VueClientRecaptcha from 'vue-client-recaptcha'

<!--Optional style.css-->
import 'vue-client-recaptcha/dist/style.css';

export default {
  components: {
    VueClientRecaptcha,
  },
}
```
## Template usage

```html
<template>
  <div class="sample-captcha">
    <input type="text" v-model="inputValue" />

    <VueClientRecaptcha
      :value="inputValue"
      @getCode="getCaptchaCode"
      @isValid="checkValidCaptcha"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import VueClientRecaptcha from "vue-client-recaptcha";
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
<style>
@import url("/node_modules/vue-client-recaptcha/dist/style.css");
</style>
```
## Compatibility

vue-client-recaptcha works with Vue > 3.x