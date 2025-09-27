---
title: "unsafe"
---

# Keyword: `unsafe`

Represents the "try" case of a try/except expression. _Used in chain with the [safe keyword](/docs/keywords/safe)_.

```
unsafe {
    # dangerous code
    # 1 / 0
} safe _ {
    # ...
}
```
