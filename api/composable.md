# useCaptcha Composable

Composable for captcha code generation and validation. Use with `VueClientRecaptcha` or build custom captcha UIs.

## Import

```ts
import { useCaptcha } from 'vue-client-recaptcha'
```

When using the component, also import: `import 'vue-client-recaptcha/dist/vue-client-recaptcha.css'`

## API

```ts
const { code, generate, validate, reset } = useCaptcha(optionsOrGetter)
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `chars` | `string` | alphanumeric | Custom chars when `charsPreset` is `"custom"` |
| `charsPreset` | `"alphanumeric" \| "numeric" \| "letters" \| "custom"` | `"alphanumeric"` | Character preset |
| `count` | `number` | `5` | Number of characters |

### Return Value

| Property | Type | Description |
|----------|------|-------------|
| `code` | `Ref<string>` | Reactive captcha code |
| `generate` | `() => string` | Generate new code, return it |
| `validate` | `(input: string) => boolean` | Check if input matches code |
| `reset` | `() => string` | Alias for `generate()` |

## Options Input

You can pass either a plain object or a getter function for reactive options:

```ts
// Static options
const { code, generate, validate } = useCaptcha({
  charsPreset: 'numeric',
  count: 4
})

// Reactive options (getter)
const count = ref(4)
const { code, generate } = useCaptcha(() => ({
  charsPreset: 'numeric',
  count: count.value
}))
```

## Standalone Usage

Use the composable without the component for custom UIs:

```vue
<script setup>
import { ref } from 'vue'
import { useCaptcha } from 'vue-client-recaptcha'

const { code, generate, validate, reset } = useCaptcha({
  charsPreset: 'numeric',
  count: 4
})

generate() // Generate initial code

const input = ref('')
const message = ref('')

function check() {
  if (validate(input.value)) {
    message.value = 'Correct!'
  } else {
    message.value = 'Try again'
    generate()
  }
}
</script>

<template>
  <p>Enter the code: {{ code }}</p>
  <input v-model="input" />
  <button @click="check">Validate</button>
  <button @click="generate">New Code</button>
  <p>{{ message }}</p>
</template>
```

## With VueClientRecaptcha

The component uses `useCaptcha` internally. The composable is useful when you need:

- Custom UI layout (e.g. captcha in a different position)
- Server-side validation logic (you have the code)
- Integration with non-Vue forms
