# VueClientRecaptcha

Canvas-based captcha component for Vue 3. Renders a random code with optional distortion and provides validation via v-model.

## Overview

`VueClientRecaptcha` generates a random captcha code, displays it on a canvas, and validates user input. It supports themes, character presets, distortion options, and accessibility features.

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'

const input = ref('')
const valid = ref(false)
</script>

<template>
  <input v-model="input" placeholder="Enter captcha" />
  <VueClientRecaptcha v-model="input" v-model:valid="valid" />
</template>
```

## Props Summary

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| null` | `""` | User input (v-model) |
| `charsPreset` | `"alphanumeric" \| "numeric" \| "letters" \| "custom"` | `"alphanumeric"` | Character preset |
| `count` | `number` | `5` | Number of characters |
| `theme` | `"auto" \| "light" \| "dark"` | `"light"` | Theme mode |
| `distortion` | `"none" \| "lines" \| "dots" \| "both"` | `"lines"` | Distortion type |
| `simpleMode` | `boolean` | `false` | Clean straight-line text |

See [Props API](/api/props) for the full list.

## Events Summary

| Event | Payload | Description |
|-------|---------|-------------|
| `isValid` | `boolean` | Validation state changed |
| `getCode` | `string` | Captcha code on generate/refresh |
| `refresh` | `string` | Captcha regenerated |
| `ready` | – | Canvas ready |
| `error` | `unknown` | Canvas/context error |

See [Events API](/api/events) for details.

## Slots

| Slot | Description |
|------|-------------|
| `icon` | Custom template for the refresh icon. Use your own icon component (e.g. FontAwesome), SVG, or plain text (e.g. "↻ Refresh"). When not used, the default is a refresh-style icon. You can also change it via the `icon` prop. See [Slots API](/api/slots) for examples. |

## Exposed Methods

| Method | Description |
|--------|-------------|
| `resetCaptcha()` | Regenerates the captcha |

## Example with custom icon

```vue
<VueClientRecaptcha v-model="input" v-model:valid="valid">
  <template #icon>
    <span>↻ Refresh</span>
  </template>
</VueClientRecaptcha>
```
