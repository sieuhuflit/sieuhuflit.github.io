# Mediator

# Problem

:::danger The Mediator Pattern Problem:
In software development, when you have a complex system with multiple objects that need to communicate with each other, direct communication between objects can lead to tight coupling and make the system difficult to maintain and extend. Additionally, changes to one object may require modifications in several other objects.

For example, consider a chat application where multiple users can send messages to each other. Without the Mediator Pattern, users might need to be aware of each other's presence and handle message routing directly, resulting in complex and tightly coupled code.

```js
// Problem: A chat application without the Mediator Pattern

class User {
  constructor(name) {
    this.name = name;
  }

  sendMessage(message, receiver) {
    console.log(`${this.name} sent message: "${message}" to ${receiver.name}`);
    receiver.receiveMessage(message);
  }

  receiveMessage(message) {
    console.log(`${this.name} received message: "${message}"`);
  }
}

// Client code without a mediator
const user1 = new User("User 1");
const user2 = new User("User 2");

user1.sendMessage("Hello!", user2);
user2.sendMessage("Hi there!", user1);
```
In this code, users directly send messages to each other, resulting in tight coupling and complex interactions.
:::

---

## Solution

:::success The Mediator Pattern Solution:
The Mediator Pattern addresses this issue by introducing a mediator object that centralizes communication between objects. Instead of objects communicating directly with each other, they communicate through the mediator. This promotes loose coupling, simplifies communication, and makes it easier to add new objects or change interactions.

```js
// Solution: A chat application using the Mediator Pattern

class ChatMediator {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(message, sender, receiver) {
    if (this.users.includes(sender) && this.users.includes(receiver)) {
      console.log(`${sender.name} sent message: "${message}" to ${receiver.name}`);
      receiver.receiveMessage(message);
    } else {
      console.log("Invalid user(s) in the message.");
    }
  }
}

class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  sendMessage(message, receiver) {
    this.mediator.sendMessage(message, this, receiver);
  }

  receiveMessage(message) {
    console.log(`${this.name} received message: "${message}"`);
  }
}

// Client code using the Mediator Pattern
const chatMediator = new ChatMediator();
const user1 = new User("User 1", chatMediator);
const user2 = new User("User 2", chatMediator);

chatMediator.addUser(user1);
chatMediator.addUser(user2);

user1.sendMessage("Hello!", user2);
user2.sendMessage("Hi there!", user1);

```
In this code with the Mediator Pattern:

- We have a ChatMediator class that centralizes communication and manages the list of users.
- Users communicate through the mediator by calling sendMessage, which sends messages to the appropriate receiver.
- Users are no longer tightly coupled and do not directly communicate with each other.

The Mediator Pattern simplifies communication in a complex system, promotes loose coupling, and makes it easier to add new users or modify interactions. It is particularly useful when you have a system with multiple objects that need to communicate and you want to avoid direct dependencies between them.
:::

---

## When to Use

When to Use the Mediator Pattern:
You should consider using the Mediator Pattern in the following situations:

1. When you have a complex system with multiple objects that need to communicate.
2. When you want to reduce direct dependencies between objects, promoting loose coupling.
3. When you need to centralize communication and avoid spaghetti-like connections between objects.
4. When you want to support the addition of new objects or changes to interactions without affecting existing code.