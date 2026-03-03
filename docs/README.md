---
home: true
title: Vue Client Recaptcha | Home
heroImage: https://i.postimg.cc/CM6ZjS2F/vue-client-recaptcha.png
heroText: Vue Client Recaptcha
tagline: Build simple recaptcha for Vue.js without need for a server.
actions:
  - text: Get Started
    link: /usage/
    type: primary
  - text: Migration (v1 → v2)
    link: /migration/
    type: secondary
features:
  - title: Simplicity First
    details: Minimal setup with v-model support. No external scripts or server required.
  - title: Vue 3
    details: Built for Vue 3.2+ with Composition API, v-model, and useCaptcha composable.
  - title: Highly Customizable
    details: Themes (light/dark/auto), distortion types, character presets, and CSS variables.
  - title: Accessible
    details: A11y labels, optional audio for screen readers, and proper ARIA attributes.
  - title: Composable
    details: useCaptcha composable for custom UIs or headless usage.
  - title: Zero Dependencies
    details: Only Vue as a peer dependency. No external runtime deps.
footer: MIT Licensed | Copyright © 2022-present Parsa Jiravand
---

## Dependencies

- **Required:** Vue.js >= 3.2 (peer dependency)

## Installation

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add vue-client-recaptcha
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
npm install vue-client-recaptcha
```

  </CodeGroupItem>
</CodeGroup>

## Quick Example

```vue
<script setup>
import { ref } from 'vue';
import { VueClientRecaptcha } from 'vue-client-recaptcha';

const inputValue = ref('');
const isValid = ref(false);
const captchaRef = ref(null);
</script>

<template>
  <input v-model="inputValue" placeholder="Enter captcha" />
  <VueClientRecaptcha
    ref="captchaRef"
    v-model="inputValue"
    v-model:valid="isValid"
  />
  <button @click="captchaRef?.resetCaptcha()">Reset</button>
</template>
```
