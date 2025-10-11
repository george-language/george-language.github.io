---
title: "Chapter 6.1"
---

# Chapter 6.1: Errors

Obviously, your program will fail at some point. Whether it's a typo, or attempting to add a number and a string, your program can (and will) fail.

GLang won't destroy your computer if an error is encountered, instead, it safely displays the error in the terminal.

The code:

```
1 / 0; # dividing by zero causes an error
```

The error:

```sh
error: division by zero
   in: example.glang:1:6
   +
   |
   | 1 / 0;
   |     ^
   |
   +
process finished with exit code -1
```

GLang will pin-point exactly where the error is, and show you what part of your code failed. Additionally, there may be a `help` message to guide you along.

```sh
error: variable name 'example' is undefined
   in: example.glang:1:1
   +
   |
   | example
   | ^^^^^^^
   |
   + - > help: you can define a variable like 'obj my_variable = 1;'
process finished with exit code -1
```
