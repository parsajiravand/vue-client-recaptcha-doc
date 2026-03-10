# Accessibility

Custom ARIA labels and audio support for screen readers.

<script setup>
import { ref } from 'vue'

const a11yInput = ref('')
const a11yValid = ref(false)
</script>

<div class="demo-container">
  <input v-model="a11yInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="a11yInput"
    v-model:valid="a11yValid"
    refresh-label="Refresh the captcha code"
    canvas-label="Visual captcha code"
    :audio-enabled="true"
  />
  <p class="status" :class="{ valid: a11yValid }">Accessible with custom labels & audio</p>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const a11yInput = ref('')
const a11yValid = ref(false)
</script>

<template>
  <input v-model="a11yInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="a11yInput"
    v-model:valid="a11yValid"
    refresh-label="Refresh the captcha code"
    canvas-label="Visual captcha code"
    :audio-enabled="true"
  />
  <p :class="{ valid: a11yValid }">Accessible with custom labels & audio</p>
</template>
```
