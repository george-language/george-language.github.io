---
title: "std_os"
---

# `std_os`

The `std_os` module provides operating system related features.

## `os_type()`
Returns the operating system type as a string. On a Windows machine `"windows"`, on a MacOS machine `"macos"`, on a unkown machine `"unkown"`.

```glang
fetch std_os;

bark(os_type());
```

## `os_path()`
Returns the system `PATH` variable.

```glang
fetch std_os;

bark(os_path());
```

## `os_user_dir()`
Returns the full user directory as a string. On Windows `C:/Users/JohnDoe` or on MacOS `/Users/JohnDoe`.

```glang
fetch std_os;

bark(os_user_dir());
```

## `os_env()`
Returns the value as a string of the OS environment variable `var`.

```glang
fetch std_os;

bark(os_env("HOME"));
```
