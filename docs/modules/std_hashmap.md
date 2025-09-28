---
title: "std_hashmap"
---

# `std_hashmap`

`std_hashmap` is an implementation of the hashmap data type, also known as a dictionary or table.

_GLang doesn't actually hash the keys and values, it is rather the name used for this type._

```
fetch std_hashmap;

obj my_hashmap = hashmap();
hashmap_set(my_hashmap, "user", "bob");
hashmap_set(my_hashmap, "age", 23);
hashmap_set(my_hashmap, "birthday", "1/1/25");

obj birthday = hashmap_get(my_hashmap, "birthday");

bark(birthday); # output: 1/1/25
```

## `hashmap()`
Returns a newly constructed hashmap object.

```
fetch std_hashmap;

obj example = hashmap();
```

## `hashmap_set(hashmap_obj, key, value)`
Set `hashmap_obj`'s `key` to the specified `value`.

```
fetch std_hashmap;

obj example = hashmap();
hashmap_set(example, "key", "value");

bark(example);
```

## `hashmap_get(hashmap_obj, key)`
Get `hashmap_obj`'s corresponding value to `key`.

```
fetch std_hashmap;

obj example = hashmap();
hashmap_set(example, "key", "value");

bark(hashmap_get(example, "key")); # output: value
```

## `hashmap_remove(hashmap_obj, key)`
Removes `hashmap_obj`'s `key` and it's value.

```
fetch std_hashmap;

obj example = hashmap();
hashmap_set(example, "key", "value");
hashmap_remove(example, "key"); # empty hashmap because we removed the only key

bark(example);
```

## `hashmap_keys(hashmap_obj)`
Returns a list of `hashmap_obj`'s keys.

```
fetch std_hashmap;

obj example = hashmap();
hashmap_set(example, "key1", "value");
hashmap_set(example, "key2", "value");

obj keys = hashmap_keys(example);

bark(keys); # output: [key1, key2]
```

## `hashmap_values(hashmap_obj)`
Returns a list of `hashmap_obj`'s values.

```
fetch std_hashmap;

obj example = hashmap();
hashmap_set(example, "key1", "value1");
hashmap_set(example, "key2", "value2");

obj values = hashmap_keys(example);

bark(values); # output: [value1, value2]
```

## `bark_hashmap(hashmap_obj)`
Display `hashmap_obj` in the terminal (pretty printing)

```
fetch std_hashmap;

obj example = hashmap();
hashmap_set(example, "key1", "value1");

bark_hashmap(example);

# output:
# {
#     key1: value1
# }
```
