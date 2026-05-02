---
title: "std_random"
---

# `std_random`

The `std_random` module is an implementation of the LCG seed-based algorithm, allowing for random number generation.

```glang
fetch std_random;

obj my_num = random_number();

bark(my_num); # outputs a completely random number
```

## `random_number()`
Returns a pseudo-random number greater than 0.

```glang
fetch std_random;

bark(random_number());
```

## `random_range(a, b)`
Returns a pseudo-random number greater than 0 between `a` and `b`.

```
fetch std_random;

bark(random_range(1, 10)); # random number is between 1 and 10
```
