---
title: "null"
---

# Keyword: `null`

Number type representing null or "nothing" (binary 0)

```glang
obj nothing = null;

bark(nothing); # outputs '0' because the null value in binary is 0
```

Since the null value is technically a boolean, boolean operations can be performed on null.

```glang
bark(not null); # true!
```
