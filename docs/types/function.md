---
title: "function"
---

# Type: `function`

A set of code that can be "called" to run it.

```
func example() {
    bark("this code is only ran when we call the function")
}

example(); # call the function
```

GLang includes a set of pre-made functions, different from [built-in functions](/docs/types/builtin), as the pre-made functions are written in GLang itself.

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

## `isstring(value)`
Returns `true` if `value` is a string.

```
obj x = "This is a string.";

bark(isstring(x)); # true!
```

## `islist(value)`
Returns `true` if `value` is a list.

```
obj x = [1, 2, 3];

bark(islist(x)); # true!
```

## `isfunction(value)`
Returns `true` if `value` is a function.

```
bark(isfunction(push)); # true!
```

## `isbuiltin(value)`
Returns `true` if `value` is a built-in function.

```
bark(isfunction(bark)); # true!
```

## `push(list, value)`
Adds the `value` to `list`.

```
obj x = [1, 2, 3];
push(x, 4);

bark(x); # output: [1, 2, 3, 4]
```

## `append(list_a, list_b)`
Combine a list with another list by copying `list_b`'s elements into `list_a`.

```
obj x = [1, 2, 3];
obj y = [4, 5, 6];
append(x, y);

bark(x); # output: [1, 2, 3, 4, 5, 6]
```

## `remove(list, index)`
Removes the value at `index` inside `list` (optionally returns the removed value if necessary).

```
obj x = [1, 2, 3];
remove(x, 0);

bark(x); # output: [2, 3]
```

## `retrieve(list, index)`
Returns the value at `index` inside `list`.

```
obj x = [1, 2, 3];
obj value_in_list = retrieve(x, 0);

bark(value_in_list); # output: 1
```

## `join(string_a, string_b)`
Combine two strings together and return the new copy.

```
obj x = "Hello, ";
obj y = "world!";

bark(join(x, y)); # output: Hello, world!
```

## `startswith(str, chars)`
Returns `true` if `str` begins with `chars`.

```
obj x = "12345";

bark(startswith(x, "1")); # true!
```

## `endswith(str, chars)`
Returns `true` if `str` ends with `chars`.

```
obj x = "12345";

bark(endswith(x, "5")); # true!
```

## `charat(str, index)`
Returns the character at `index` of `string`.

```
obj x = "12345";

bark(charat(x, 0)); # output: 1
```

## `clear(value)`
Clears a list or string and returns a new copy.

### list

```
obj x = [1, 2, 3, 4];
obj x = clear(x);

bark(x); # output: []
```

### string

```
obj x = "This is a string";
obj x = clear(x);

bark(x); # output:
```

## `reverse(value)`
Reverses a list or string.

- Lists are reversed **in place** (no new copy).
- Strings are recreated in reverse.

### list

```
obj x = [1, 2, 3, 4];
reverse(x);

bark(x); # output: [4, 3, 2, 1]
```

### string

```
obj x = "This is a string";
obj x = reverse(x);

bark(x); # output: gnirts a si sihT
```

## `contains(value, object)`
Returns `true` if `value` contains the specified `object`.

- On a string, `object` is treated as the set of characters or substring to search for.
- On a list, `object` is treated as the element to search for.

### list

```
obj x = [1, 2, 3, 4];

bark(contains(x, 1)); # true!
```

### string

```
obj x = "Hello, World!";

bark(contains(x, "Hello")); # true!
```
