---
title: "walk"
---

# Keyword: `walk`
A loop running iterator 'x' length 'n' through 'n'. Programmers might be familiar with the for loop.

```glang
walk i = 0 through 10 {
    bark(i); # 'i' will be printed 10 times each incremented by one step (0, 1, 2, ... 9)
}
```

Optionally, add the step keyword to determine the amount 'x' is incremented by.

```glang
walk i = 0 through 10 step = 2 {
    bark(i); # 'i' will be printed 5 times each incremented by two values (0, 2, 4, 6, 8)
}
```
