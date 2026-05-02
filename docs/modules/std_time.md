---
title: "std_time"
---

# `std_time`

The `std_time` module is an implementation of the system time and hardware clock.

```glang
fetch std_time;

time_pause(1000) # stops program execution for 1 second

bark("1 second later");
```

## `time_now()`
Returns "now" as a number in milliseconds; our current moment in space and time. This function specifically calculates the elapsed time since the UNIX epoch (1/1/1970)

```glang
fetch std_time;

obj start = time_now();

# ...do some stuff

obj end = time_now()

bark("Elapsed time: " + tonumber(end - start));
```

## `time_pause(ms)`
Halts program execution for `ms` long, where `ms` is in milliseconds.

```glang
fetch std_time;

time_pause(2000) # stop for 2 seconds

bark("This is 2 seconds later!");
```
