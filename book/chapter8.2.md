---
title: "Chapter 8.2"
---

# Chapter 8.2: Customizing Output

Your banking system _works_, but let’s be real... it’s a bit plain.

If you want to make your program more **user-friendly** (and easier to read), adding some color and style to your terminal output can make a huge difference.

## Step 1: Meet Kennels

GLang doesn’t include built-in styling tools by default. That’s where **kennels** come in, pre-made code packages you can download and use in your projects.

_You can learn more about kennels [here](/docs/kennels/)._

For this chapter, we’ll use a kennel called `fancy-terminal`, it gives you easy-to-use color and text style controls through string expressions!

## Step 2: Installing and Using `fancy-terminal`

First, make sure you’ve installed the kennel:

```sh
glang install https://github.com/george-language/fancy-terminal/releases/latest/download/fancy_terminal.kennel
```

Then import it into your program:

```glang
fetch "fancy_terminal@latest"; # enables color and style support

bark(GREEN + "All systems ok." + RESET);
bark(RED + "A critical error occurred!" + RESET);
```

**How it works:**
Each color (like `RED` or `GREEN`) is just a special string variable that tells your terminal to display text in that color until it hits a `RESET`. You can also mix and match styles like `BOLD`, `ITALIC`, or `UNDERLINE` to make your output more styled.

For a full list of supported colors and styles, check out the [official docs](https://github.com/george-language/fancy-terminal?tab=readme-ov-file#supported-styles).

## Step 3: Applying Styles to Your Banking System

Now that you’ve got `fancy-terminal` installed, you can make your bank’s messages easier to read (and way cooler).

For example, in **`system.glang`**, you can highlight error messages in red:

```glang
fetch std_hashmap;
fetch std_format;
fetch "fancy_terminal@latest";
fetch "account.glang"; # we need the 'account_exists' function

func make_deposit(accounts, name, amount) {
    if account_exists(accounts, name) {
        # account exists, so make the deposit by setting 'name: amount'
        hashmap_set(accounts, name, amount);
    } otherwise {
        bark(format(RED + "Error: account '{}' not found" + RESET, name));
    }
}

func make_withdrawl(accounts, name, amount) {
    if account_exists(accounts, name) {
        obj og_amount = hashmap_get(accounts, name);
        obj new_amount = og_amount - amount;

        # can't withdraw an amount past 0
        if new_amount < 0 {
            bark(RED + "Error: invalid balance after withdrawl" + RESET);

            give null; # return and stop the function
        }

        hashmap_set(accounts, name, new_amount);
    } otherwise {
        bark(format(RED + "Error: account '{}' not found" + RESET, name));
    }
}
```

You can even go wild with color-coded output:

- Green for success ✅
- Red for errors ❌
- Yellow for warnings ⚠️
- Blue for informational messages ℹ️

## What's Next

Keep coding! Developers are always needed everywhere, no matter what. You can write other programs in GLang, or move on to bigger languages like Python or JavaScript. When it comes to software, the world is your oyster.

Congrats 🎉🎉
