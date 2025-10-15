---
title: "Chapter 4.2"
---

# Chapter 4.2: Scope

When you create variables or functions, they don’t always live _everywhere_ in your program. Where something “lives” and can be accessed from is called its **scope**.

You can think of scope like a neighborhood:

> If a variable is defined inside one neighborhood (a function), it can’t just walk into another one unless it’s allowed.

```
func say_hi() {
    obj message = "Hello!";
    bark(message);
}

say_hi();
bark(message);  # message doesn’t exist here
```

Here, the variable `message` was created inside the function `say_hi`. That means it only exists within that function and nowhere else.

## Local Scope

Variables declared **inside** a function are called **local variables**.

They live only as long as the function is running.

```
func make_cookie() {
    obj dough = "Sweet dough";
    bark(dough);
}

make_cookie();
bark(dough);  # dough is gone, only existed inside make_cookie
```

Local scope keeps your code safe from accidental variable name collisions. Two different functions can both have a variable named `x`, and they won’t mess each other up.

```
func one() {
    obj x = 1;
    bark(x);
}

func two() {
    obj x = 2;
    bark(x);
}

one();  # outputs 1
two();  # outputs 2
```

## Global Scope

If you create a variable outside of any function, it’s considered **global**. That means every function can access it (unless it gets shadowed).

```
obj mood = "Happy";

func show_mood() {
    bark(mood);
}

show_mood();  # outputs "Happy"
```

If you redefine a variable with the same name **inside** a function, the inner one hides (or **shadows**) the global one, modifying it:

```
obj mood = "Happy";

func show_mood() {
    mood = "Angry";
    bark(mood);
}

show_mood();  # prints "Angry"
bark(mood);   # prints "Angry"
```

## Nested Scope

Functions can live inside other functions, inner functions can see variables from their outer ones, but not the other way around.

```
func outer() {
    obj outer_value = "Outside";

    func inner() {
        bark(outer_value);  # can see outer_value
    }

    inner();
}

outer();
bark(outer_value);  # not visible here
```

This is called **lexical scope**, meaning a function’s visibility is determined by where it was written, not where it’s called.
