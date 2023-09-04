# Observer 👀

# Problem

:::danger The Observer Pattern Problem:
In software development, you may encounter scenarios where one object needs to notify multiple other objects about changes in its state. Without the Observer Pattern, you might end up with a tightly coupled system where the subject object (the one being observed) directly calls methods on all the observer objects. This results in inflexible code and difficulty in managing relationships between subjects and observers.

For example, consider a stock market application where multiple clients need to be notified when the price of a particular stock changes. Without the Observer Pattern, you might have to hardcode the logic to notify each client, leading to tight coupling.

```js
// Problem: Notifying multiple clients about stock price changes without the Observer Pattern

class StockMarket {
  constructor() {
    this.price = 100;
    this.clients = [];
  }

  setPrice(newPrice) {
    this.price = newPrice;

    // Manually notify all clients
    for (const client of this.clients) {
      client.update(this.price);
    }
  }

  addClient(client) {
    this.clients.push(client);
  }
}

class Client {
  constructor(name) {
    this.name = name;
  }

  update(price) {
    console.log(`${this.name} received updated price: ${price}`);
  }
}

// Client code
const stockMarket = new StockMarket();
const client1 = new Client("Client 1");
const client2 = new Client("Client 2");

stockMarket.addClient(client1);
stockMarket.addClient(client2);

stockMarket.setPrice(110); // Manually notify clients about the price change
```
In this code, the StockMarket directly calls the update method on all clients when the price changes, resulting in tight coupling and a lack of encapsulation.
:::

---

## Solution

:::success The Observer Pattern Solution:
The Observer Pattern defines a one-to-many dependency between objects. It allows a subject object to maintain a list of observers (also known as subscribers) and notify them of changes without knowing the details of the observers. This decouples the subject from its observers and provides a flexible way to add, remove, or notify observers about changes in the subject's state.

```js
// Solution: Notifying multiple clients about stock price changes using the Observer Pattern

class StockMarket {
  constructor() {
    this.price = 100;
    this.observers = [];
  }

  setPrice(newPrice) {
    this.price = newPrice;
    this.notifyObservers();
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.price);
    }
  }
}

class Client {
  constructor(name) {
    this.name = name;
  }

  update(price) {
    console.log(`${this.name} received updated price: ${price}`);
  }
}

// Client code using the Observer Pattern
const stockMarket = new StockMarket();
const client1 = new Client("Client 1");
const client2 = new Client("Client 2");

stockMarket.addObserver(client1);
stockMarket.addObserver(client2);

stockMarket.setPrice(110); // Automatically notifies all clients about the price change
```
In this code with the Observer Pattern:

- The StockMarket maintains a list of observers (clients) and notifies them when the price changes without directly calling their methods.
- Clients (observers) can subscribe to or unsubscribe from the subject (stock market) without modifying the subject.

The Observer Pattern decouples the subject from its observers, providing a flexible way to notify multiple objects about changes in the subject's state. It is particularly useful when you need to implement event handling or notification systems in your application.
:::

---

## When to Use

When to Use the Observer Pattern:
You should consider using the Observer Pattern in the following situations:

1. When you have one object (the subject) that needs to notify multiple objects (observers) about changes in its state.
2. When you want to decouple the subject from its observers, making it easy to add or remove observers without modifying the subject.
3. When you need a publish-subscribe mechanism for event handling, where events trigger actions in multiple parts of your application.
4. When you want to implement custom event handling or notification systems.