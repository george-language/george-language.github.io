---
title: "std_math"
---

# `std_math`

`std_math` is an implementation of math functions and variables.

```glang
fetch std_math;

bark(math_pi); # output: 3.14159 ...
```

## `math_pi`
Number object representing the first 15 digits of PI.

```glang
fetch std_math;

bark(math_pi);
```

## `math_e`
Number object representing the first 15 digits of Euler's number.

```glang
fetch std_math;

bark(math_e);
```

## `math_radians(degrees)`
Returns the value of `degrees` converted to radians.

```glang
fetch std_math;

bark(math_radians(180));
```

## `math_degrees(radians)`
Returns the value of `radians` converted to degrees.

```glang
fetch std_math;

bark(math_radians(180));
```

## `math_abs(x)`
Returns the absolute value of `x`.

```glang
fetch std_math;

bark(math_abs(1));
```

## `math_sqrt(x)`
Returns the square root of `x`.

```glang
fetch std_math;

bark(math_sqrt(25));
```

## `math_sin(x)`
Returns the sine value of `x`, where `x` is in the radian format.

```glang
fetch std_math;

bark(math_sin(1));
```

## `math_cos(x)`
Returns the cosine value of `x`, where `x` is in the radian format.

```glang
fetch std_math;

bark(math_cos(1));
```

## `math_tan(x)`
Returns the tangent value of `x`, where `x` is in the radian format.

```glang
fetch std_math;

bark(math_cos(1));
```
