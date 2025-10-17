---
title: "Chapter 6.1"
---

# Chapter 6.1: Errors

At some point, your program **will** fail. Whether it’s a missing a closing bracket, a typo, or trying to add a number to a string, errors happen.

But don’t worry, GLang won’t set your computer on fire when something goes wrong. Instead, it safely reports the issue right in your terminal.

```
1 / 0; # dividing by zero causes an error
```

And the output:

```sh
error: division by zero
    --> example.glang:1:6
     |
   1 | 1 / 0;
     |     ^
```

## What The Error Says

GLang highlights _exactly_ where things went wrong, showing you the offending line and character.

- `error:` tells you what error occured.
- `-->` indicates where and what file caused the issue.
- `^` shows what code stopped the program's execution

Sometimes, you’ll also get a helpful hint to steer you in the right direction:

```sh
error: variable name 'example' is undefined
    --> example.glang:1:1
     |
   1 | example
     | ^^^^^^^ help: define a variable with the syntax 'obj <variable name> = <value>;'
```

Nice start, kdog — this already reads clearly and has a good flow! Let’s tighten it up a bit, make the explanation a little more structured, and highlight *why* the traceback happens so readers really “get” it.

Here’s a refined version:

---

## Tracebacks

Sometimes, multiple errors appear at once. This is called a **traceback**. A traceback happens when an error is **propagated upward** through the code, from where it occurs to wherever the function was called.

For example, consider the `push` function:

```
push("", "");
```

Here, both arguments are strings, but `push` expects the first argument to be a **list**. GLang first detects the problem inside its library code, then reports it again at the point where you called the function.

That’s why you’ll see two errors:

```sh
error: argument 'list' must be type list
    --> library/fundamental/list.glang:7:9
     |
   7 |         uhoh("argument 'list' must be type list");
     |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

error: argument 'list' must be type list
    --> example.glang:1:1
     |
   1 | push("", "");
     | ^^^^^^^^^^^
```

The first error shows **where** the problem started (inside the GLang library). The second shows **where** it reached the code.
