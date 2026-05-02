---
title: "func"
---

# Keyword: `func`
_Functions are [also types](/docs/types/function)_

A function or function object.

```glang
# func [name]([arguments]) { ... }

func example(arg1, arg2) { # the number of arguments can be 0 up to 'n' length
    bark("arg1: " + tostring(arg1));
    bark("arg2: " + tostring(arg2));
}

example(1, 2); # call the function
```

When defined, functions are assigned to their corresponding variable names.

```glang
func example(arg1, arg2) {
    bark("arg1: " + tostring(arg1));
    bark("arg2: " + tostring(arg2));
}

obj function = example;

function(1, 2); # call the function (linked to example function)
```

Functions can additionally be anonymous, allowing you to use them as "closures".

```glang
func call_a_function(fn) {
    fn();
}

call_a_function(func () { # no name
    bark("anonymous");
});
```
