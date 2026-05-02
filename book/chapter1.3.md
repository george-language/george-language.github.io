---
title: "Chapter 1.3"
---

# Chapter 1.3: Running A Program

## Initial Steps

Before we do anything, let's keep organized! Make a directory specifically for this book, maybe `glang_learning` and move into it. You can `cd` into this directory, and run the following command in a terminal:

```sh
glang new project
```

This command generates the necessary project structure for most projects, along with a `main.glang` file.

_For the record, `.glang` files can be any name. GLang has the ability to run any program with the `.glang` extension._

## Writing The Code

Inside the `main.glang` file, you will see the following code already written for you:

```glang
func main() {
    bark("Hello, World!");
}

main();
```

Open the terminal in the same directory as the `main.glang` file (use the `cd` command, or right click > open terminal in that directory), and run the code by typing the following:

```sh
glang main.glang
```

That's it! You should see `Hello, World!` inside the terminal. Congrats on running your first GLang program 🎉🎉

## What's with the Semicolon?

Semicolons are ways to mark the end of a line in GLang, and are not explicitly required. The use of semicolons `;` is encouraged due to many modern languages requiring them, but you can go through this guide without them.

## Your Challenge 🤔

Modify the `Hello, World!` inside quotation marks (`""`) to display the message `Learning to code is easy!` inside the terminal.

::: details Answer
```glang
func main() {
    bark("Learning to code is easy!");
}

main();
```
:::
