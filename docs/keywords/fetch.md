---
title: "fetch"
---

# Keyword: `fetch`

Import an external `.glang` file.

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

Upon importing, objects are only appended to the current scope.

```
func import() {
    fetch std_math;
}

import();

bark(math_pi); # we cant access this, it's only inside of the 'import' function
```
