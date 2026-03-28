---
title: "Install"
---

# Download GLang <span id="glang-version">...</span>

<a id="win-link">🪟 Download GLang for Windows (.exe)</a>
<a id="mac-link">🍏 Download GLang for macOS (.pkg)</a>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const versionEl = document.getElementById("glang-version")
  const winLink = document.getElementById("win-link")
  const macLink = document.getElementById("mac-link")

  try {
    const res = await fetch("https://api.github.com/repos/george-language/glang/releases/latest", {
      headers: { "Accept": "application/vnd.github+json" }
    })
    const data = await res.json()

    let tag = data.tag_name || "0.0"
    if (tag.startsWith("v")) tag = tag.slice(1)
    versionEl.textContent = tag

    const assets = data.assets || []

    const win = assets.find(a => a.name.includes("windows_setup.exe"))
    const mac = assets.find(a => a.name.includes("macos_setup.pkg"))

    if (win) winLink.href = win.browser_download_url
    if (mac) macLink.href = mac.browser_download_url

  } catch (err) {
    console.error("Failed to fetch glang version:", err)
    versionEl.textContent = "unknown"
  }
})
</script>

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
