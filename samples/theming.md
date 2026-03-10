# Theming

Switch between light, dark, and auto (system preference) themes.

<script setup>
import { ref } from 'vue'

const themeInput = ref('')
const themeValid = ref(false)
const currentTheme = ref('light')
</script>

<div class="demo-container">
  <div class="controls">
    <button @click="currentTheme = 'light'">Light</button>
    <button @click="currentTheme = 'dark'">Dark</button>
    <button @click="currentTheme = 'auto'">Auto</button>
  </div>
  <input v-model="themeInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="themeInput"
    v-model:valid="themeValid"
    :theme="currentTheme"
  />
  <p class="status" :class="{ valid: themeValid }">Theme: {{ currentTheme }}</p>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'

const themeInput = ref('')
const themeValid = ref(false)
const currentTheme = ref('light')
</script>

<template>
  <div class="controls">
    <button @click="currentTheme = 'light'">Light</button>
    <button @click="currentTheme = 'dark'">Dark</button>
    <button @click="currentTheme = 'auto'">Auto</button>
  </div>
  <input v-model="themeInput" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="themeInput"
    v-model:valid="themeValid"
    :theme="currentTheme"
  />
  <p :class="{ valid: themeValid }">Theme: {{ currentTheme }}</p>
</template>
```
