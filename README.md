# 🌐 The George Language Website

This repository houses the **official website**, **documentation**, and **guidebook** for the [George Programming Language (GLang)](https://github.com/george-language/glang).

Whether you’re fixing a typo, expanding the docs, or redesigning the site, every contribution helps make GLang stronger.

## Project Overview

This site is built using **[VitePress](https://vitepress.dev/)**, a fast, modern static site generator powered by Vite.

The goal is to make GLang’s documentation easy to navigate, maintain, and update.

**Contents:**

- `/docs/` → all documentation pages
- `/book/` → all book pages
- `/about/` → about page
- `/public/` → static assets (images, icons, etc.)
- `.vitepress/` → site configuration and theme settings

## Requirements

Before contributing, make sure you have:

- **Node.js** (v18+ recommended)
- **npm** (comes with Node)

You can check your versions with:

```bash
node -v
npm -v
```

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/george-language/george-language.github.io.git
cd george-language.github.io
npm install
```

Start the local dev server:

```bash
npm run docs:dev
```

This spins up a **live-reloading VitePress server**, so you can preview your edits in real-time at:

```
http://localhost:5173
```

## Project Scripts

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `npm run docs:dev`   | Starts local dev server                   |
| `npm run docs:build` | Builds the static site for production     |
| `npm run docs:serve` | Serves the built site locally for testing |

## Writing Guidelines

- Keep explanations **clear** and **concise**
- Use **code blocks** for examples
- Favor **active voice**
- Stay consistent with existing formatting

## Maintainers

Maintained by the **George Language Foundation** and the **open-source community** ❤️

Feel free to tag us in your PRs or discussions if you need a review or feedback!

## License

This project is licensed under the MIT License. You’re free to use, modify, and share; just keep attribution!
