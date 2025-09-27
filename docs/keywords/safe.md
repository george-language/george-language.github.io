---
title: "safe"
---

# Keyword: `safe`

Represents the "except" case of a try/except expression. _Used in chain with the [unsafe keyword](/docs/keywords/unsafe)._

```
unsafe {
    # ...
} safe error { # 'error' is a identifier containing the error as a string
    # code that is executed if 'unsafe' block fails
}
```
