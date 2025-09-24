import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "George Language",
  description: "The George Programming Language",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/george_language_icon.svg",
    siteTitle: false,

    nav: [
      { text: "Home", link: "/" },
      { text: "Install", link: "/docs/install" },
      { text: "Learn", link: "/book/" },
      { text: "Documentation", link: "/docs/" },
      { text: "About", link: "/about/" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/george-language/glang" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "George Language is licensed under the GPL v3 openly.",
      copyright: "Copyright (©) The George Language Foundation",
    },
  },
});
