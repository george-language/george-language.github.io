---
title: "Chapter 6.3"
---

# Chapter 6.3: Creating Errors

In GLang, you can create your own errors using the `uhoh` built-in. It takes a `msg` (message) as its argument, outputs the error, immediately halting execution.

```glang
uhoh("Something is broken...");
```

This can be super handy for **type-checking** or validating function arguments before something explodes later on.

```glang
func x(arg1) {
    if not isstring(arg1) {
        uhoh("expected 'arg1' to be a string type");
    }
}

x(1);
```
