---
title: "Chapter 6.2"
---

# Chapter 6.2: Handling Errors

GLang provides a safe way to handle errors and unsafe situations using `try` and `catch`.

```glang
try {
    1 / 0; # error!
} catch error {
    bark("Some error occurred: " + error);
}
```

In this example, the `try` block runs first. If an error occurs, GLang automatically jumps to the `catch` block. The `catch` block takes an identifier (in this case, `error`) that stores a string describing what went wrong.

When this code runs, you’ll see something like:

```sh
Some error occurred: division by zero
```

After handling the error, the program continues running normally. `try` and `catch` tell GLang to attempt the code in `try`, and if it fails, handle the issue inside of `catch` before moving on.

## Your Challenge 🤔

Use `try` and `catch` to attempt to access an undefined variable named `y`. Define the variable with the value 10 if it fails to access it.

::: details Answer
```glang
try {
    y;
} catch error {
    obj y = 10;
}
```
:::
