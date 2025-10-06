---
title: "Chapter 3.2.1"
---

# Chapter 3.2.1: Next and Leave

In the last chapter, we explored `walk` and `while` loops and how to create them. GLang gives you further control of these loops with the `next` and `leave` keywords.

## `next`

If you want to skip to the next part of a loop (next iteration), you can use the `next` keyword anywhere in a `walk` or `while` loop.

```
# walk
walk i = 0 through 10 {
    if i == 5 {
        next;
    }

    bark(i); # outputs 0, 1, 2, 3, 4, 6, 7, 8, 9 (skipping 5)
}

# while
obj x = 0;

while x != 10 {
    if x == 4 {
        next;
    }

    x = x + 1; # x is incremented as 0, 1, 2, 3, 4, 6, 7, 8, 9, 10
}
```

## `leave`

If you want to stop a loop, you can use the `leave` keyword anywhere in a `walk` or `while` loop.

```
# walk
walk i = 0 through 10 {
    if i == 5 {
        leave;
    }

    bark(i); # outputs 0, 1, 2, 3, 4 (stopping at 5)
}

# while
obj x = 0;

while x != 10 {
    if x == 4 {
        leave;
    }

    x = x + 1; # x is incremented as 0, 1, 2, 3, 4
}
```
