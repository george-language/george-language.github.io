---
title: "About"
---

# About George Language

**GLang started as a joke… and became something real.**

It all began with a pug named George. He's adorable, stubborn, and full of personality.

One day, someone asked:

> “What if we made a programming language named after George? Something cute, funny, but also powerful and easy to learn?”

That one offhand comment stuck, then, **George Language (GLang)** was born.

## 🛠️ History

The first version of GLang was cobbled together in Python. It was full of duct tape, school glue, and ambition, and had a _very_ verbose syntax. But it **worked**!

```
func y(arg1)
    give arg1 + 1
endbody

walk i = 0 through 10 then
    if i == 5 then
        bark(i)
        next
    endbody
endbody
````

Fast forward to **May 2025**, when a full **Rust rewrite** began under **MP Software** (now retired). The rewrite brought semicolons, braces, and a cleaner, more expressive syntax.

```glang
func y(arg1) {
    give arg1 + 1;
}

walk i = 0 through 10 {
    if i == 5 {
        bark(i);
        next;
    }
}
```

This was also when **bootstrapping** entered the picture. Large parts of GLang (like the standard library) started being written _in GLang itself_. Pretty wild.

```glang
fetch std_os;

bark(os_type()); # implemented in glang!
```

The **first pull request** merged the `glang-rust` rewrite into `main`, replacing nearly every file and folder.
96 commits later, **GLang 2.0** was released — the biggest milestone to date.

As MP Software evolved, we realized GLang needed its own space and identity. Therefore, MP Software was shut down, and GLang officially became its own project.

## 🌍 Today

Now, **GLang lives on under the George Language Foundation**. A dedicated team of developers work to keep the language fresh, fun, and modern.

We also made a bold move: a **version rollback** back to `0.1`. _Why?_ Because we wanted to grow _smarter this time_, laying a stronger foundation for the language’s future.

The goal remains the same as day one:

> To make a language that’s cute, powerful, and a little bit goofy — just like George.
