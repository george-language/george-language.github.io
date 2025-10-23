---
title: "Install"
---

# Download GLang <span id="glang-version">...</span>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const el = document.getElementById("glang-version")
  try {
    const res = await fetch("https://api.github.com/repos/george-language/glang/releases/latest", {
      headers: { "Accept": "application/vnd.github+json" }
    })
    const data = await res.json()
    let tag = data.tag_name || "0.0"
    if (tag.startsWith("v")) tag = tag.slice(1)
    el.textContent = tag
  } catch (err) {
    console.error("Failed to fetch glang version:", err)
    el.textContent = "unknown"
  }
})
</script>

[🪟 Download GLang for Windows (.exe)](https://github.com/george-language/glang/releases/latest/download/GeorgeLanguage+windows_setup.exe)

[🍏 Download GLang for macOS (.pkg)](https://github.com/george-language/glang/releases/latest/download/GeorgeLanguage+macos_setup.pkg)

_Beta or previous versions are available [here](https://github.com/george-language/glang/releases)._

## Pre-Install Notes
Upon installing, GLang requires ~5 MB of space. As far as computer power goes, that's up to you! It's optimized to run well even on low-end laptops.

## Install Instructions

**On macOS**:
Double click the `.pkg` to open a dialog guiding you through installation.

**On Windows**:
Double click the `.exe` to open a setup dialog allowing you to configure installation.

Once GLang is installed, confirm everything works by opening a new terminal and typing:

```sh
glang
```

You should see something along the lines of:

```
George Language 0.1
Type '/exit' to exit
>>>
```

## Post-Install Notes
GLang includes a set of tools you can use, like `glang self <option>` to manage the GLang binary and components.

Updating to the latest version is as simple as:

```sh
glang self update
```

Uninstalling all components and external files is as simple as:

```sh
glang self uninstall
```
