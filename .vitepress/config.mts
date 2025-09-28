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
      { text: "Install", link: "/docs/install/" },
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
          items: [
            { text: "Introduction", link: "/docs/" },
            { text: "Download", link: "/docs/install/" },
            {
              text: "Installation Instructions",
              link: "/docs/install/instructions",
            },
            {
              text: "Keywords",
              items: [
                { text: "obj", link: "/docs/keywords/obj" },
                { text: "stay", link: "/docs/keywords/stay" },
                { text: "if", link: "/docs/keywords/if" },
                { text: "alsoif", link: "/docs/keywords/alsoif" },
                {
                  text: "otherwise",
                  link: "/docs/keywords/otherwise",
                },
                { text: "func", link: "/docs/keywords/func" },
                { text: "walk", link: "/docs/keywords/walk" },
                { text: "while", link: "/docs/keywords/while" },
                { text: "unsafe", link: "/docs/keywords/unsafe" },
                { text: "safe", link: "/docs/keywords/safe" },
                { text: "fetch", link: "/docs/keywords/fetch" },
                { text: "give", link: "/docs/keywords/give" },
                { text: "next", link: "/docs/keywords/next" },
                { text: "leave", link: "/docs/keywords/leave" },
                { text: "true", link: "/docs/keywords/true" },
                { text: "false", link: "/docs/keywords/false" },
                { text: "null", link: "/docs/keywords/null" },
                { text: "and", link: "/docs/keywords/and" },
                { text: "or", link: "/docs/keywords/or" },
                { text: "not", link: "/docs/keywords/not" },
                { text: "skip", link: "/docs/keywords/skip" },
              ],
            },
            {
              text: "Types",
              items: [
                { text: "number", link: "/docs/types/number" },
                { text: "string", link: "/docs/types/string" },
                { text: "list", link: "/docs/types/list" },
                { text: "function", link: "/docs/types/function" },
                { text: "builtin", link: "/docs/types/builtin" },
              ],
            },
            {
              text: "Modules",
              items: [
                { text: "std_os", link: "/docs/modules/std_os" },
                { text: "std_format", link: "/docs/modules/std_format" },
                { text: "std_hashmap", link: "/docs/modules/std_hashmap" },
                { text: "std_math", link: "/docs/modules/std_math" },
              ],
            },
          ],
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
      message:
        'George Language is licensed under the GPL v3 openly. <a href="https://github.com/george-language/www.george-lang.org">Help improve this site.</a>',
      copyright: "Copyright (©) The George Language Foundation",
    },
  },
});
