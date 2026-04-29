---
title: "builtin"
---

# Type: `built-in-function`

Unique type representing a built-in function included with the language.

Built-in functions are implemented in GLang's Rust backend, meaning they are generally faster and more stable. There are 12 built-in functions total.

# Operations

## `isbuiltin(value)`
Returns `true` if `value` is a built-in function.

```glang
bark(isfunction(bark)); # true!
```

# List of Built-Ins

## `bark(x)`
Display a value in the terminal.

```glang
obj x = 10;

bark(x); # output: 10
```

## `chew(msg)`
Get standard input (stdin) from the terminal.

```glang
obj input = chew("Enter some text: ");

bark("You typed: " + input);
```

## `type(value)`
Returns the type of `value`.

```glang
bark(type("")) # output: string
```

## `tostring(value)`
Returns the string representation of `value`.

```glang
obj x = 10;

bark("x is equal to: " + tostring(x)); # output: x is equal to: 10
```

## `tonumber(string)`
Converts `string` to the number type.

```glang
obj pi = "3.14";
obj actual_pi = tonumber(pi);

bark(actual_pi) # output: 3.14
```

## `length(value)`
Returns the length of `value` (where `value` is either the list or string type.)

```glang
obj x = "this string is long";
obj y = [1, 2, 3];

# the length of all the characters in a string
bark(length(x)); # output: 19

# the length of all the elements in a list
bark(length(y)); # output: 3
```

## `copy(value)`
Creates a clone of `value`.

```glang
obj x = [1, 2, 3];
obj y = copy(x);

add(x, 4);

bark(x); # output: [1, 2, 3, 4]
bark(y); # output: [1, 2, 3]
```

## `clear(value)`
Clears a value (if `value` is of the list or string type)

```glang
obj x = [1, 2, 3];

clear(x);

bark(x); # output: []
```

## `split(str, pattern)`
Splits `str` at `pattern`, generating a list of string sequences.

```glang
obj x = "A B C";
obj y = split(x, " ");

bark(y); # output: [A, B, C]
```

## `round(num)`
Rounds `num` to the nearest place value.

```glang
obj x = 1.5;

bark(round(x)); # output: 2
```

## `dig(file_name)`
Reads and returns the contents of `file_name`.

```glang
obj x = dig("example.txt");

bark(x); # output: <contents of the specified file>
```

## `bury(file_name, contents)`
Writes `file_name` with `contents` inside.

```glang
bury("example.txt", "These are some contents in a file");
```

## `uhoh(msg)`
Throws an error to the interpreter with the specified details and stops the program.

```glang
if 1 == 2 {
    uhoh("math is broken!!");
}
```
