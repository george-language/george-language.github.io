---
title: "Chapter 2.2"
---

# Chapter 2: Operators

## Math

Believe it or not, your computer is a giant calculator. That's why it's important that programming languages give you the option to do math operations (e.g. 1 + 2)

GLang gives you a set of operators to perform these operations on numerical values, often called operands.

## The "+" Operator

The plus sign (+) will add two values together.

```glang
obj x = 1 + 1; # x is 2
```

## The "-" Operator

The minus sign (-) will subtract two values from each other.

```glang
obj x = 2 - 1; # x is 1
```

## The "*" Operator

The star sign (*) will multiply two values by each other.

```glang
obj x = 2 * 2; # x is 4
```

## The "/" Operator

The forward slash (/) will divide two values by each other.

```glang
obj x = 8 / 2; # x is 4
```

## The "^" Operator

The carrot sign (^) will power two values by each other.

```glang
obj x = 10 ^ 2; # x is 100
```

## The "%" Operator

The percent sign (%) will give you the remainder after dividing two numbers (called the modulo).

```glang
obj x = 10 % 3; # x is 1
```

## Math Expressions

Combining operators, we can additionally use parenthesis to perform math expressions. If you are familiar with basic math, you may remember PEMDAS. GLang, being a programmatic calculator, implements PEMDAS to the core.

```glang
obj x = 2 * (2 + 2); # x is 8
```

## Your Challenge 🤔

Use GLang's math operators to create a variable named `x` with the value of subtracting 50 from 100 and dividing the result by 2.

::: details Answer
```glang
obj x = (100 - 50) / 2;
```
:::
