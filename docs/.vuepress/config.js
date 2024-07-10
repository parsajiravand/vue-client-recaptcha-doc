/* const { path } = require("@vuepress/utils"); */
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import { defaultTheme } from "vuepress";
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
export default {
  theme: defaultTheme({
    locales: {
      "/": {
        lang: "en-US",
        title: "Vue Client Recaptcha",
        description:
          "Build simple recaptcha for vuejs without need server .",
      },
    },
    logo: "https://i.postimg.cc/CM6ZjS2F/vue-client-recaptcha.png",
    navbar: [
      // NavbarItem
      {
        text: "Docs",
        link: "/usage/",
      },
      // NavbarGroup
      {
        text: "Github",
        children: [
          {
            text: "Package",
            link: "https://github.com/parsajiravand/vue-client-recaptcha",
          },
          {
            text: "Docs",
            link: "https://github.com/parsajiravand/vue-client-recaptcha-doc",
          },
        ],
      },
       // NavbarItem
      {
        text: "Npm",
        link: "https://www.npmjs.com/package/vue-client-recaptcha",
      },
      {
        text: "Other Packages",
        children: [
          {
            text: "React Form Wizard",
            link: "https://github.com/parsajiravand/react-form-wizard",
          },
          {
            text: "Vue3 Form Wizard",
            link: "https://vue3-form-wizard-document.netlify.app",
          },
          {
            text: "Helping Js",
            link: "https://github.com/parsajiravand/helping-js",
          },
          {
            text: "Simple Form Data",
            link: "https://github.com/parsajiravand/simple-form-data"
          }
        ],
      },
    ],
    sidebar: [
      // NavbarItem
      {
        text: "Usage",
        link: "/usage/",
      },
      {
        text: "Props",
        link: "/props/",
      },
      {
        text: "Events",
        link: "/events/",
      },
      {
        text: "Slots",
        link: "/slots/",
      },
      // {
      //   text: "Methods",
      //   link: "/methods/",
      // },
      // {
      //   text: "Scoped slots",
      //   link: "/scoped-slots/",
      // },
      {
        text: "Demos",
        link: "/demos/",
      },
      {
        text: "Playground",
        link: "/playground/",
      },
    ],
  }),
  plugins: [
    registerComponentsPlugin({

      componentsDir: path.resolve(__dirname, "./components"),
    }),
    mediumZoomPlugin({
      // options
      selector:':not(a) > s'
    }),
  ],
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://i.postimg.cc/CM6ZjS2F/vue-client-recaptcha.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://i.postimg.cc/CM6ZjS2F/vue-client-recaptcha.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "https://i.postimg.cc/CM6ZjS2F/vue-client-recaptcha.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "https://i.postimg.cc/CM6ZjS2F/vue-client-recaptcha.png",
        color: "#3a0839",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://i.postimg.cc/CM6ZjS2F/vue-client-recaptcha.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3a0839" }],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/assets/favicons/browserconfig.xml",
      },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
};
