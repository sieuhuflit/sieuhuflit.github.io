# Singleton

# Problem

:::danger The Singleton Pattern Problem:
In software development, there are situations where you need to ensure that a class has only one instance, and that instance should provide a global point of access. Some common scenarios include managing configuration settings, database connections, or maintaining a single point of control for resources.

Without the Singleton Pattern, multiple instances of a class can be created, leading to unintended consequences such as wasted resources or conflicting state.

```js
// Problem: Creating multiple instances of a class without the Singleton Pattern

class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }
}

// Creating multiple logger instances
const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("Log message from logger1");
logger2.log("Log message from logger2");

console.log(logger1.logs);
console.log(logger2.logs);
```
In this code, we create multiple instances of the Logger class. Each instance maintains its own log array, and there is no control over the number of logger instances created. This can lead to issues like duplicated logs and wasted memory.
:::

---

## Solution

:::success The Singleton Pattern Solution:
The Singleton Pattern restricts the instantiation of a class to a single instance and provides a global point of access to that instance. It ensures that there's only one instance of the class in the entire application and allows that instance to be accessed from anywhere within the codebase.

```js
// Solution: Implementing the Singleton Pattern

class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
    this.logs = [];
    return this;
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }
}

// Creating logger instances
const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("Log message from logger1");
logger2.log("Log message from logger2");

console.log(logger1 === logger2); // Output: true
console.log(logger1.logs);
console.log(logger2.logs);
```

In this code:

- We use the Singleton Pattern to ensure that there is only one instance of the Logger class throughout the application.
- The constructor of the Logger class checks if an instance already exists (in Logger.instance). If it does, it returns the existing instance; otherwise, it creates a new instance and assigns it to Logger.instance.
- This approach guarantees that logger1 and logger2 refer to the same instance of the Logger class, and they share the same log array.
:::

---

## When to Use

When to Use the Singleton Pattern:
You should consider using the Singleton Pattern in the following situations:

1. When you need to ensure that a class has only one instance, and that instance should be globally accessible.
2. When you want to provide a single point of control for resources such as database connections, thread pools, or configuration settings.
3. When you need to coordinate actions or centralize state within an application.