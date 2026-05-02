---
title: "Chapter 3.2"
---

# Chapter 3.2: Walk and While

## Loops

When you need to run a block of code multiple times, you use a **loop**. Loops let your program “cycle” through code, whether that’s repeating an action _x_ number of times or continuing until a condition changes.

GLang gives you two main ways to loop: `while` and `walk`.

## `while`

A `while` loop is basically an `if` statement that keeps running **while** a condition remains true. If that condition never becomes false, your loop will run forever (and probably melt your computer’s hardware!)

```glang
while true {
    bark("This loop runs forever!!!");
}
````

Of course, infinite loops aren’t always bad, sometimes you want your program to keep running until something happens. For example, you might want to increment a value until it hits a goal.

```glang
obj x = 0;

while x != 100 {  # stops when x == 100
    x = x + 1;
}
```

A classic example may be a game loop that runs while the game is active:

```glang
while game_is_running() {
    render_opponent();
    render_player();
}
```

## Range Loops: `walk`

The `walk` loop gives you more **control**. Instead of looping until some condition changes, you define exactly how many times it should run.

```glang
walk i = 0 through 10 {
    bark(i);
}
```

`i` starts at 0, and the loop runs while `i` is less than 10. Each time through, `i` increases by 1 automatically.

Therefore, this outputs: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9` in the terminal.

You can also control how much `i` increases each time with the optional `step` keyword:

```glang
walk i = 0 through 10 step = 2 {
    bark(i); # outputs 0, 2, 4, 6, 8
}
```

## Iterator Loops: `walk`

The `walk` loop also gives you the ability to loop through an object (often called an iterator)

```glang
obj my_list = [1, 2, 3];

walk i through my_list {
    bark(i); # outputs 1, 2, 3 (each element in the list)
}
```

Each time through the loop, `i` is set to the next element in the iterator. Both the list and string type are iterators, meaning you can also loop through the characters in a string too:

```glang
obj string = "hello";

walk i through string {
    bark(i); # outputs h, e, l, l, o (each character in the string)
}
```

## Your Challenge 🤔

Use a `walk` loop to output numbers 0 through 10000 counting by 100s (0, 100, 200, and so on...)

::: details Answer
```glang
walk i = 0 through 10000 step = 100 {
    bark(i);
}
```
:::
