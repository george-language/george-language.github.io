---
title: "list"
---

# Type: `list`

Infinitely growable collection of values.

```
obj x = [1, 2, 3];

bark(x);
```

# Operations

## `islist(value)`
Returns `true` if `value` is a list.

```
obj x = [1, 2, 3];

bark(islist(x)); # true!
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

## `contains(list, object)`
Returns `true` if `list` contains the specified `object`. `object` is treated as the element to search for.

```
obj x = [1, 2, 3, 4];

bark(contains(x, 1)); # true!
```

## `reverse(list)`
Reverses `list` **in place** (no new copy).

```
obj x = [1, 2, 3, 4];
reverse(x);

bark(x); # output: [4, 3, 2, 1]
```

## `clear(list)`
Clears `list` and returns a new copy.

```
obj x = [1, 2, 3, 4];
obj x = clear(x);

bark(x); # output: []
```
