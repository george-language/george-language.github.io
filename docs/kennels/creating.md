---
title: "Creating Kennels"
---

# Creating Kennels

Kennels are GLang packages. They use a simple project structure:

```
lib.glang   <- entry point
kennel.toml <- package configuration
README.md   <- package info
LICENSE     <- license of your choice
```

Kennels **must** be hosted on GitHub. GLang indexes kennels from GitHub source `.zip` files.

👉 To save time, start with our [Kennel Template](https://github.com/george-language/glang-kennel-template).

## Configuring `kennel.toml`

Here’s an example configuration:

```toml
name = "my_kennel"                             # snake_case "easy import identifier" (EII)
description = "This kennel does cool things!"  # one-line description
authors = ["John Doe"]                         # list of authors
version = "1.0"                                # kennel version
entry = "lib.glang"                            # entry point (main file users import)
requires = []                                  # list of external kennels required
```

### Key fields

* **`name`**: Your kennel’s **import name**. Must be `snake_case`.
* **`entry`**: The GLang file that loads when someone imports your kennel.
* **`requires`**: Add any external kennels (by name) your kennel depends on.

## Publishing Your Kennel

GLang maintains a registry of all installable kennels in [registry.json](https://github.com/george-language/glang/blob/main/registry.json).

To publish:

1. Go to the [GLang Issues page](https://github.com/george-language/glang/issues).
2. Open a new issue with your kennel’s repository link.
3. Add the `kennel` label.

Once reviewed, your kennel will be approved and added to the registry 🎉
