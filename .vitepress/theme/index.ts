import DefaultTheme from "vitepress/theme";
import { VueClientRecaptcha } from "vue-client-recaptcha";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("VueClientRecaptcha", VueClientRecaptcha);
  },
};
