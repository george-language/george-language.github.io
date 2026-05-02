---
title: "function"
---

# Type: `function`

A section of code that can be "called" to run it.

```glang
func example() {
    bark("this code is only ran when we call the function")
}

example(); # call the function
```

Functions are treated as variable names, allowing you to use them as "variables".

```glang
obj new_bark = bark;

new_bark("Hello, world!"); # inherits the implementation of the 'bark' function
```

# Operations

## `isfunction(value)`
Returns `true` if `value` is a function.

```glang
bark(isfunction(push)); # true!
```
