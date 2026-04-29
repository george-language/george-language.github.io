---
title: "catch"
---

# Keyword: `catch`

Represents the safe block of code to execute after a `try` block fails. _Used in chain with the [`try` keyword](/docs/keywords/try)._

```glang
# try { ... } catch [name] { ... }

try {
    # ...
} catch error {
    bark("Some error occured: " + error);
}
```

`catch` takes a variable name as the error output, where the variable name is a string type with the encountered error inside.

```glang
try {
    1 / 0;
} catch division_error {
    bark(division_error); # output: division by 0
}
```
