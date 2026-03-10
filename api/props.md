# Props

Full reference for `VueClientRecaptcha` component props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| null` | `""` | User input to validate (use with v-model) |
| `value` | `string \| null` | `""` | **Deprecated.** Use `modelValue` or v-model instead |
| `chars` | `string` | alphanumeric | Custom character set when `charsPreset` is `"custom"` |
| `charsPreset` | `"alphanumeric" \| "numeric" \| "letters" \| "custom"` | `"alphanumeric"` | Character preset for captcha code |
| `count` | `number` | `5` | Number of characters in captcha |
| `hideLines` | `boolean` | `false` | Hide distortion lines |
| `customTextColor` | `string` | `""` | Fixed text color (e.g. `"#333"`) |
| `textColors` | `string[]` | `[]` | Array of colors for random text coloring |
| `width` | `number \| (p) => number` | `(p) => p.count * 30` | Canvas width (number or function) |
| `height` | `number` | `50` | Canvas height in pixels |
| `canvasClass` | `string` | `""` | Additional CSS class for canvas element |
| `icon` | `string` | `"refresh"` | Icon type when `icon` slot is not used. Default shows a refresh-style icon. Use the `icon` slot for custom template or text. |
| `captchaFont` | `string` | `"bold 28px sans-serif"` | Canvas font for captcha text |
| `hideRefreshIcon` | `boolean` | `false` | Hide the refresh button |
| `radius` | `number` | `0` | Border radius in pixels |
| `refreshLabel` | `string` | `"Refresh captcha"` | A11y label for refresh button |
| `canvasLabel` | `string` | `"Captcha image"` | A11y label for canvas |
| `theme` | `"auto" \| "light" \| "dark"` | `"light"` | Theme mode |
| `noiseDots` | `number` | `0` | Number of noise dots (0 = off) |
| `noiseLines` | `number` | `-1` | Number of distortion lines (-1 = use `count`) |
| `distortion` | `"none" \| "lines" \| "dots" \| "both"` | `"lines"` | Distortion type |
| `audioEnabled` | `boolean` | `false` | Speak code for screen readers |
| `simpleMode` | `boolean` | `false` | Clean, straight-line text with single color |

## Character Presets

- **`alphanumeric`** – Letters (a-z, A-Z) and digits (0-9)
- **`numeric`** – Digits only (0-9)
- **`letters`** – Letters only (a-z, A-Z)
- **`custom`** – Use `chars` prop for custom character set

## Width Function

When `width` is a function, it receives `{ count: number }` and returns the canvas width:

```vue
<VueClientRecaptcha :width="(p) => p.count * 35" />
```

## CSS Variables

You can override these styles via CSS variables on the component or parent:

- `--vcr-bg` – Background color
- `--vcr-icon-color` – Icon color
- `--vcr-padding` – Padding
- `--vcr-radius` – Border radius
