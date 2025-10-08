---
title: "Chapter 5.3"
---

# Chapter 5.3: Unique Collections

GLang provides a unique collection in its standard library, [`std_hashmap`](/docs/modules/std_hashmap).

The `std_hashmap` module isn’t built in by default, so you’ll need to import it using the `fetch` keyword. We’ll cover `fetch` in more detail later, but for now, just add it to the top of your file.

```
fetch std_hashmap;

obj my_hashmap = hashmap();
hashmap_set(my_hashmap, "name", "Bob");
hashmap_set(my_hashmap, "favorite-color", "Green");
````

A hashmap is a collection of key–value pairs, think of it like a small, efficient lookup table.

| Key              | Value   |
| ---------------- | ------- |
| `name`           | `Bob`   |
| `favorite-color` | `Green` |

You can **set** new entries by providing a key and value, or **get** existing values by their corresponding keys.

```
fetch std_hashmap;

obj my_hashmap = hashmap();
hashmap_set(my_hashmap, "name", "Bob");

obj name = hashmap_get(my_hashmap, "name"); # 'Bob'
```
