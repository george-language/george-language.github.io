---
title: "Chapter 5.2"
---

# Chapter 5.2: Strings

A string is also considered a collection, due to the fact it is a **collection of characters**.

We can perform many string operations (similar to lists) like indexing, reversing, and even joining!

```
obj my_string = "12345";
obj first_char = charat(my_string, 0); # '1'
```

## String Operations

The string type actually doesn't have the ability to modify in place; i.e. it is **immutable**. For most string operations, you actually create a new copy that can be assigned to something.

Reversing a string is a great example, as the string is copied, then recreated in reverse.

```
obj forwards = "abcd";
obj backwards = reverse(forwards); # 'dcba'
```

Strings support some mathematical operands too. The `+` operand adds two strings together, and you can even use the `*` operator to multiply a string.

```
obj hello_world = "Hello, " + "world!"; # 'Hello, world!'
obj excited_happy_birthday = "Happy Birthday!" * 3; # 'Happy Birthday!Happy Birthday!Happy Birthday!'
```

## Other String Operations

Just like lists, strings come with a bunch of built-in operations other than the ones listed here. A full list of available operations is in the [string documentation](/docs/types/string#operations).
