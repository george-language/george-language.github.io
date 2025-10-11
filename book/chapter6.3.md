---
title: "Chapter 6.3"
---

# Chapter 6.3: Creating Errors

Believe it or not, it’s actually a good thing to make your program fail - on purpose. Developers do this to stop the program early when something unexpected (or dangerous) happens.

In GLang, you can create your own errors using the `uhoh` built-in. It takes a `msg` (message) as its argument, outputs the error, and immediately halts execution.

```
uhoh("Something is broken...");
```

This can be super handy for **type-checking** or validating function arguments before something explodes later on.

```
func x(arg1) {
    if type(arg1) != "string" {
        uhoh("expected 'arg1' to be a string type");
    }
}

x(1);
```
