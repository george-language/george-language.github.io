---
title: "Chapter 4.1"
---

# Chapter 4.1: Functions

If you want your program to stay organized and readable, it’s best to group related code into **functions**.

Functions are reusable blocks of code that can be executed at any time in your program. They can take in values (called **arguments**) and can optionally return a result (a **returned value**).

```glang
func my_function(argument) {
    bark(argument);
}

my_function("Hello, world!");
```

## Function Definitions

Creating your own function is simpler than it looks.

You start with the `func` keyword, give it a name (just like a variable), then specify any arguments it should take, followed by the code to run.

```glang
func the_name_of_a_function(argument1, argument2) {
    # ...
}
```

Arguments are objects that the function receives when it’s called.
These can then be used within the function’s code.

```glang
func define_x(value) {
    obj x = value;
}
```

If you want your function to send something back when it’s done, use the `give` keyword to **return** a value.

```glang
func return_value(value) {
    give value;
}

bark(return_value("Hello, world!"));  # outputs 'Hello, world!'
```

## Function Calls

Once a function is defined, it won’t run until you **call** it. To call a function, use its name followed by parentheses `()` and include arguments if the function expects them.

_If it doesn’t take any arguments, just call it with empty parentheses._

```glang
func my_function(x) {
    give(x + 1);
}

obj ten_plus_one = my_function(10);
```

When calling functions, **arguments are positional**. That means if a function expects 2 arguments, you must pass exactly 2, not more, not less.

```glang
func no_args() {
    give;
}

no_args("Secret argument"); # this line will cause an error
```
