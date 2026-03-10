# Form Integration

Integrate captcha with a form. Submit is disabled until captcha is valid.

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  email: '',
  password: '',
  captcha: ''
})
const formValid = ref(false)
const formCaptchaRef = ref(null)

function submitForm() {
  if (!formValid.value) {
    alert('Please complete the captcha')
    return
  }
  alert('Form submitted successfully!')
  form.email = ''
  form.password = ''
  form.captcha = ''
  formCaptchaRef?.resetCaptcha?.()
  formValid.value = false
}
</script>

<div class="demo-container">
  <form @submit.prevent="submitForm" class="form">
    <input v-model="form.email" type="email" placeholder="Email" required />
    <input v-model="form.password" type="password" placeholder="Password" required />
    <VueClientRecaptcha
      ref="formCaptchaRef"
      v-model="form.captcha"
      v-model:valid="formValid"
      chars-preset="numeric"
      :count="3"
    />
    <button type="submit" :disabled="!formValid">Submit Form</button>
  </form>
</div>

```vue
<script setup>
import { reactive, ref } from 'vue'
import { VueClientRecaptcha } from 'vue-client-recaptcha'
import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'

const form = reactive({
  email: '',
  password: '',
  captcha: ''
})
const formValid = ref(false)
const formCaptchaRef = ref(null)

function submitForm() {
  if (!formValid.value) {
    alert('Please complete the captcha')
    return
  }
  alert('Form submitted successfully!')
  form.email = ''
  form.password = ''
  form.captcha = ''
  formCaptchaRef?.resetCaptcha?.()
  formValid.value = false
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="form.email" type="email" placeholder="Email" required />
    <input v-model="form.password" type="password" placeholder="Password" required />
    <VueClientRecaptcha
      ref="formCaptchaRef"
      v-model="form.captcha"
      v-model:valid="formValid"
      chars-preset="numeric"
      :count="3"
    />
    <button type="submit" :disabled="!formValid">Submit Form</button>
  </form>
</template>
```
