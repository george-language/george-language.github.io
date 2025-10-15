---
title: "Chapter 8.1"
---

# Chapter 8.1: Building a Simple Banking System

Every great project starts with a plan, so before we write a single line of code, let’s set up our workspace.

## Step 1: Project Setup

Let’s create a folder structure that keeps our logic tidy and modular.

```
banking_system/
│
├── src/
│   ├── account.glang      # Handles individual account creation and checks
│   └── system.glang       # Handles deposits, withdrawals, and transaction logic
│
└── main.glang             # Entry point where users interact with the system
```

Here’s what each file will do:

* `account.glang`: Knows how to add accounts and verify if one exists.
* `system.glang`: Controls how money moves in and out of those accounts.
* `main.glang`: Acts as our "bank clerk" and talks directly to the user.

## Step 2: Managing Accounts (`account.glang`)

This file is the foundation of our system. It defines how accounts are **stored**, **checked**, and **added** to the registry.

```
fetch std_hashmap;
fetch std_format;

# Checks if a name already exists in the account registry.
func account_exists(accounts, name) {
    if contains(hashmap_keys(accounts), name) {
        give true;
    } otherwise {
        give false;
    }
}

# Adds a new account to the registry with an initial balance.
func add_account(accounts, name, balance) {
    hashmap_set(accounts, name, balance);
}
```

**What’s Happening Here:**

- The `accounts` object is a hashmap where the keys are account names, and the values are balances.
- `account_exists()` prevents duplicate accounts or invalid operations on non-existent ones.
- `add_account()` is a simple wrapper to store new data in the hashmap.

## Step 3: Transaction Logic (`system.glang`)

Now that we can store and find accounts, it’s time to handle **transactions** like deposits and withdrawals.

```
fetch std_hashmap;
fetch std_format;
fetch "account.glang"; # We need 'account_exists' from the account file.

# Deposits money into an account.
func make_deposit(accounts, name, amount) {
    if account_exists(accounts, name) {
        hashmap_set(accounts, name, amount);
    } otherwise {
        bark(format("Error: account '{}' not found", name));
    }
}

# Withdraws money, with basic error checking.
func make_withdrawl(accounts, name, amount) {
    if account_exists(accounts, name) {
        obj og_amount = hashmap_get(accounts, name);
        obj new_amount = og_amount - amount;

        # Prevents overdrafts — no negative balances allowed.
        if new_amount < 0 {
            bark("Error: invalid balance after withdrawl");
            give null; # Stop execution early.
        }

        hashmap_set(accounts, name, new_amount);
    } otherwise {
        bark(format("Error: account '{}' not found", name));
    }
}
```

## Step 4: The Main Program (`main.glang`)

Now comes the fun part; making the system *interactive*!

This file ties everything together, allowing a user to create accounts, deposit or withdraw money, and view balances.

```
fetch std_hashmap;
fetch std_format;
fetch "src/account.glang";
fetch "src/system.glang";

obj accounts = hashmap(); # Our central registry of all accounts.

while true {
    bark("\n** Welcome to the bank! **\n");
    bark("1. Make a withdrawl");
    bark("2. Make a deposit");
    bark("3. Open an account with us");
    bark("4. Check account balance");
    bark("5. Exit\n");

    obj input = chew("Enter an option: ");

    if input == "1" {
        obj name = chew("Enter the account name: ");
        obj amount = chew("Enter an amount to withdraw: ");

        try {
            amount = tonumber(amount);
        } catch _ {
            bark("Invalid amount");
        }

        make_withdrawl(accounts, name, amount);

    } alsoif input == "2" {
        obj name = chew("Enter the account name: ");
        obj amount = chew("Enter an amount to deposit: ");

        try {
            amount = tonumber(amount);
        } catch _ {
            bark("Invalid amount");
        }

        make_deposit(accounts, name, amount);

    } alsoif input == "3" {
        obj name = chew("Enter the account name: ");
        obj starting_balance = chew("Enter the starting balance for this account: ");

        try {
            starting_balance = tonumber(starting_balance);
        } catch _ {
            bark("Invalid starting balance");
        }

        add_account(accounts, name, starting_balance);

    } alsoif input == "4" {
        obj name = chew("Enter the account name: ");

        if account_exists(accounts, name) {
            obj amount = hashmap_get(accounts, name);
            bark(format("Your account balance is: {}", amount));
        } otherwise {
            bark(format("Error: account '{}' not found", name));
        }

    } alsoif input == "5" {
        leave; # Exit the program gracefully.

    } otherwise {
        bark("Invalid option");
    }
}
```

**What’s Happening Here:**

- A `while true` loop keeps the system running until the user chooses to exit.
- Each option corresponds to a banking action, using our earlier helper functions.
- Errors (like non-existent accounts or bad inputs) are handled gracefully.

## Your Challenge 🤔

Add a way for users to close accounts they have created. _It's up to you how to implement this!_
