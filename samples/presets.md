# Character Presets

Use different character presets: numeric (digits only), letters, or alphanumeric.

<script setup>
import { ref } from 'vue'

const presetInput = ref('')
const presetValid = ref(false)
const presetCaptchaRef = ref(null)
</script>

<div class="demo-container">
  <input v-model="presetInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    ref="presetCaptchaRef"
    v-model="presetInput"
    v-model:valid="presetValid"
    chars-preset="numeric"
    :count="4"
  />
  <p class="status" :class="{ valid: presetValid }">{{ presetValid ? '✓ Valid (numeric)' : 'Enter 4-digit code' }}</p>
  <button @click="presetCaptchaRef?.resetCaptcha?.()">Reset</button>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const presetInput = ref('')
const presetValid = ref(false)
const presetCaptchaRef = ref(null)
</script>

<template>
  <input v-model="presetInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    ref="presetCaptchaRef"
    v-model="presetInput"
    v-model:valid="presetValid"
    chars-preset="numeric"
    :count="4"
  />
  <p :class="{ valid: presetValid }">{{ presetValid ? '✓ Valid' : 'Enter 4-digit code' }}</p>
  <button @click="presetCaptchaRef?.resetCaptcha?.()">Reset</button>
</template>
```
