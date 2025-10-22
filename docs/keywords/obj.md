---
title: "obj"
---

# Keyword: `obj`

Create a named variable with a value.

```glang
# obj [name] = [value]

obj example = "Whoa, this is a variable!";
```

The value of a variable can also be modified by shadowing it's name.

```glang
obj x = 10;
x = 20; # x is now 20

obj x = 30 # this also works for variable reassigning
```
