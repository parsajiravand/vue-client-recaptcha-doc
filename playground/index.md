# Playground

Interactive playground to experiment with `VueClientRecaptcha` options.

<script setup>
import { ref, computed } from 'vue'

const input = ref('')
const valid = ref(false)
const captchaRef = ref(null)

const theme = ref('light')
const charsPreset = ref('alphanumeric')
const count = ref(5)
const distortion = ref('lines')
const noiseDots = ref(0)
const noiseLines = ref(-1)
const simpleMode = ref(false)
const audioEnabled = ref(false)
const hideRefreshIcon = ref(false)

const noiseDotsComputed = computed(() => {
  if (distortion.value === 'dots' || distortion.value === 'both') return 15
  return 0
})

const noiseLinesComputed = computed(() => {
  if (distortion.value === 'lines' || distortion.value === 'both') return 3
  return -1
})
</script>

<div class="demo-container playground">
  <div class="playground-controls">
    <div class="control-group">
      <label>Theme</label>
      <select v-model="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="auto">Auto</option>
      </select>
    </div>
    <div class="control-group">
      <label>Chars Preset</label>
      <select v-model="charsPreset">
        <option value="alphanumeric">Alphanumeric</option>
        <option value="numeric">Numeric</option>
        <option value="letters">Letters</option>
      </select>
    </div>
    <div class="control-group">
      <label>Count</label>
      <input type="number" v-model.number="count" min="3" max="10" />
    </div>
    <div class="control-group">
      <label>Distortion</label>
      <select v-model="distortion">
        <option value="none">None</option>
        <option value="lines">Lines</option>
        <option value="dots">Dots</option>
        <option value="both">Both</option>
      </select>
    </div>
    <div class="control-group">
      <label>
        <input type="checkbox" v-model="simpleMode" />
        Simple Mode
      </label>
    </div>
    <div class="control-group">
      <label>
        <input type="checkbox" v-model="audioEnabled" />
        Audio
      </label>
    </div>
    <div class="control-group">
      <label>
        <input type="checkbox" v-model="hideRefreshIcon" />
        Hide Refresh Icon
      </label>
    </div>
  </div>

  <div class="playground-demo">
    <input v-model="input" placeholder="Enter captcha" />
    <VueClientRecaptcha
      ref="captchaRef"
      v-model="input"
      v-model:valid="valid"
      :theme="theme"
      :chars-preset="charsPreset"
      :count="count"
      :distortion="distortion"
      :noise-dots="noiseDotsComputed"
      :noise-lines="noiseLinesComputed"
      :simple-mode="simpleMode"
      :audio-enabled="audioEnabled"
      :hide-refresh-icon="hideRefreshIcon"
    />
    <p class="status" :class="{ valid }">{{ valid ? '✓ Valid' : 'Enter captcha' }}</p>
    <button @click="captchaRef?.resetCaptcha?.()">Reset</button>
  </div>
</div>
