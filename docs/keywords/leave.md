---
title: "leave"
---

# Keyword: `leave`

Stop a [walk](/docs/keywords/walk) or [while](/docs/keywords/while) loop.

```
walk i = 0 through 10 {
    if i == 5 {
        leave; # stops the loop entirely and exits
    }
}

# 'leave' can also be used on while loops

while true {
    bark("This loop is only ran once");

    leave;
}
```
