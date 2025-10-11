---
title: "alsoif"
---

# Keyword: `alsoif`

Execute code if another condition is met (used in chain with if statements.)

```
obj x = tonumber(chew("Enter a number: "));

if x == 1 {
    bark("x is 1, please guess higher.");
} alsoif x == 10 {
    bark("x is correct! you win!");
}
```
