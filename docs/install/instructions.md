---
title: Install GLang
---

# Installation Instructions

## GLang for Windows

GLang is easily installable on any Windows machine. It involves four steps:

### 1. Download the installer

Go to the install page of our official website to download the latest stable release.

::: warning
Do **not** download suspicious versions of GLang that ask you to pay for the download.
:::

### 2. Run the installer

After downloading the latest version, run the installer by double-clicking it.
The installer will then ask step-by-step how you would like to configure where GLang is installed, what steps to run, etc.

### 3. System PATH variable

::: info
GLang should automatically update the PATH variable on Windows. Skip this step if you don't encounter issues with the `glang` command not being found.
:::

As with any programming language, GLang needs to be added to the system PATH variable to work anywhere on the computer.
To do this:

1. Search for **“system environment variable”** in the Start menu.
2. Click the shortcut and open the dialog.
3. Look for the **“Environment Variables...”** button and click it.
4. In the *User variables for `<your-username>`* section, find the **Path** list and click **Edit**.
5. In the *Edit environment variable* dialog, click **New** and paste in the location of GLang:

```
C:\Users\<your-username>\AppData\Local\Programs\GeorgeLanguage
```

6. Click **OK** to accept the new path variable.

> If you are using an IDE or terminal to run GLang, make sure to restart it to reflect the environment changes.

### 4. Check installation

GLang should now be installed properly on your Windows machine.

To verify that it works, open a new terminal and run:

```
glang
```

You should see something like:

```
George Language 0.1
Type '/exit' to exit
>>>
```

Enjoy programming now! 🎉

## GLang for macOS

GLang is easily installable on any macOS machine. It involves four steps:

### 1. Download the package

Go to the [install page](/docs/install/) of our official website to download the latest stable release for macOS.

::: warning
Do **not** download suspicious versions of GLang that ask you to pay for the download.
:::

### 2. Run the package installer

After downloading the latest version, double click the `GeorgeLanguage+macos_setup.pkg` file to run the installer. The installer will automatically guide you through installation

### 4. Check installation

GLang should now be installed properly on your macOS machine.

To verify that it works, open a new terminal and run:

```
glang
```

You should see something like:

```
George Language 0.1
Type '/exit' to exit
>>>
```

Enjoy programming now! 🎉
