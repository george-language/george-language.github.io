---
title: "Chapter 7.2"
---

# Chapter 7.2: Organizing Into Modules

Now that we know what modules are, let’s talk about how to **organize** your code using them effectively.

Imagine we’re building something large, like a system that controls an oven. It might start small, but as features grow (temperature control, timers, safety checks, etc.), putting everything into one file becomes a major issue.

Take this example:

```
# Oven logic by John Doe

stay MAX_TEMP = 500;
obj current_temperature = 0;

func set_timer(time) {
    walk i = 0 through time {
        bark("cooking");
    }
}

func get_temp() {
    give current_temperature;
}

func set_temp(temp) {
    if temp <= MAX_TEMP {
        current_temperature = temp;
    } else {
        uhoh("temp is too high!");
    }
}

while true {
    bark("* Oven Controls *\n1. Set oven temp to 350\n2. Start a timer for 1 hour\n3. Get the current oven temperature");
    obj input = chew("Enter an oven control: ");

    if input == "1" {
        set_temp(350);
    } alsoif input == "2" {
        set_timer(60);
    } alsoif input == "3" {
        bark(get_temp());
    } otherwise {
        bark("Invalid control");
    }
}
```

This works fine, but it’s all tangled together: user interface, timing logic, and temperature control are mixed into one big file. That makes the code harder to read, test, and update later on.

It might be best to clean it up by splitting the project into three separate files:

- **`main.glang`** → where the main program runs
- **`src/temp.glang`** → handles temperature control
- **`src/time.glang`** → manages the oven timer

This way, each file has a clear purpose.

**`main.glang`**
This is the control center of the program. It brings everything together and runs the main oven logic.

```
fetch "src/temp.glang";
fetch "src/time.glang";

while true {
    bark("* Oven Controls *\n1. Set oven temp to 350\n2. Start a timer for 1 hour\n3. Get the current oven temperature");
    obj input = chew("Enter an oven control: ");

    if input == "1" {
        set_temp(350);
    } alsoif input == "2" {
        set_timer(60);
    } alsoif input == "3" {
        bark(get_temp());
    } otherwise {
        bark("Invalid control");
    }
}
```

**`src/temp.glang`**
Handles everything related to temperature: getting and setting the current oven temp, and making sure it doesn’t exceed the max.

```
stay MAX_TEMP = 500;
obj current_temperature = 0;

func get_temp() {
    give current_temperature;
}

func set_temp(temp) {
    if temp <= MAX_TEMP {
        current_temperature = temp;
    } else {
        uhoh("temp is too high!");
    }
}
```

**`src/time.glang`**
A simple module that focuses solely on the timer logic.

```
func set_timer(time) {
    walk i = 0 through time {
        bark("cooking");
    }
}
```
