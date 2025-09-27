---
title: "next"
---

# Keyword: `next`

Skip to the next iteration of a [walk](/docs/keywords/walk) or [while](/docs/keywords/while) loop.

```
walk i = 0 through 10 {
    if i == 5 {
        next; # skips to the next iteration
    }
}

# 'next' can also be used on while loops

while true {
    bark("This loop is ran infinitely!!");

    next;
}
```
