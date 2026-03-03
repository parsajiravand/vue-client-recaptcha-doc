# Methods

By using [refs](https://vuejs.org/guide/essentials/template-refs.html) on the `VueClientRecaptcha` component, you can access the following exposed method:

## resetCaptcha

Regenerates the captcha. Clears the canvas and generates a new code.

```vue
<script setup>
import { ref } from 'vue';
import { VueClientRecaptcha } from 'vue-client-recaptcha';

const captchaRef = ref(null);

function handleReset() {
  captchaRef.value?.resetCaptcha();
}
</script>

<template>
  <VueClientRecaptcha ref="captchaRef" v-model="inputValue" />
  <button @click="handleReset">Reset captcha</button>
</template>
```
