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
   in: example.glang:1:6
   +
   |
   | 1 / 0;
   |     ^
   |
   +
process finished with exit code -1
```

## What The Error Says

GLang highlights _exactly_ where things went wrong, showing you the offending line and character.

Sometimes, you’ll also get a helpful hint to steer you in the right direction:

```sh
error: variable name 'example' is undefined
   in: example.glang:1:1
   +
   |
   | example
   | ^^^^^^^
   |
   + --> help: you can define a variable like 'obj my_variable = 1;'
process finished with exit code -1
```
