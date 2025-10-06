---
title: "Chapter 4.1"
---

# Functions

If you want your program to have some sort of organization, it is best to put sections of code into functions.

Functions are essentially re-usable blocks of code that can be executed any moment in a program. You can give them objects to use (often called arguments) and they can give a result after execution (returned value).

```
func my_function(argument) {
    bark(argument);
}

my_function("Hello, world!");
```

## Function Definitions

As complex as it may seem, creating your own functions is relatively simple. To start, you give it a name, similar to variables, followed by arguments and the code to execute.

```
func the_name_of_a_function(argument1, argument2) {
    # ...
}
```

Arguments are objects you can give the function when calling it (executing it). The arguments can be used inside the function's code, where the code will be ran when calling the function.

```
func define_x(value) {
    obj x = value;
}
```

Inside the function's code, you have the option to return a value from the function when it is called with the `give` keyword.

```
func return_value(value) {
    give value;
}

bark(return_value("Hello, world!")); # outputs 'Hello, world!'
```

## Function Calls

After a function is defined, you may need to use it. The function's code is **never** ran until you call it.

To call your function, use it's name followed by parenthesis with the arguments you gave your function (if none, don't provide any arguments.)

```
func my_function(x) {
    give(x + 1);
}

obj ten_plus_one = my_function(10);
```

During calls, arguments are positional. This means we can't give a function with 2 arguments 10 arguments. If function takes _x_ arguments, give it _x_ arguments.

```
func no_args() {
    give;
}

no_args("Secret argument"); # this line will cause an error
```

---
title: "Chapter 4.1"
---

# Chapter 4.1: Functions

If you want your program to stay organized and readable, it’s best to group related code into **functions**.

Functions are reusable blocks of code that can be executed at any time in your program. They can take in values (called **arguments**) and can optionally return a result (a **returned value**).

```
func my_function(argument) {
    bark(argument);
}

my_function("Hello, world!");
```

## Function Definitions

Creating your own function is simpler than it looks.

You start with the `func` keyword, give it a name (just like a variable), then specify any arguments it should take, followed by the code to run.

```
func the_name_of_a_function(argument1, argument2) {
    # ...
}
```

Arguments are objects that the function receives when it’s called.
These can then be used within the function’s code.

```
func define_x(value) {
    obj x = value;
}
```

If you want your function to send something back when it’s done, use the `give` keyword to **return** a value.

```
func return_value(value) {
    give value;
}

bark(return_value("Hello, world!"));  # outputs 'Hello, world!'
```

## Function Calls

Once a function is defined, it won’t run until you **call** it.

To call a function, use its name followed by parentheses `()` and include arguments if the function expects them.

If it doesn’t take any arguments, just call it with empty parentheses.

```
func my_function(x) {
    give(x + 1);
}

obj ten_plus_one = my_function(10);
```

When calling functions, **arguments are positional**. That means if a function expects 2 arguments, you must pass exactly 2, not more, not less.

```
func no_args() {
    give;
}

no_args("Secret argument"); # this line will cause an error
```
