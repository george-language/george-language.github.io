---
title: "builtin"
---

# Type: `built-in-function`

Unique type representing a built-in function included with the language.

Built-in functions are implemented in GLang's Rust backend, meaning they are generally faster and more stable. GLang also includes a set of pre-made functions listed [here](/docs/types/function). There are 12 built-in functions total.

# Operations

## `isbuiltin(value)`
Returns `true` if `value` is a built-in function.

```
bark(isfunction(bark)); # true!
```

# List of Built-Ins

## `bark(x)`
Display a value in the terminal.

```
obj x = 10;

bark(x); # output: 10
```

## `chew(msg)`
Get standard input (stdin) from the terminal.

```
obj input = chew("Enter some text: ");

bark("You typed: " + input);
```

## `type(value)`
Returns the type of `value`.

```
bark(type("")) # output: string
```

## `tostring(value)`
Returns the string representation of `value`.

```
obj x = 10;

bark("x is equal to: " + tostring(x)); # output: x is equal to: 10
```

## `tonumber(string)`
Converts `string` to the number type.

```
obj pi = "3.14";
obj actual_pi = tonumber(pi);

bark(actual_pi) # output: 3.14
```

## `run(code)`
Executes `code` as a seperate module and context.

```
run("
# this code acts as if it was it's own glang file.
obj x = 10;

bark(x);
")
```

## `length(value)`
Returns the length of `value` (where `value` is either the list or string type)

```
obj x = "this string is long";
obj y = [1, 2, 3];

# the length of all the characters in a string
bark(length(x)); # output: 19

# the length of all the elements in a list
bark(length(y)); # output: 3
```

## `copy(value)`
Creates a clone of `value`

```
obj x = [1, 2, 3];
obj y = copy(x);

push(x, 4);

bark(x); # output: [1, 2, 3, 4]
bark(y); # output: [1, 2, 3]
```

## `dig(file_name)`
Reads and returns the contents of `file_name`.

```
bark(dig("example.txt")); # output: These are some contents in a file
```

## `bury(file_name, contents)`
Writes `file_name` with `contents` inside.

```
bury("example.txt", "These are some contents in a file");
```

## `uhoh(msg)`
Throwing an error to the interpreter with the specified details and stop the program.

```
if 1 == 1 {
    skip;
} otherwise {
    uhoh("math is broken!!");
}
```
