---
title: "func"
---

# Keyword: `func`
_Functions are also types; representation: function_

A function or function object.

```
func example(arg1, arg2) { # as many args as you like!
    bark("arg1: " + tostring(arg1));
    bark("arg2: " + tostring(arg2));
}

example(1, 2); # call the function
```

Functions can also be assigned to objects.

```
func example(arg1, arg2) {
    bark("arg1: " + tostring(arg1));
    bark("arg2: " + tostring(arg2));
}

obj function = example;

function(1, 2); # call the function as the object name
```

Anonymous functions are used in pair with objects.

```
obj anonymous = func (value) { # no name
    bark(value);
};

anonymous("GLang");
```
