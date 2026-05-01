---
title: "Chapter 3.1"
---

# Chapter 3.1: If, Also If, and Otherwise

## Booleans

Before introducing conditional programming, it's important to understand boolean logic. 

```glang
obj x = true;
obj y = false;
obj z = null;
```

`true` is 1, and is understood as the true value. `false` is 0, and is understood as the false value. `null` is 0 as well, but is understood as the "none" or null value, meaning nothing.

You can get `true` or `false` by using **boolean operators**. These are different from math operators, as they compare values instead of modifying them.

- `==` compares two values to see if they are the same
- `!=` compares two values to see if they are not the same
- `>` compares two values to see if one is greater than another
- `<` compares two values to see if one is less than another
- `>=` compares two values to see if one is greater than or equal to another
- `<=` compares two values to see if one is less than or equal to another
- `and` compares two values to see if both conditions are true
- `or` compares two values to see if one (or both) conditions is true

_Additionally, `not` flips a value (true -> false, false -> true)_

```glang
obj x = 10 == 10; # true, 10 is equal to 10
bark(x) # 1 (true)

bark(not true); # 0 (false)
```

## Conditions

Conditions are a way to execute code if something is true, met by a certain criteria usually from boolean operators. The `if` statement is a great example.

```glang
obj x = 10;

if x == 10 { # x == 10, true
    bark("x is 10!"); # since x is 10, this code will always be ran.
}
```

The `if` statement takes a comparison (or any expression) to determine if the value is true or false/null. If true, run the code, otherwise ignore and continue.

```glang
obj x = 10;

if x != 20 {
    bark("thank goodness, x is not 20!");
}
```

You might also want to run code if the first `if` statement fails. That can be done with the `otherwise` statement, following a `if` statement.

```glang
obj x = 10;

if x == 11 {
    bark("x is 11!");
} otherwise {
    bark("x is anything but 11!");
}
```

`otherwise` is often thought of as the "default" case. If any comparisons above are not true, `otherwise` will run. That means we can place `also if` statements between `if` and `otherwise` to create proper **control flow** for our program.

```glang
obj x = 10;

if x == 0 {
    bark("x is 0!");
} also if x == 10 { # as many 'also if' statements as necessary
    bark("x is 10!");
} also if x == 20 {
    bark("x is 20!");
} otherwise {
    bark("x is anything but 0, 10, or 20!");
}
```

## Your Challenge 🤔

Use an `if` statement to determine if `x` is greater than or equal to 10, then output the message `"Control flow is easy!"`

::: details Answer
```glang
obj x = 10;

if x >= 10 {
    bark("Control flow is easy!");
}
```
:::
