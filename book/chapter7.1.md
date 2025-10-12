---
title: "Chapter 7.1"
---

# Chapter 7.1: Modules

As your program grows (we’re talking hundreds or even thousands of lines), keeping everything in one file can get _messy_. That’s why programmers love to break their code into smaller, organized pieces called **modules**.

A module is just another file that contains code you can reuse elsewhere. Think of it as a “mini-program” you can plug into your main one. For example, you might have modules like `utilities.glang` or `core.glang`.

You can load a module into your code using the `fetch` keyword.

```
fetch "path/to/my/module.glang";
```

Here, `fetch` imports everything from the module located at `"path/to/my/module.glang"`. Once imported, anything defined inside that file becomes available to the current one.

```
# module.glang
obj x = 10;
```

```
# main.glang
fetch "module.glang";

bark(x); # outputs 10
```

Because `fetch` expects a string, you can even build the path dynamically using string expressions.

```
# main.glang
obj extension = ".glang";
obj filename = "module";

fetch filename + extension;

bark(x);
```
