---
title: "string"
---

# Type: `string`

Represents UTF-8 encoded text.

```
obj string = "This is a string!";

obj emoji = "⚠️🤔🏃‍♂️‍➡️🎯"; # utf-8 encoded, meaning we can add emojis and any supported chars!

# strings can also be wrapped over multiple lines
obj multiline = "
This
is
multiple
lines
of
text
";

# to add quotes inside a string use \"
obj string_with_quotes = "What's up \"bro\"";
```

# Operations

## `isstring(value)`
Returns `true` if `value` is a string.

```
obj x = "This is a string.";

bark(isstring(x)); # true!
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

## `clear(string)`
Clears `string` and returns a new copy.

```
obj x = "This is a string";
obj x = clear(x);

bark(x); # output:
```

## `reverse(string)`
Reverses the characters of `string`. Strings are recreated in reverse and not modified in place.

```
obj x = "This is a string";
obj x = reverse(x);

bark(x); # output: gnirts a si sihT
```

## `contains(string, object)`
Returns `true` if `string` contains the specified `object`. `object` is treated as the set of characters or substring to search for.

```
obj x = "Hello, World!";

bark(contains(x, "Hello")); # true!
```
