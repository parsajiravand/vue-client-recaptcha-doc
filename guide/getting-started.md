# Getting Started

## Installation

Install the package with your preferred package manager:

```bash
npm install vue-client-recaptcha --save
```

```bash
pnpm add vue-client-recaptcha
```

```bash
yarn add vue-client-recaptcha
```

## Dependencies

- **Vue.js** >= 3.2 (peer dependency)

Ensure Vue 3.2 or higher is installed in your project.

## Basic Usage

### 1. Import the component

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'

const inputValue = ref('')
const isValid = ref(false)
</script>
```

### 2. Use in template

```vue
<template>
  <div>
    <input v-model="inputValue" placeholder="Enter captcha" />
    <VueClientRecaptcha
      v-model="inputValue"
      v-model:valid="isValid"
    />
    <p>{{ isValid ? '✓ Valid' : 'Enter captcha' }}</p>
  </div>
</template>
```

### v-model bindings

- **`v-model`** – Binds the user's input (the text they type to match the captcha)
- **`v-model:valid`** – Binds the validation state (`true` when input matches the captcha code)

### Reset captcha

Use a template ref to call `resetCaptcha()` when the user needs a new code:

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'

const inputValue = ref('')
const isValid = ref(false)
const captchaRef = ref(null)
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

## Next Steps

- Explore [Props](/api/props) and [Events](/api/events) for full customization
- Check out [Samples](/samples/) for real-world examples
- Try the [Playground](/playground/) to experiment interactively
