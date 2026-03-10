# Simple Mode

Clean, straight-line text with single color. No rotation or distortion.

<script setup>
import { ref } from 'vue'

const simpleInput = ref('')
const simpleValid = ref(false)
</script>

<div class="demo-container">
  <input v-model="simpleInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="simpleInput"
    v-model:valid="simpleValid"
    :simple-mode="true"
    :count="6"
  />
  <p class="status" :class="{ valid: simpleValid }">Clean, straight-line text (adapts to theme)</p>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'

const simpleInput = ref('')
const simpleValid = ref(false)
</script>

<template>
  <input v-model="simpleInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="simpleInput"
    v-model:valid="simpleValid"
    :simple-mode="true"
    :count="6"
  />
  <p :class="{ valid: simpleValid }">Clean, straight-line text</p>
</template>
```
