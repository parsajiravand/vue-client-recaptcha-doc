# Events

| Event | Payload | Description |
|-------|---------|-------------|
| `getCode` | `string` | Emitted with captcha code on generate/refresh |
| `isValid` | `boolean` | Validation state changed |
| `update:valid` <span class="vcr-tag vcr-tag--v2">v2</span> | `boolean` | v-model:valid sync |
| `update:modelValue` <span class="vcr-tag vcr-tag--v2">v2</span> | `string` | v-model sync |
| `refresh` <span class="vcr-tag vcr-tag--v2">v2</span> | `string` | Captcha regenerated |
| `ready` <span class="vcr-tag vcr-tag--v2">v2</span> | – | Canvas ready |
| `error` <span class="vcr-tag vcr-tag--v2">v2</span> | `unknown` | Canvas/context error |
