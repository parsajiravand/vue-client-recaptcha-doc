<script setup lang="ts">
import VueClientRecaptcha from "vue-client-recaptcha";
import { ref, reactive } from "vue";

// Basic v-model example
const inputValue = ref("");
const isValid = ref(false);
const captchaRef = ref<any>(null);

// Chars preset example
const presetInput = ref("");
const presetValid = ref(false);
const presetCaptchaRef = ref<any>(null);

// Theme example
const themeInput = ref("");
const themeValid = ref(false);
const currentTheme = ref<"light" | "dark" | "auto">("light");

// Distortion example
const distortionInput = ref("");
const distortionValid = ref(false);
const distortionType = ref<"none" | "lines" | "dots" | "both">("both");

// Accessibility example
const a11yInput = ref("");
const a11yValid = ref(false);

// Custom icon example
const customIconInput = ref("");
const customIconValid = ref(false);

// Audio example
const audioInput = ref("");
const audioValid = ref(false);

// Simple mode example
const simpleInput = ref("");
const simpleValid = ref(false);

// CSS variables example
const cssVarsInput = ref("");
const cssVarsValid = ref(false);

// Form integration example
const form = reactive({
  email: '',
  password: '',
  captcha: ''
});
const formValid = ref(false);
const formCaptchaRef = ref<any>(null);

const submitForm = () => {
  if (!formValid.value) {
    alert('Please complete the captcha');
    return;
  }
  alert('Form submitted successfully!');
  form.email = '';
  form.password = '';
  form.captcha = '';
  formCaptchaRef?.resetCaptcha?.();
  formValid.value = false;
};

// Event handlers
const getCaptchaCode = (code: string) => console.log("Code:", code);
const checkValidCaptcha = (valid: boolean) => console.log("Valid:", valid);
</script>

<template>
  <div class="app">
    <h1>Vue Client Recaptcha v2 Examples</h1>

    <!-- Basic v-model -->
    <section class="example">
      <h2>1. Basic v-model</h2>
      <input v-model="inputValue" placeholder="Enter captcha" />
      <VueClientRecaptcha
        ref="captchaRef"
        v-model="inputValue"
        v-model:valid="isValid"
        @getCode="getCaptchaCode"
        @isValid="checkValidCaptcha"
      />
      <p class="status" :class="{ valid: isValid }">{{ isValid ? '✓ Valid' : 'Enter captcha' }}</p>
      <button @click="captchaRef?.resetCaptcha?.()">Reset</button>

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;input v-model="inputValue" placeholder="Enter captcha" /&gt;
  &lt;VueClientRecaptcha
    ref="captchaRef"
    v-model="inputValue"
    v-model:valid="isValid"
    @getCode="getCaptchaCode"
    @isValid="checkValidCaptcha"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const inputValue = ref('')
const isValid = ref(false)
const captchaRef = ref(null)
&lt;/script&gt;</code></pre>
      </details>
    </section>

    <!-- Chars presets -->
    <section class="example">
      <h2>2. Character Presets</h2>
      <input v-model="presetInput" placeholder="Enter captcha" />
      <VueClientRecaptcha
        ref="presetCaptchaRef"
        v-model="presetInput"
        v-model:valid="presetValid"
        chars-preset="numeric"
        :count="4"
      />
      <p class="status" :class="{ valid: presetValid }">{{ presetValid ? '✓ Valid (numeric)' : 'Enter 4-digit code' }}</p>
      <button @click="presetCaptchaRef?.resetCaptcha?.()">Reset</button>

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;VueClientRecaptcha
    v-model="inputValue"
    v-model:valid="isValid"
    chars-preset="numeric"
    :count="4"
  /&gt;
&lt;/template&gt;</code></pre>
      </details>
    </section>

    <!-- Theming -->
    <section class="example">
      <h2>3. Theming</h2>
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

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;VueClientRecaptcha
    v-model="inputValue"
    v-model:valid="isValid"
    :theme="currentTheme"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const currentTheme = ref('light') // 'light' | 'dark' | 'auto'
