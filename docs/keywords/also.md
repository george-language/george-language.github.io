---
title: "also"
---

# Keyword: `also`

Execute code if another condition is met (used in chain with if statements.)

```glang
# if [expression 1] { ... } also if [expression 2] { ... }

obj x = tonumber(chew("Enter a number: "));

if x == 1 {
    bark("x is 1, please guess higher.");
} also if x == 10 {
    bark("x is correct. You win!");
}
```
