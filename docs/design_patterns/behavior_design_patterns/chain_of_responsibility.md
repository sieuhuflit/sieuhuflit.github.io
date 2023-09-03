# Chain of responsibility

# Problem

:::danger The Chain of Responsibility Pattern Problem:
In software development, you may have scenarios where multiple objects need to process a request or perform some action, but you don't want to hardcode the specific handling order or make the client code aware of all possible handlers. Traditional approaches involve tight coupling between the client and the handling logic, leading to inflexible code.

For example, consider a situation where you have a series of validators to check user input. Without the Chain of Responsibility Pattern, you might need to explicitly call each validator in a specific order in the client code, which can be cumbersome and inflexible.

```js
// Problem: Handling user input validation without the Chain of Responsibility Pattern

class InputValidator {
  constructor() {}

  validate(input) {
    // Validation logic
    if (!input) {
      return "Input cannot be empty.";
    }
    return null;
  }
}

class LengthValidator {
  constructor() {}

  validate(input) {
    // Validation logic
    if (input.length < 8) {
      return "Input must be at least 8 characters long.";
    }
    return null;
  }
}

// Client code with explicit validation order
const input = "password";
const inputValidator = new InputValidator();
const lengthValidator = new LengthValidator();

const inputError = inputValidator.validate(input);
const lengthError = lengthValidator.validate(input);

if (inputError) {
  console.log("Input error:", inputError);
} else if (lengthError) {
  console.log("Length error:", lengthError);
} else {
  console.log("Input is valid.");
}
```
In this code, we have two validation classes (InputValidator and LengthValidator). The client code explicitly calls these validators in a specific order to validate user input, resulting in tightly coupled code.
:::

---

## Solution

:::success The Chain of Responsibility Pattern Solution:
The Chain of Responsibility Pattern addresses this issue by creating a chain of handler objects, each responsible for processing a specific type of request. Each handler has a reference to the next handler in the chain. When a request is made, it's passed along the chain until a handler can process it. This allows for flexible, decoupled, and extensible handling logic.

```js
// Solution: Using the Chain of Responsibility Pattern for input validation

class Validator {
  constructor(successor = null) {
    this.successor = successor;
  }

  setSuccessor(successor) {
    this.successor = successor;
  }

  validate(input) {
    const error = this._validate(input);
    if (error === null && this.successor) {
      return this.successor.validate(input);
    }
    return error;
  }

  _validate(input) {
    // To be implemented by concrete validators
    return null;
  }
}

class InputValidator extends Validator {
  _validate(input) {
    if (!input) {
      return "Input cannot be empty.";
    }
    return null;
  }
}

class LengthValidator extends Validator {
  _validate(input) {
    if (input.length < 8) {
      return "Input must be at least 8 characters long.";
    }
    return null;
  }
}

// Client code with a chain of validators
const input = "password";
const inputValidator = new InputValidator();
const lengthValidator = new LengthValidator();

inputValidator.setSuccessor(lengthValidator);

const error = inputValidator.validate(input);

if (error) {
  console.log("Validation error:", error);
} else {
  console.log("Input is valid.");
}
```

In this code with the Chain of Responsibility Pattern:

- We create a base Validator class that defines the chain of responsibility logic.
- Concrete validator classes (InputValidator and LengthValidator) extend the Validator class and implement the _validate method.
- The client code sets up a chain of validators and invokes the validation process, allowing each validator to check and pass the request to the next in the chain if needed.
:::

---

## When to Use

When to Use the Chain of Responsibility Pattern:
You should consider using the Chain of Responsibility Pattern in the following situations:

1. When you have a series of objects that need to process requests or perform actions in a specific order.
2. When you want to decouple the sender (client) of a request from its receivers (handlers).
3. When you want to add new handlers or change the order of processing without modifying existing client code.
4. When you want to avoid hardcoding the handling logic and make it more flexible and extensible.
