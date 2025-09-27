---
title: "fetch"
---

# Keyword: `fetch`

Import an external `.glang` file. _If you are wanting to learn more about modules, see our [section on modules](/docs/modules/)._

```
fetch "path/to/my/module.glang";

my_modules_function();
```

The `fetch` keyword expects an expression resulting in a string.

```
fetch "module" + ".glang"; # this works

obj my_module = "test.glang";
fetch my_module; # this also works
```
