---
title: "Chapter 5.1"
---

# Chapter 5.1: Lists

The list type is a flexible container type that can **store multiple values** in order. It can grow, shrink, and even reverse its contents. You can store any type inside a list, including: numbers, strings, functions, or even other lists. Each value is easily accessed using **indexing**.

## Creating a List

You can create a list by placing values inside square brackets `[]`, separated by commas:

```glang
obj my_favorite_foods = [
    "Pizza",
    "Burgers",
    "Sandwiches",
];
```

## Adding Values to a List

To add a value to the end of a list, use the `add` function. It takes two arguments: the list you want to modify, and the value to add.

```glang
obj five_numbers = [1, 2, 3, 4];
add(five_numbers, 5); # 'five_numbers' is now [1, 2, 3, 4, 5]
```

## Accessing Values with Indexing

Each item in a list has an **index**, which starts at `0` and goes up to `length - 1`.
You can retrieve a value at a specific index using the `get` function:

```glang
obj list_with_four_elements = [1, 2, 3, 4];
obj first_element = get(list_with_four_elements, 0);

bark(first_element); # 1
```

## Other List Operations

Lists come with a bunch of built-in operations, like `combine`, `remove`, `reverse`, and more that make them super powerful for managing data. A full list of available operations is in the [list documentation](/docs/types/list#operations).

## Your Challenge 🤔

Use a list and `walk` loop to store the user input of `Enter some text to store:` 5 times.

::: details Answer
```glang
obj user_inputs = [];

walk i = 0 through 5 {
    obj input = chew("Enter some text to store: ");
    add(user_inputs, input);
}
```
:::
