---
title: "About Kennels"
---

# About Kennels

Kennels are how you share and reuse GLang code.

Think of them as little doghouses full of useful code. You can download one, and then **import it into your project**!

## Installing a Kennel

You can install kennels with:

```sh
glang install <kennel_name>
```

Kennels are stored in your local machine at:

```
.glang/kennels/
```

They act as **global imports**, any GLang project on your system can use them.

## Managing Kennels

- **Remove a kennel:**

  ```sh
  glang remove <kennel_name>
  ```

- **Update a kennel:**

  ```sh
  glang update <kennel_name>
  ```

  _(GLang won’t auto-update kennels; you’re in control!)_

## Using a Kennel

When you install a kennel, GLang gives it an **Easy Import Identifier (EII)**, usually the same as the kennel’s name.

```glang
fetch kennel_name;

kennels_function();
```
