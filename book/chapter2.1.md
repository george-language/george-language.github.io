---
title: "Chapter 2.1"
---

# Chapter 2: Variables & Data Types

## Types

GLang gives you the option to store data in the form of a type. This data can be accessed via a variable (a little object stored in your computer's memory)

There are three primary types in GLang, **number**, **string**, and **list**. The number type is hinted by the name, a number.

```
10
```

The string type may be a little confusing, but its actually a collection of characters (a.k.a. a string of characters)

We can actually use this to store text of any length - from your favorite quote to an 8 page essay, the string type can hold it.

```
"This is a string of text. We can add emojis 😼, special characters !#@$^#, and even other languages 你好."
```

Lastly there's the list type, an infinitely grow-able "storage container" of items. The list type can hold every other type, multiples of it, and even itself.

```
[1, 2, 3, 4, 5]
```

We'll talk a bit more specially on this type later on, but for now, think of it as a bag of groceries, it can hold a lot of things!

## Variables

The most important part of programming is storing data for later. Programmers often do this by creating a variable; a named object stored in memory pointing to the type we created.

```
obj x = 10;
```

Here, we use the word `obj` to tell GLang we are creating a variable (object). We then give it the name, `x`, and assign the value to `10` (our awesome number type!) This name, `x` is stored in memory for use anywhere in the program.

To change a variable’s value, just assign a new value to it (without `obj`)

```
x = 20;
```

The cool thing about variables is the ability to name them other things than `x`. Variable names can:

- contain letters, numbers, and underscores
- not contain spaces or special symbols (like ! or $)

```
obj my_favorite_number = 69;
obj _____a_variable_with_a_lot_of_underscores_____ = "A lot of underscores";
obj MY_3_FAVORITE_FOODS = ["Cake", "Pizza", "Burgers"];
```
