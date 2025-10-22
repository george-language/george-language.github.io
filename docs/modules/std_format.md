---
title: "std_format"
---

# `std_format`

The `std_format` module is an implementation of string formatting with curly braces (`{}`)

```glang
fetch(std_format);

obj my_string = format("Hello, {}!", "George");

bark(my_string); # output: Hello, George!
```

## `format(str, value)`
Returns `value` placed inside of `str` where `str` contains curly braces (`{}`)

```glang
fetch(std_format);

# we can have as many braces as needed
bark(format("Hello, {}!", "George"));
```
