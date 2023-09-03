# Command

# Problem

:::danger The Command Pattern Problem:
In software development, you may have scenarios where you need to decouple an object that issues commands from the objects that perform the actual operations in response to those commands. Without proper decoupling, adding new commands or modifying existing ones can become challenging and lead to tight coupling between sender and receiver objects.

For example, consider a remote control for a home theater system. The remote control needs to send commands like "turn on TV" or "increase volume." Without the Command Pattern, you might need to implement these commands directly in the remote control, making it difficult to add new commands or change existing ones.

```js
// Problem: Implementing a remote control without the Command Pattern

class TV {
  turnOn() {
    console.log("TV is turned on.");
  }

  turnOff() {
    console.log("TV is turned off.");
  }
}

class RemoteControl {
  constructor(tv) {
    this.tv = tv;
  }

  pressButton() {
    this.tv.turnOn(); // Hard-coded command
  }
}

// Client code
const tv = new TV();
const remoteControl = new RemoteControl(tv);

remoteControl.pressButton(); // Turns on the TV
```
In this code, the remote control directly calls the turnOn method of the TV, resulting in tight coupling and making it challenging to add new commands or change existing ones.
:::

---

## Solution

:::success The Command Pattern Solution:
The Command Pattern decouples the sender of a command from the receiver of the command by encapsulating the request as an object. It involves defining command objects that encapsulate a specific action and its parameters. These command objects can be stored, passed around, and executed at a later time. This decoupling allows for flexibility in adding new commands and supporting undo/redo operations.

```js
// Solution: Implementing a remote control using the Command Pattern

class TV {
  turnOn() {
    console.log("TV is turned on.");
  }

  turnOff() {
    console.log("TV is turned off.");
  }
}

// Command Interface
class Command {
  execute() {
    throw new Error("Subclasses must implement execute.");
  }
}

// Concrete Command: TurnOnCommand
class TurnOnCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.turnOn();
  }
}

// Invoker: Remote Control
class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    if (this.command) {
      this.command.execute();
    }
  }
}

// Client code
const tv = new TV();
const turnOnCommand = new TurnOnCommand(tv);
const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand); // Set the command
remoteControl.pressButton(); // Executes the command, turns on the TV
```

In this code with the Command Pattern:

- We have a Command interface that defines the execute method.
- Concrete command classes (TurnOnCommand) implement the Command interface and encapsulate specific actions.
- The remote control (RemoteControl) sets and executes commands without knowing the specific details of the action.
:::

---

## When to Use

When to Use the Command Pattern:
You should consider using the Command Pattern in the following situations:

1. When you want to decouple the sender of a request from the receiver.
2. When you need to parameterize objects by specifying a request as an object, allowing for dynamic behavior.
3. When you want to support undo/redo functionality.
4. When you want to add new commands or modify existing ones without changing existing client code.