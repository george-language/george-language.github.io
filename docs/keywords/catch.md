---
title: "catch"
---

# Keyword: `catch`

Represents the safe block of code to execute after a `try` block fails. _Used in chain with the [`try` keyword](/docs/keywords/try)._

```
try {
    # ...
} safe error {
    bark("Some error occured: " + error);
}
```

`catch` takes an `<indentifier>` as the error output, where `<indentifier>` is a string type with the encountered error inside.

```
try {
    1 / 0;
} catch division_error {
    bark(division_error); # output: division by 0
}
```
