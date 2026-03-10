---
layout: home

hero:
  name: Vue Client Recaptcha
  text: Simple captcha for Vue.js
  tagline: Build client-side captcha without server. Lightweight, customizable, accessible.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View Samples
      link: /samples/
    - theme: alt
      text: Playground
      link: /playground/

features:
  - icon: 🎨
    title: Customizable
    details: Character presets, themes, distortion, custom colors, and CSS variables for full control.
  - icon: ♿
    title: Accessible
    details: ARIA labels, screen reader support, and optional audio playback for the captcha code.
  - icon: 📦
    title: Zero Server
    details: Pure client-side implementation. No external API calls or server validation required.
  - icon: 🧩
    title: Composable
    details: useCaptcha composable for building custom captcha UIs or integrating with existing forms.
---

## Quick Install

```bash
npm install vue-client-recaptcha --save
```

```bash
pnpm add vue-client-recaptcha
```

```bash
yarn add vue-client-recaptcha
```

## Quick Example

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'

const inputValue = ref('')
const isValid = ref(false)
</script>

<template>
  <input v-model="inputValue" placeholder="Enter captcha" />
  <VueClientRecaptcha
    v-model="inputValue"
    v-model:valid="isValid"
  />
  <p>{{ isValid ? '✓ Valid' : 'Enter captcha' }}</p>
</template>
```

## Security Note

This is a **client-side captcha**. It provides light protection against casual bots but is not a substitute for server-side validation. Do not rely on it for high-security use cases.
