---
title: "Chapter 3.2"
---

# Chapter 3.2: Walk and While

## Loops

When you need to run a block of code multiple times, you use a **loop**.

Loops let your program “cycle” through code, whether that’s repeating an action _x_ number of times or continuing until a condition changes.

GLang gives you two main ways to loop: `while` and `walk`.

## `while`

A `while` loop is basically an `if` statement that keeps running **while** a condition remains true.
If that condition never becomes false, your loop will run forever (and probably melt your computer’s hardware).

```
while true {
    bark("This loop runs forever!!!");
}
````

Of course, infinite loops aren’t always bad, sometimes you want your program to keep running until something happens. For example, you might want to increment a value until it hits a goal.

```
obj x = 0;

while x != 100 {  # stops when x == 100
    x = x + 1;
}
```

A classic example is a game loop that runs while the game is active:

```
while game_is_running() {
    render_opponent();
    render_player();
}
```

## `walk`

The `walk` loop gives you more **control**. Instead of looping until some condition changes, you define exactly how many times it should run.

```
walk i = 0 through 10 {
    bark(i);
}
```

Here’s what happens:

- `i` starts at 0
- The loop runs while `i` is less than 10
- Each time through, `i` increases by 1 automatically

So this prints: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`.

You can also control how much `i` increases each time with the optional `step` keyword:

```
walk i = 0 through 10 step = 2 {
    bark(i); # outputs 0, 2, 4, 6, 8
}
```

## Your Challenge 🤔

Use a `walk` loop to output numbers 0 - 10000 counting by 100s (0, 100, 200, etc.)

::: details Answer
```
walk i = 0 through 10000 step = 100 {
    bark(i);
}
```
:::
