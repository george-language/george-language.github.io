---
title: "walk"
---

# Keyword: `walk`
A loop running iterator 'x' length 'n' through 'n'.

```glang
# walk [name] = [starting value] through [ending value] { ... }
# walk [name] through [iterator] { ... }

# range loop (start through end) 
walk i = 0 through 10 {
    bark(i); # 'i' will be printed 10 times each incremented by one step (0, 1, 2, ... 9)
}

# iterator loop (iterate through an iterator)
walk i through [1, 2, 3] {
    bark(i); # 'i' will be printed as each element of the list (1, 2, 3)
}
```

Optionally, add the step keyword to determine the amount 'x' is incremented by.

```glang
# 'step' can only be used on range loops
walk i = 0 through 10 step = 2 {
    bark(i); # 'i' will be printed 5 times each incremented by two values (0, 2, 4, 6, 8)
}
```
