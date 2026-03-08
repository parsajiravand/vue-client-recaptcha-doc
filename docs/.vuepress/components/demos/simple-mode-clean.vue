<template>
  <div class="sample-captcha">
    <div>
      <input v-model="inputValue" placeholder="Enter the code" class="input" type="text" />
      <VueClientRecaptcha
        v-model="inputValue"
        v-model:valid="isValid"
        :simple-mode="true"
        :count="6"
        theme="auto"
      />
      <p v-if="isValid" class="correct">✓ Correct!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueClientRecaptcha from 'vue-client-recaptcha'

const inputValue = ref('')
const isValid = ref(false)
</script>

<style scoped>
.sample-captcha {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.input {
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-right: 8px;
  min-width: 120px;
}
.correct {
  margin-top: 8px;
  color: #3eaf7c;
  font-weight: 600;
}
</style>
