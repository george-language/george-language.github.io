---
title: "Install"
---

# Download GLang 0.1

[🪟 Download GLang for Windows (.exe)](https://github.com/george-language/glang/releases/latest/download/GeorgeLanguage+windows_setup.exe)

[🍏 Download GLang for macOS (.pkg)](https://github.com/george-language/glang/releases/latest/download/GeorgeLanguage+macos_setup.pkg)

_Beta or previous versions are available [here](https://github.com/george-language/glang/releases)._

## Post-Install Notes
Upon installing, GLang requires ~5 MB of space. As far as computer power goes, that's up to you! It's optimized to run well even on low-end laptops.

## Install Instructions

**On macOS**:
Double click the `.pkg` to open a dialog guiding you through installation.

**On Windows**:
Double click the `.exe` to open a setup dialog allowing you to configure installation.

Once GLang is installed, confirm everything works by opening a new terminal and typing:

```
glang
```

You should see something along the lines of:

```
George Language 0.1
Type '/exit' to exit
>>>
```

## After-Install Notes
GLang includes a set of tools you can use, like `glang self <option>` to manage the GLang binary and components.

Updating to the latest version is as simple as:

```sh
glang self update
```

Uninstalling all components and external files is as simple as:

```sh
glang self uninstall
```
