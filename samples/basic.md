# Basic Example

Basic v-model usage with validation state and reset button.

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
const isValid = ref(false)
const captchaRef = ref(null)
</script>

<div class="demo-container">
  <input v-model="inputValue" placeholder="Enter captcha" />
  <VueClientRecaptcha
    ref="captchaRef"
    v-model="inputValue"
    v-model:valid="isValid"
  />
  <p class="status" :class="{ valid: isValid }">{{ isValid ? '✓ Valid' : 'Enter captcha' }}</p>
  <button @click="captchaRef?.resetCaptcha?.()">Reset</button>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const inputValue = ref('')
const isValid = ref(false)
const captchaRef = ref(null)
</script>

<template>
  <input v-model="inputValue" placeholder="Enter captcha" />
  <VueClientRecaptcha
    ref="captchaRef"
    v-model="inputValue"
    v-model:valid="isValid"
  />
  <p :class="{ valid: isValid }">{{ isValid ? '✓ Valid' : 'Enter captcha' }}</p>
  <button @click="captchaRef?.resetCaptcha?.()">Reset</button>
</template>
```
