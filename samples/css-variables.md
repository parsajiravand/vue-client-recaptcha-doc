# CSS Variables

Override styles with CSS variables. Apply a custom class to the component and set variables.

<script setup>
import { ref } from 'vue'

const cssInput = ref('')
const cssValid = ref(false)
</script>

<div class="demo-container">
  <input v-model="cssInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="cssInput"
    v-model:valid="cssValid"
    class="custom-themed"
  >
    <template #icon>
      <span style="color: var(--vcr-icon-color); font-weight: bold">↻ Themed</span>
    </template>
  </VueClientRecaptcha>
  <p class="status" :class="{ valid: cssValid }">Custom CSS variables applied</p>
</div>

The `custom-themed` class is defined in the theme and sets: `--vcr-bg`, `--vcr-icon-color`, `--vcr-radius`, `--vcr-padding`.

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const input = ref('')
const valid = ref(false)
</script>

<template>
  <VueClientRecaptcha v-model="input" v-model:valid="valid" class="custom-themed">
    <template #icon>
      <span style="color: var(--vcr-icon-color); font-weight: bold">↻ Themed</span>
    </template>
  </VueClientRecaptcha>
</template>

<style>
.custom-themed {
  --vcr-bg: #f0f8ff;
  --vcr-icon-color: #ff6b35;
  --vcr-radius: 12px;
  --vcr-padding: 14px;
}
</style>
```
