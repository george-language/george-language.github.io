---
title: "number"
---

# Type: `number`

Primitive data type that represents any numerical value.

```
obj x = 10; # whole
obj y = 10.0; # decimal
```

Each number is stored as a 64 bit floating point, meaning the number type can be stored both as an integer or float.

# Operations

## `isnumber(value)`
Returns `true` if `value` is a number.

```
obj x = 10;

bark(isnumber(x)); # true!
```

## `isdecimal(num)`
Returns `true` if `num` has a decimal place.

```
obj x = 1.1;

bark(isdecimal(x)); # true!
```
