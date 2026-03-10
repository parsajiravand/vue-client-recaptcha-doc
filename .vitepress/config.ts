import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue Client Recaptcha",
  description: "Build simple recaptcha for Vue.js without need for server",
  base: "/",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/logo.png" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Component", link: "/component/vue-client-recaptcha" },
      { text: "API", link: "/api/props" },
      { text: "Samples", link: "/samples/" },
      { text: "Playground", link: "/playground/" },
      { text: "Migration", link: "/migration/v1-to-v2" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
      {
        text: "Component",
        items: [
          {
            text: "VueClientRecaptcha",
            link: "/component/vue-client-recaptcha",
          },
        ],
      },
      {
        text: "API Reference",
        items: [
          { text: "Props", link: "/api/props" },
          { text: "Events", link: "/api/events" },
          { text: "Slots", link: "/api/slots" },
          { text: "Composable", link: "/api/composable" },
        ],
      },
      {
        text: "Samples",
        items: [
          { text: "Overview", link: "/samples/" },
          { text: "Basic", link: "/samples/basic" },
          { text: "Character Presets", link: "/samples/presets" },
          { text: "Theming", link: "/samples/theming" },
          { text: "Distortion", link: "/samples/distortion" },
          { text: "Accessibility", link: "/samples/accessibility" },
          { text: "Custom Icon", link: "/samples/custom-icon" },
          { text: "Audio Support", link: "/samples/audio" },
          { text: "Composable", link: "/samples/composable" },
          { text: "Form Integration", link: "/samples/form-integration" },
          { text: "Simple Mode", link: "/samples/simple-mode" },
          { text: "CSS Variables", link: "/samples/css-variables" },
        ],
      },
      {
        text: "Playground",
        items: [{ text: "Interactive Playground", link: "/playground/" }],
      },
      {
        text: "Migration",
        items: [{ text: "v1 to v2", link: "/migration/v1-to-v2" }],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/parsajiravand/vue-client-recaptcha",
      },
    ],
  },
});
