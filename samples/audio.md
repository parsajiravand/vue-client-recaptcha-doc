# Audio Support

Enable audio playback of the captcha code for screen readers. Click refresh to hear the code.

<script setup>
import { ref } from 'vue'

const audioInput = ref('')
const audioValid = ref(false)
</script>

<div class="demo-container">
  <input v-model="audioInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="audioInput"
    v-model:valid="audioValid"
    :audio-enabled="true"
  />
  <p class="status" :class="{ valid: audioValid }">Audio enabled (click refresh to hear)</p>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const audioInput = ref('')
const audioValid = ref(false)
</script>

<template>
  <input v-model="audioInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="audioInput"
    v-model:valid="audioValid"
    :audio-enabled="true"
  />
  <p :class="{ valid: audioValid }">Audio enabled (click refresh to hear)</p>
</template>
```
