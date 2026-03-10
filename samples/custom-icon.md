# Custom Icon Slot

Replace the default refresh icon with a custom template. The `icon` slot accepts your own icon component (e.g. FontAwesome), SVG, or plain text. You can also change it via the `icon` prop when not using the slot.

<script setup>
import { ref } from 'vue'

const iconInput = ref('')
const iconValid = ref(false)
</script>

<div class="demo-container">
  <input v-model="iconInput" placeholder="Enter captcha" />
  <VueClientRecaptcha v-model="iconInput" v-model:valid="iconValid">
    <template #icon>
      <span style="color: var(--vcr-icon-color); font-weight: bold; cursor: pointer">↻ Custom</span>
    </template>
  </VueClientRecaptcha>
  <p class="status" :class="{ valid: iconValid }">Custom refresh icon</p>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const iconInput = ref('')
const iconValid = ref(false)
</script>

<template>
  <input v-model="iconInput" placeholder="Enter captcha" />
  <VueClientRecaptcha v-model="iconInput" v-model:valid="iconValid">
    <template #icon>
      <span style="color: var(--vcr-icon-color); font-weight: bold; cursor: pointer">↻ Custom</span>
    </template>
  </VueClientRecaptcha>
  <p :class="{ valid: iconValid }">Custom refresh icon</p>
</template>
```
