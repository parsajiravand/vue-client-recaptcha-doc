# Slots

| Name | Description |
|------|-------------|
| `icon` | Custom template for the refresh icon. Use text or any custom element. Default is the built-in refresh SVG. |

## Example

```vue
<VueClientRecaptcha v-model="inputValue">
  <template #icon>
    <span style="color: blue">Refresh</span>
  </template>
</VueClientRecaptcha>
```
