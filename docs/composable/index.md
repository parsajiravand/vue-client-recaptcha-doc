# useCaptcha Composable <span class="vcr-tag vcr-tag--v2">v2</span>

For custom UIs or headless usage, use the `useCaptcha` composable to generate and validate captcha codes without the visual component.

## Options

```ts
interface UseCaptchaOptions {
  chars?: string;
  charsPreset?: 'alphanumeric' | 'numeric' | 'letters' | 'custom';
  count?: number;
}
```

## Usage

```vue
<script setup>
import { useCaptcha } from 'vue-client-recaptcha';

const { code, generate, validate, reset } = useCaptcha({
  charsPreset: 'numeric',
  count: 4
});

generate(); // Generate new code
const ok = validate('1234'); // Check user input
reset(); // Same as generate() - regenerate code
</script>
```

## Reactive Options

You can pass a getter function for reactive options:

```js
const { code, generate, validate } = useCaptcha(() => ({
  charsPreset: someRef.value,
  count: countRef.value
}));
```

## Returned Values

| Property | Type | Description |
|----------|------|-------------|
| `code` | `Ref<string>` | Current captcha code |
| `generate` | `() => string` | Generate a new code and return it |
| `validate` | `(input: string) => boolean` | Validate user input against current code |
| `reset` | `() => string` | Alias for `generate()` |
