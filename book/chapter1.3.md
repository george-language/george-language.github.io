---
title: "Chapter 1.3"
---

# Chapter 1.3: Running A Program

## Initial Steps

Before we do anything, let's keep organized! Make a directory specifically for this book, maybe `glang_learning` and move into it. Create a file titled `main.glang` and open it in an IDE or text editor.

_For the record, `.glang` files can be any name. GLang has the ability to run any program with the `.glang` extension._

## Writing The Code

Inside the `main.glang` file, we are going to write the following (you may not understand it, but that's ok!):

```
bark("Hello, World!");
```

Save this file and open the terminal in the same directory as the `main.glang` file (use the `cd` command, or right click > open terminal in that directory). To run this file, we type the following:

```
glang main.glang
```

That's it! You should see `Hello, World!` inside the terminal. Congrats on writing the first line of GLang 🎉🎉

## Your Challenge 🤔

Modify the `Hello, World!` inside quotation marks (`""`) to display the message `Learning to code is easy!` inside the terminal.

::: details Answer
```
bark("Learning to code is easy!");
```
:::
