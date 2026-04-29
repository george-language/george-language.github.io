---
title: "list"
---

# Type: `list`

A heap allocated collection of objects.

```glang
obj x = [1, 2, 3];

bark(x);
```

# Operations

## `islist(value)`
Returns `true` if `value` is a list.

```glang
obj x = [1, 2, 3];

bark(islist(x)); # true!
```

## `add(list, value)`
Adds the `value` to `list`.

```glang
obj x = [1, 2, 3];
add(x, 4);

bark(x); # output: [1, 2, 3, 4]
```

## `combine(list_a, list_b)`
Combine a list with another list by copying `list_b`'s elements into `list_a`.

```glang
obj x = [1, 2, 3];
obj y = [4, 5, 6];
combine(x, y);

bark(x); # output: [1, 2, 3, 4, 5, 6]
```

## `remove(list, index)`
Removes the value at `index` inside `list` (optionally returns the removed value if necessary).

```glang
obj x = [1, 2, 3];
remove(x, 0);

bark(x); # output: [2, 3]
```

## `get(list, index)`
Returns the value at `index` inside `list`.

```glang
obj x = [1, 2, 3];
obj value_in_list = get(x, 0);

bark(value_in_list); # output: 1
```

## `contains(list, object)`
Returns `true` if `list` contains the specified `object`. `object` is treated as the element to search for.

```glang
obj x = [1, 2, 3, 4];

bark(contains(x, 1)); # true!
```

## `reverse(list)`
Reverses `list` in place.

```glang
obj x = [1, 2, 3, 4];
reverse(x);

bark(x); # output: [4, 3, 2, 1]
```
