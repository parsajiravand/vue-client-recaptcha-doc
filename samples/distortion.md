# Distortion Options

Control distortion with `none`, `lines`, `dots`, or `both`.

<script setup>
import { ref } from 'vue'

const distortionInput = ref('')
const distortionValid = ref(false)
const distortionType = ref('both')
</script>

<div class="demo-container">
  <div class="controls">
    <button @click="distortionType = 'none'">None</button>
    <button @click="distortionType = 'lines'">Lines</button>
    <button @click="distortionType = 'dots'">Dots</button>
    <button @click="distortionType = 'both'">Both</button>
  </div>
  <input v-model="distortionInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="distortionInput"
    v-model:valid="distortionValid"
    :distortion="distortionType"
    :noise-dots="distortionType === 'dots' || distortionType === 'both' ? 15 : 0"
    :noise-lines="distortionType === 'lines' || distortionType === 'both' ? 3 : -1"
  />
  <p class="status" :class="{ valid: distortionValid }">Distortion: {{ distortionType }}</p>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const distortionInput = ref('')
const distortionValid = ref(false)
const distortionType = ref('both')
</script>

<template>
  <div class="controls">
    <button @click="distortionType = 'none'">None</button>
    <button @click="distortionType = 'lines'">Lines</button>
    <button @click="distortionType = 'dots'">Dots</button>
    <button @click="distortionType = 'both'">Both</button>
  </div>
  <input v-model="distortionInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="distortionInput"
    v-model:valid="distortionValid"
    :distortion="distortionType"
    :noise-dots="distortionType === 'dots' || distortionType === 'both' ? 15 : 0"
    :noise-lines="distortionType === 'lines' || distortionType === 'both' ? 3 : -1"
  />
  <p :class="{ valid: distortionValid }">Distortion: {{ distortionType }}</p>
</template>
```
