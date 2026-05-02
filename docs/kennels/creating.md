---
title: "Creating Kennels"
---

# Creating Kennels

Kennels use a simple project structure:

```
src/        <- project files (bundled automatically)
lib.glang   <- entry point
kennel.toml <- package configuration
.gitignore  <- git configuration (if git is used)
```

You can use `glang new kennel` to automatically generate this configuration for you.

## Configuring `kennel.toml`

`kennel.toml` uses the TOML syntax to assign various fields for configuring your kennel.

```toml
[package]
name = "my_kennel"                             # snake case name of your package
version = "0.1.0"                              # kennel version (semantic only)
entry = "lib.glang"                            # entry point (main file users import)

[requirements] 
# list of external kennels required 
# name = version
```

### Key fields

- **`name`**: Your kennel’s **import name**. Must be `snake_case`.
- **`entry`**: The GLang file that loads when someone imports your kennel.
- **`requirements`**: Add any external kennels (by name/version) your kennel depends on.

## Distributing Your Kennel

Your kennel can be distributed by creating an installable `.kennel` file.

```sh
glang package
```

This will build and resolve any requirements, ensuring the kennel is ready for distribution. The final kennel is created as `name-version.kennel`
