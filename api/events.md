# Events

Full reference for `VueClientRecaptcha` component events.

| Event | Payload | Description |
|-------|---------|-------------|
| `isValid` | `boolean` | Emitted when validation state changes |
| `update:valid` | `boolean` | v-model:valid sync (internal) |
| `getCode` | `string` | Emitted with captcha code on generate/refresh |
| `update:modelValue` | `string` | v-model sync (internal) |
| `refresh` | `string` | Emitted when captcha is regenerated |
| `ready` | – | Emitted when canvas is ready |
| `error` | `unknown` | Emitted on canvas/context failure |

## Usage Examples

### Listen to validation

```vue
<VueClientRecaptcha
  v-model="input"
  v-model:valid="isValid"
  @isValid="(valid) => console.log('Valid:', valid)"
/>
```

### Get captcha code (e.g. for debugging)

```vue
<VueClientRecaptcha
  v-model="input"
  @getCode="(code) => console.log('Code:', code)"
/>
```

### Handle refresh

```vue
<VueClientRecaptcha
  v-model="input"
  @refresh="(code) => console.log('New code:', code)"
/>
```

### Handle ready and error

```vue
<VueClientRecaptcha
  v-model="input"
  @ready="() => console.log('Canvas ready')"
  @error="(err) => console.error('Captcha error:', err)"
/>
```
