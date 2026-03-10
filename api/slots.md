# Slots

## icon

Custom template for the refresh button. Use your own icon component, SVG, or plain text instead of the default refresh icon.

| Attribute | Description |
|-----------|-------------|
| **Default** | Built-in refresh-style icon (inline SVG) |
| **Override** | Use the `#icon` slot for custom content, or the `icon` prop when not using the slot |

### Custom icon or text

```vue
<VueClientRecaptcha v-model="input" v-model:valid="valid">
  <template #icon>
    <span style="font-weight: bold">↻ Refresh</span>
  </template>
</VueClientRecaptcha>
```

### Custom SVG

```vue
<VueClientRecaptcha v-model="input" v-model:valid="valid">
  <template #icon>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <!-- your custom SVG path -->
    </svg>
  </template>
</VueClientRecaptcha>
```

### Custom component (e.g. FontAwesome)

```vue
<VueClientRecaptcha v-model="input" v-model:valid="valid">
  <template #icon>
    <FontAwesomeIcon icon="refresh" />
  </template>
</VueClientRecaptcha>
```

When the slot is not used, the default icon is shown. You can also change via the `icon` prop (see [Props](/api/props#icon)).
