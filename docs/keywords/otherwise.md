---
title: "otherwise"
---

# Keyword: `otherwise`

Used as the default interrupt of an [if statement](/docs/keywords/if).

```glang
if 1 == 2 { # this condition is not true, so the otherwise block will be executed
    bark("math broke!");
} otherwise {
    bark("all systems working as usual");
}
```
