# Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` <span class="vcr-tag vcr-tag--v2">v2</span> | `string` | `""` | User input to validate (use with v-model) |
| `value` | `string` | `""` | Deprecated. Use `modelValue` instead |
| `chars` | `string` | alphanumeric | Custom chars when `charsPreset` is `"custom"` |
| `charsPreset` <span class="vcr-tag vcr-tag--v2">v2</span> | `"alphanumeric" \| "numeric" \| "letters" \| "custom"` | `"alphanumeric"` | Character preset |
| `count` | `number` | `5` | Number of captcha characters |
| `hideLines` | `boolean` | `false` | Hide distortion lines |
| `customTextColor` | `string` | `""` | Fixed text color |
| `textColors` | `string[]` | `[]` | Random text colors |
| `width` | `number \| (p) => number` | `p.count * 30` | Canvas width |
| `height` | `number` | `50` | Canvas height |
| `radius` | `number` | `0` | Border radius (px) |
| `canvasClass` | `string` | `""` | Additional canvas CSS class |
| `captchaFont` | `string` | `"bold 28px sans-serif"` | Canvas font |
| `hideRefreshIcon` | `boolean` | `false` | Hide refresh button |
| `refreshLabel` <span class="vcr-tag vcr-tag--v2">v2</span> | `string` | `"Refresh captcha"` | A11y label for refresh |
| `canvasLabel` <span class="vcr-tag vcr-tag--v2">v2</span> | `string` | `"Captcha image"` | A11y label for canvas |
| `theme` <span class="vcr-tag vcr-tag--v2">v2</span> | `"auto" \| "light" \| "dark"` | `"light"` | Theme mode |
| `distortion` <span class="vcr-tag vcr-tag--v2">v2</span> | `"none" \| "lines" \| "dots" \| "both"` | `"lines"` | Distortion type |
| `noiseDots` <span class="vcr-tag vcr-tag--v2">v2</span> | `number` | `0` | Number of noise dots (0 = off) |
| `noiseLines` <span class="vcr-tag vcr-tag--v2">v2</span> | `number` | `-1` | Distortion lines (-1 = use `count`) |
| `audioEnabled` <span class="vcr-tag vcr-tag--v2">v2</span> | `boolean` | `false` | Speak code for screen readers |
| `simpleMode` <span class="vcr-tag vcr-tag--v2">v2</span> | `boolean` | `false` | Clean, straight-line captcha with theme-aware single color |
| `icon` | `string` | `"refresh"` | Icon type (use slot for custom icon) |

::: tip modelValue vs value
Use `v-model` or `modelValue` for new projects. The `value` prop is deprecated but still supported for backward compatibility.
:::
