---
title: "Chapter 6.2"
---

# Chapter 6.2: Handling Errors

Programmers often want to **bypass** errors because they expect them to happen. That’s perfectly fine, some operations, like reading a file or taking the square root of a negative number, are naturally prone to failure.

GLang provides a safe way to handle these situations using `try` and `catch`.

```
try {
    1 / 0; # error!
} catch error {
    bark("Some error occurred: " + error);
}
```

In this example, the `try` block runs first. If an error occurs, GLang automatically jumps to the `catch` block. The `catch` block takes an identifier (in this case, `error`) that stores a string describing what went wrong.

When this code runs, you’ll see something like:

```
Some error occurred: division by zero
```

After handling the error, the program continues running normally. In essence, `try` and `catch` tell GLang, _"Attempt this code, and if it fails, handle the issue gracefully before moving on."_

## Your Challenge 🤔

Use `try` and `catch` to attempt to access an undefined variable named `y`. Define the variable with the value 10 if it fails to access it.

::: details Answer
```
try {
    y;
} catch error {
    obj y = 10;
}
```
:::
