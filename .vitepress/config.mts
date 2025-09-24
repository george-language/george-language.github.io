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
      { text: "Learn", link: "/book" },
      { text: "Documentation", link: "/docs" },
      { text: "About", link: "/about" },
    ],

    sidebar: {
      "/book/": [
        {
          text: "Guide Book",
          items: [
            {
              text: "Chapter 1",
              link: "/book/chapter1",
              items: [
                { text: "Chapter 1.1", link: "/book/chapter1.1" },
                { text: "Chapter 1.2", link: "/book/chapter1.2" },
                { text: "Chapter 1.3", link: "/book/chapter1.3" },
              ],
            },
            {
              text: "Chapter 2",
              link: "/book/chapter2",
              items: [
                { text: "Chapter 2.1", link: "/book/chapter2.1" },
                { text: "Chapter 2.2", link: "/book/chapter2.2" },
                { text: "Chapter 2.3", link: "/book/chapter2.3" },
              ],
            },
            {
              text: "Chapter 3",
              link: "/book/chapter3",
              items: [
                { text: "Chapter 3.1", link: "/book/chapter3.1" },
                { text: "Chapter 3.2", link: "/book/chapter3.2" },
                { text: "Chapter 3.3", link: "/book/chapter3.3" },
              ],
            },
          ],
        },
      ],
      "/docs/": [
        {
          text: "Documentation",
          items: [{ text: "Standard Docs", link: "/docs/" }],
        },
      ],
    },

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