&lt;/script&gt;</code></pre>
      </details>
    </section>

    <!-- Distortion options -->
    <section class="example">
      <h2>4. Distortion Options</h2>
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

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;VueClientRecaptcha
    v-model="inputValue"
    v-model:valid="isValid"
    :distortion="distortionType"
    :noise-dots="noiseDots"
    :noise-lines="noiseLines"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const distortionType = ref('both') // 'none' | 'lines' | 'dots' | 'both'
const noiseDots = ref(15)
const noiseLines = ref(3)
&lt;/script&gt;</code></pre>
      </details>
    </section>

    <!-- Accessibility -->
    <section class="example">
      <h2>5. Accessibility (A11y)</h2>
      <input v-model="a11yInput" placeholder="Enter captcha" />
      <VueClientRecaptcha
        v-model="a11yInput"
        v-model:valid="a11yValid"
        refresh-label="Refresh the captcha code"
        canvas-label="Visual captcha code"
        :audio-enabled="true"
      />
      <p class="status" :class="{ valid: a11yValid }">Accessible with custom labels & audio</p>

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;VueClientRecaptcha
    v-model="inputValue"
    v-model:valid="isValid"
    refresh-label="Refresh the captcha code"
    canvas-label="Visual captcha code"
    :audio-enabled="true"
  /&gt;
&lt;/template&gt;</code></pre>
      </details>
    </section>

    <!-- Custom icon -->
    <section class="example">
      <h2>6. Custom Icon Slot</h2>
      <input v-model="customIconInput" placeholder="Enter captcha" />
      <VueClientRecaptcha v-model="customIconInput" v-model:valid="customIconValid">
        <template #icon>
          <span style="color: blue; font-weight: bold; cursor: pointer">↻ Custom</span>
        </template>
      </VueClientRecaptcha>
      <p class="status" :class="{ valid: customIconValid }">Custom refresh icon</p>

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;VueClientRecaptcha v-model="inputValue" v-model:valid="isValid"&gt;
    &lt;template #icon&gt;
      &lt;span style="color: blue; font-weight: bold; cursor: pointer"&gt;↻ Custom&lt;/span&gt;
    &lt;/template&gt;
  &lt;/VueClientRecaptcha&gt;
&lt;/template&gt;</code></pre>
      </details>
    </section>

    <!-- Audio enabled -->
    <section class="example">
      <h2>7. Audio Support</h2>
      <input v-model="audioInput" placeholder="Enter captcha" />
      <VueClientRecaptcha
        v-model="audioInput"
        v-model:valid="audioValid"
        :audio-enabled="true"
      />
      <p class="status" :class="{ valid: audioValid }">Audio enabled (click refresh to hear)</p>

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;VueClientRecaptcha
    v-model="inputValue"
    v-model:valid="isValid"
    :audio-enabled="true"
  /&gt;
&lt;/template&gt;</code></pre>
      </details>
    </section>

    <!-- Form integration -->
    <section class="example">
      <h2>8. Form Integration</h2>
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

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;form @submit.prevent="submitForm"&gt;
    &lt;input v-model="form.email" type="email" required /&gt;
    &lt;input v-model="form.password" type="password" required /&gt;
    &lt;VueClientRecaptcha
      ref="captchaRef"
      v-model="form.captcha"
      v-model:valid="formValid"
      chars-preset="numeric"
      :count="3"
    /&gt;
    &lt;button type="submit" :disabled="!formValid"&gt;Submit&lt;/button&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script setup&gt;
const form = reactive({
  email: '',
  password: '',
  captcha: ''
})
const formValid = ref(false)
const captchaRef = ref(null)

