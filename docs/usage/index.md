# Usage

vue-client-recaptcha is a Vue 3 component with **no external dependencies** that provides client-side captcha generation and validation. Focus on your app logic without dealing with external scripts or server-side captcha APIs.

## Dependencies

- **Required:** Vue.js >= 3.2 (peer dependency)

## Installation

### NPM

```bash
npm install vue-client-recaptcha --save
```

### YARN

```bash
yarn add vue-client-recaptcha
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue';
import { VueClientRecaptcha } from 'vue-client-recaptcha';

const inputValue = ref('');
const isValid = ref(false);
const captchaRef = ref(null);

const getCaptchaCode = (code) => console.log('Code:', code);
const checkValidCaptcha = (valid) => console.log('Valid:', valid);
</script>

<template>
  <div>
    <input v-model="inputValue" placeholder="Enter captcha" />
    <VueClientRecaptcha
      ref="captchaRef"
      v-model="inputValue"
      v-model:valid="isValid"
      @getCode="getCaptchaCode"
      @isValid="checkValidCaptcha"
    />
    <button @click="captchaRef?.resetCaptcha()">Reset</button>
  </div>
</template>
```

## v-model

- **`v-model`** – Binds user input for validation
- **`v-model:valid`** <span class="vcr-tag vcr-tag--v2">v2</span> – Binds validation state (boolean)

## Global Registration

```js
import { createApp } from 'vue'
import VueClientRecaptcha from 'vue-client-recaptcha'

const app = createApp(App)
app.component('VueClientRecaptcha', VueClientRecaptcha)
```

## Component Registration

```js
import { VueClientRecaptcha } from 'vue-client-recaptcha'

export default {
  components: {
    VueClientRecaptcha,
  },
}
```

## Options API Example

```vue
<template>
  <div>
    <input v-model="inputValue" placeholder="Enter captcha" />
    <VueClientRecaptcha
      :model-value="inputValue"
      @update:model-value="inputValue = $event"
      @getCode="getCaptchaCode"
      @isValid="checkValidCaptcha"
    />
  </div>
</template>

<script>
import VueClientRecaptcha from 'vue-client-recaptcha'

export default {
  components: { VueClientRecaptcha },
  data() {
    return { inputValue: '' }
  },
  methods: {
    getCaptchaCode(code) {
      console.log('Code:', code)
    },
    checkValidCaptcha(valid) {
      console.log('Valid:', valid)
    },
  },
}
</script>
```

## Compatibility

vue-client-recaptcha works with **Vue 3.2+**.

## Security Note

This is a **client-side captcha**. It provides light protection against casual bots but is not a substitute for server-side validation. Do not rely on it for high-security use cases. Use reCAPTCHA or similar server-verified solutions for strong protection.
