---
title: "Chapter 2.1"
---

# Chapter 2: Variables & Data Types

## Types

GLang gives you the option to store data in the form of a type. This data can be accessed via a variable (a little object stored in your computer's memory)

There are three primary types in GLang, **number**, **string**, and **list**. The number type is hinted by the name, a number.

```glang
10
```

The string type may be a little confusing, but its actually a **collection of characters** (a.k.a. a string of characters)

We can use this to store text - from your favorite quote to an 8 page essay, the string type can hold it. Strings are heap allocated, meaning we can store large amounts of characters.

```glang
"This is a string of text. We can add emojis 😼, special characters !#@$^#, and even other languages 你好."
```

_Since strings are UTF-8 encoded, you can use any UTF-8 supported code point inside of strings. Learn more about UTF-8 [here](https://en.wikipedia.org/wiki/UTF-8)_

Lastly there's the list type, a dynamic storage container of items. The list type can hold every other type, multiples of it, and even itself. Lists are heap allocated, allowing you to grow lists to massive amounts of items.

```glang
[1, 2, 3, 4, 5]
```

We'll talk more about this type later on in the book, but for now, think of it as a cargo ship; each container is an item (or "element") in the list.

## Variables

One of the most important parts of programming is storing data. Programmers often do this by creating a **variable**.

Variables allow us to store types with *names* in memory. Instead of telling the computer "give me the value of memory address 0x7ffe5367e044", we can just reference it with a variable!

```glang
obj x = 10;
```

Here, we use the keyword `obj` to tell GLang we are creating a variable. We then give it the name, `x`, and assign the value to `10` (the number type) This name, `x` is stored in memory for use anywhere in the program.

To change a variable’s value, just assign a new value to it (without the `obj` keyword)

```glang
x = 20;
```

The cool thing about variables are their ability to have names other than `x`. Variable names can:

- Contain letters, numbers, and underscores
- Not contain spaces or special symbols (like ! or $)

```glang
obj my_favorite_number = 69;
obj _____a_variable_with_a_lot_of_underscores_____ = "A lot of underscores";
obj MY_3_FAVORITE_FOODS = ["Cake", "Pizza", "Burgers"];
```

## Constants

Additionally, there are **constants**. Much similar to variables, constants can also store data - just in a static form. This means we can never change a constant or it's data once it is created.

```glang
stay X = 10;

X = 20; # this line causes an error
```

It is preferred to keep a constant's name fully uppercase, as they are best used for values you use everywhere in your program.

```glang
stay MAX_STORAGE_AMOUNT = 240; # this way, 'MAX_STORAGE_AMOUNT' stands out from 'max_storage_amount'
```