const submitForm = () => {
  if (!formValid.value) return
  // Handle form submission
  captchaRef.value?.resetCaptcha()
}
&lt;/script&gt;</code></pre>
      </details>
    </section>

    <!-- Simple mode -->
    <section class="example">
      <h2>9. Simple Mode</h2>
      <input v-model="simpleInput" placeholder="Enter captcha" />
      <VueClientRecaptcha
        v-model="simpleInput"
        v-model:valid="simpleValid"
        :simple-mode="true"
        :count="6"
      />
      <p class="status" :class="{ valid: simpleValid }">Clean, straight-line text (adapts to theme)</p>

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;template&gt;
  &lt;VueClientRecaptcha
    v-model="inputValue"
    v-model:valid="isValid"
    :simple-mode="true"
    :count="6"
  /&gt;
&lt;/template&gt;</code></pre>
      </details>
    </section>

    <!-- CSS Variables demo -->
    <section class="example">
      <h2>10. CSS Variables (Theming)</h2>
      <input v-model="cssVarsInput" placeholder="Enter captcha" />
      <VueClientRecaptcha
        v-model="cssVarsInput"
        v-model:valid="cssVarsValid"
        class="custom-themed"
      >
        <template #icon>
          <span style="color: var(--vcr-icon-color); font-weight: bold">↻ Themed</span>
        </template>
      </VueClientRecaptcha>
      <p class="status" :class="{ valid: cssVarsValid }">Custom CSS variables applied</p>

      <details class="code-toggle">
        <summary>View Code</summary>
        <pre><code>&lt;style&gt;
.custom-themed {
  --vcr-bg: #f0f8ff;
  --vcr-icon-color: #ff6b35;
  --vcr-radius: 12px;
  --vcr-padding: 14px;
}
&lt;/style&gt;

&lt;template&gt;
  &lt;VueClientRecaptcha v-model="inputValue" class="custom-themed"&gt;
    &lt;template #icon&gt;
      &lt;span style="color: var(--vcr-icon-color)"&gt;↻ Themed&lt;/span&gt;
    &lt;/template&gt;
  &lt;/VueClientRecaptcha&gt;
&lt;/template&gt;</code></pre>
      </details>
    </section>
  </div>
</template>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.example {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}

h1 {
  text-align: center;
  color: #333;
}

h2 {
  margin-top: 0;
  color: #555;
  font-size: 1.2em;
}

input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 8px 0;
  width: 200px;
}

.controls {
  margin-bottom: 10px;
}

.controls button {
  margin-right: 8px;
  padding: 4px 8px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
}

.controls button:hover {
  background: #f0f0f0;
}

button {
  margin: 8px 8px 8px 0;
  padding: 6px 12px;
  cursor: pointer;
  border: 1px solid #0077ff;
  border-radius: 4px;
  background: #0077ff;
  color: white;
}

button:hover {
  background: #0056cc;
}

button:disabled {
  background: #ccc;
  border-color: #ccc;
  cursor: not-allowed;
}

.status {
  margin: 8px 0;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
}

.status.valid {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
}

.composable-demo {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.message {
  margin-top: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
}

.message.success {
  background: #d4edda;
  color: #155724;
}

.message.error {
  background: #f8d7da;
  color: #721c24;
}

.custom-themed {
  --vcr-bg: #f0f8ff;
  --vcr-icon-color: #ff6b35;
  --vcr-radius: 12px;
  --vcr-padding: 14px;
}

.code-toggle {
  margin-top: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #f9f9f9;
}

.code-toggle summary {
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 500;
  user-select: none;
}

.code-toggle summary:hover {
  background: #f0f0f0;
}

.code-toggle pre {
  margin: 0;
  padding: 12px;
  background: #2d3748;
  color: #e2e8f0;
  border-radius: 0 0 6px 6px;
  overflow-x: auto;
  font-size: 0.9em;
  line-height: 1.4;
}

.code-toggle code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  white-space: pre;
}
</style>