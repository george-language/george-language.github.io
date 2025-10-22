---
title: "Chapter 2.3"
---

# Chapter 2.3: Input & Output

## Output

Remember our "Hello, World!" program? That is the output resulting from our program, and is a very important concept of programming. In fact, the whole purpose of a program is to create some output, whether it's writing a file or displaying a 3D game.

GLang allows you to display your program's output right inside of the terminal, with the `bark` function. Functions will be touched on in later chapters, but for now, remember them as little blocks of code we can execute by **calling** them.

```glang
bark(1 + 1);
```

Here, we call the `bark` function to display the result of `1 + 1`, in the terminal, you'll see `2`. `bark` can take any piece of code and display it in the terminal, like a variable named `y` with the contents of a string.

```glang
obj y = "This is some string.";

bark(y);
```

In the terminal, you'll see the text `This is some string`. because GLang is displaying the value of `y`.

## Input

Input is another very important concept every programmer should know. It's how you enter your email into a login form, it's how your computer determines if you are typing, input is everywhere.

GLang allows you to get input from the terminal with the `chew` function. `chew` will take a prompt, e.g. `"Enter your name: "`, and give you what the user entered as a string.

```glang
obj x = chew("Enter your name: ");

bark(x);
```

Here, we call the `chew` function prompting the terminal with `Enter your name: `, and until something is entered, the program freezes. When `x` is outputted, it will show whatever you typed in the terminal.
