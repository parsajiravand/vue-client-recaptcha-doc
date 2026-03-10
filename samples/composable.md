# useCaptcha Composable

Use the composable without the component for custom UIs. The code is shown for demo purposes; in production you would display it differently (e.g. canvas, image).

<script setup>
import { ref } from 'vue'
import { useCaptcha } from 'vue-client-recaptcha'

const { code: composableCode, generate: generateCaptcha, validate: validateCaptcha, reset: resetCaptcha } = useCaptcha({
  charsPreset: 'numeric',
  count: 4
})

generateCaptcha()

const composableInput = ref('')
const composableMessage = ref('')

function checkComposable() {
  if (validateCaptcha(composableInput.value)) {
    composableMessage.value = '✓ Correct!'
  } else {
    composableMessage.value = '✗ Try again'
    generateCaptcha()
  }
}
</script>

<div class="demo-container">
  <input v-model="composableInput" placeholder="0000" maxlength="4" />
  <button @click="checkComposable">Validate</button>
  <button @click="resetCaptcha">New Code</button>
  <p class="message" :class="{ success: composableMessage.includes('✓'), error: composableMessage.includes('✗') }">
    {{ composableMessage || 'Enter the 4-digit code shown above' }}
  </p>
  <p><small>Code for demo: <strong>{{ composableCode }}</strong></small></p>
</div>

```vue
<script setup>
import { ref } from 'vue'
import { useCaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const { code, generate, validate, reset } = useCaptcha({
  charsPreset: 'numeric',
  count: 4
})

generate() // Generate initial code

const input = ref('')
const message = ref('')

function check() {
  if (validate(input.value)) {
    message.value = '✓ Correct!'
  } else {
    message.value = '✗ Try again'
    generate()
  }
}
</script>

<template>
  <input v-model="input" placeholder="0000" maxlength="4" />
  <button @click="check">Validate</button>
  <button @click="reset">New Code</button>
  <p>{{ message }}</p>
</template>
```
