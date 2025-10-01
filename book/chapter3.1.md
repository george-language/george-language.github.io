---
title: "Chapter 3.1"
---

# Chapter 3.1: If, Also If, and Otherwise

## Conditions

It is very common that programmers use conditions in their code. Conditions are a way to execute some amount of code if something meets a certain criteria. The `if` statement is a great example of that.

```
obj x = 10;

if x == 10 { # '==' is a operator to check if something equals another value
    bark("x is 10!"); # since x is 10, this code will always be ran inside the 'if' block.
}
```

`==` is what we call a **boolean operator**. These are different from math operators, as they compare two values instead of changing them.

- `==` compares two values to see if they are the same
- `!=` compares two values to see if they are not the same
- `>` compares two values to see if one is greater than another
- `<` compares two values to see if one is less than another
- `>=` compares two values to see if one is greater than or equal to another
- `<=` compares two values to see if one is less than or equal to another

The `if` statement takes a comparison (often called an expression) to determine if the value is true or false. If true, run the code, otherwise continue.

```
obj x = 10;

if x != 20 {
    bark("thank goodness, x is not 20!");
}
```

You might also want to do something otherwise if the first `if` statement fails. That can be done with the `otherwise` statement, following a `if` statement.

```
obj x = 10;

if x == 11 {
    bark("x is 11!");
} otherwise {
    bark("x is anything but 11!");
}
```

`otherwise` is often thought of as the "default" case. If any comparisons above are not true, `otherwise` will run. That means we can sandwich `alsoif` statements between to create **control flow** for our program!

```
obj x = 10;

if x == 0 {
    bark("x is 0!");
} alsoif x == 10 { # as many 'alsoif' as you like!
    bark("x is 10!");
} alsoif x == 20 {
    bark("x is 20!");
} otherwise {
    bark("x is anything but 0, 10, or 20!");
}
```

## Your Challenge 🤔

Use an `if` statement to determine if `x` is greater than or equal to 10, then output the message `"Control flow is easy!"`

::: details Answer
```
obj x = 10;

if x >= 10 {
    bark("Control flow is easy!");
}
```
:::
