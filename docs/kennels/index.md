---
title: "About Kennels"
---

# About Kennels

Kennels are GLang projects packaged into compressed data, that can be installed on other user machines to use your code. 

Your machine contains a registry of all installed kennels, so that when a `.kennel` file is installed, it can be managed, versioned, and stored safely.

## Installing a Kennel

You can install kennels with:

```sh
glang install path/to/kennel/file
```

They can also be installed from URLs:

```sh
glang install https://example.com/example.kennel
```

Kennels are stored in your local machine at:

```
.glang/
```

And the registry is inside:

```
.glang/packages.json
```

Kennels are installed at the global level; any GLang project on your system can use them.

## Managing Kennels

A kennel can be removed using the name in the registry.

```sh
glang remove <name>
```

## Using a Kennel

Kennels are imported using [`fetch`](/docs/keywords/fetch). They are referenced with `name` and `version`, separated by `@`.

```glang
fetch "name@version"; # name = kennel name, version = kennel version
```

If `version` is `latest`, GLang will pull the latest version of that kennel and use it.
