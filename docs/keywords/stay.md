---
title: "stay"
---

# Keyword: `stay`

Create a named constant with a value.

```
# stay [name] = [value]

stay EXAMPLE = "This value can never be changed or reassigned";
```

The value of an constant can never be modified.

```
stay X = 10;
stay X = 20; # this line causes an error
obj X = 20; # this line will also cause an error
```

In practice, it is best to make the constant name all uppercase, and keep it globally available.

```
stay MY_CONSTANT = 10;
```
