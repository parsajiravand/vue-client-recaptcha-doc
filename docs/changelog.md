# Changelog

## [2.0.0]

### Breaking Changes

- Vue is now a peer dependency (Vue 3.2+)
- `value` prop deprecated in favor of `v-model` / `modelValue`
- Fixed `width` prop when used as a function
- Removed unused `isDirty` prop

### New Features

- `v-model:valid` for two-way validation state binding
- `charsPreset` prop: `alphanumeric` | `numeric` | `letters` | `custom`
- `theme` prop: `auto` | `light` | `dark`
- `distortion` prop: `none` | `lines` | `dots` | `both`
- `noiseDots` and `noiseLines` for noise configuration
- `refreshLabel` and `canvasLabel` for accessibility
- `audioEnabled` for screen reader support
- New events: `@refresh`, `@ready`, `@error`
- `useCaptcha` composable for custom UIs
- CSS variables for styling: `--vcr-bg`, `--vcr-icon-color`, `--vcr-padding`, `--vcr-radius`

---

## [1.x]

See npm or GitHub releases for v1 changelog.
