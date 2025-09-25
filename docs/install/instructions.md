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
GLang 1.3 and above automatically updates the PATH on Windows. Skip this step if you’re on version 1.3+.
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

### 4. Done!

GLang should now be installed properly on your Windows machine.
To verify that it works, open a new terminal and run:

```
glang
```

You should see something like:

```
George Language 2.0
Type '/exit' to exit
>>>
```

Enjoy programming now! 🎉

## GLang for macOS

GLang is easily installable on any macOS machine. It involves four steps:

### 1. Download the ZIP

Go to the install page of our official website to download the latest stable release.

::: warning
Do **not** download suspicious versions of GLang that ask you to pay for the download.
:::

### 2. Extract the ZIP

After downloading the latest version, extract the ZIP file contents into the **Applications** folder.
This should add a folder titled `GeorgeLanguage` in Applications.

### 3. System PATH variable

As with any programming language, GLang needs to be appended to the system PATH variable to work anywhere on the computer.
To do this, open a terminal and edit your shell config:

```bash
sudo nano ~/.zshrc
````

If the file isn’t empty, use the arrow keys to navigate to the bottom and add:

```bash
export PATH="/Applications/GeorgeLanguage/:$PATH"
```

Then:

* Press **Ctrl + X** to exit.
* Press **Y** to save.
* Press **Enter** to confirm.

To verify if GLang has been added to the path, open a new terminal and run:

```bash
echo $PATH
```

> If you are using an IDE or terminal to run GLang, make sure to restart it to reflect the environment changes.

### 4. Done!

GLang should now be installed properly on your macOS machine.
To verify that it works, open a new terminal and run:

```
glang
```

You should see something like:

```
George Language 2.0
Type '/exit' to exit
>>>
```

Enjoy programming now! 🎉
