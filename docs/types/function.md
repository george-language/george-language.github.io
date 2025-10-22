---
title: "function"
---

# Type: `function`

A set of code that can be "called" to run it.

```glang
func example() {
    bark("this code is only ran when we call the function")
}

example(); # call the function
```

# Operations

## `isfunction(value)`
Returns `true` if `value` is a function.

```glang
bark(isfunction(push)); # true!
```
