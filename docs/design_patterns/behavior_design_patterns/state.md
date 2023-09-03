# State

# Problem

:::danger The State Pattern Problem:
In software development, you may have objects that change their behavior based on their internal state. Managing these state transitions can become complex without proper structure. Without the State Pattern, you might use a multitude of conditional statements to manage these state changes, resulting in code that is difficult to maintain and extend.

For example, consider a vending machine that dispenses items based on its current state. Without the State Pattern, you might have numerous if-else statements to handle different states, making the code error-prone and challenging to modify.

```js
// Problem: Implementing a vending machine without the State Pattern

class VendingMachine {
  constructor() {
    this.balance = 0;
    this.items = {
      cola: { price: 1.5, quantity: 10 },
      chips: { price: 1, quantity: 5 },
    };
    this.currentState = "idle";
  }

  insertCoin(coin) {
    if (this.currentState === "idle") {
      this.balance += coin;
      this.currentState = "coinInserted";
      console.log(`Inserted ${coin} cents.`);
    } else if (this.currentState === "coinInserted") {
      console.log("Coin already inserted.");
    } else {
      console.log("Cannot insert coin. Please make a selection.");
    }
  }

  selectItem(item) {
    if (this.currentState === "coinInserted") {
      const selectedItem = this.items[item];
      if (selectedItem && selectedItem.quantity > 0) {
        if (this.balance >= selectedItem.price) {
          this.balance -= selectedItem.price;
          selectedItem.quantity--;
          console.log(`Dispensing ${item}.`);
        } else {
          console.log(`Insufficient balance for ${item}.`);
        }
      } else {
        console.log(`${item} is out of stock.`);
      }
    } else {
      console.log("Please insert a coin.");
    }
  }

  returnCoins() {
    if (this.currentState === "coinInserted") {
      console.log(`Returned ${this.balance} cents.`);
      this.balance = 0;
      this.currentState = "idle";
    } else {
      console.log("No coins to return.");
    }
  }
}

// Client code
const vendingMachine = new VendingMachine();

vendingMachine.insertCoin(50); // Insert coin
vendingMachine.selectItem("cola"); // Select item
vendingMachine.returnCoins(); // Return change
```
In this code, managing the state of the vending machine without the State Pattern involves multiple conditional statements (if-else) and results in complex code for handling state transitions.
:::

---

## Solution

:::success The State Pattern Solution:
The State Pattern allows an object to change its behavior when its internal state changes. It involves defining a set of state classes, each representing a specific behavior, and allowing the context object (the object whose behavior changes) to delegate state-specific operations to the current state object. This pattern simplifies the management of state transitions and promotes cleaner and more maintainable code.

```js
// Solution: Implementing a vending machine using the State Pattern

class VendingMachine {
  constructor() {
    this.balance = 0;
    this.items = {
      cola: { price: 1.5, quantity: 10 },
      chips: { price: 1, quantity: 5 },
    };
    this.currentState = new IdleState(this);
  }

  insertCoin(coin) {
    this.currentState.insertCoin(coin);
  }

  selectItem(item) {
    this.currentState.selectItem(item);
  }

  returnCoins() {
    this.currentState.returnCoins();
  }

  setState(newState) {
    this.currentState = newState;
  }
}

class VendingMachineState {
  constructor(vendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    console.log("Coin already inserted.");
  }

  selectItem() {
    console.log("Please insert a coin.");
  }

  returnCoins() {
    console.log("No coins to return.");
  }
}

class IdleState extends VendingMachineState {
  insertCoin(coin) {
    this.vendingMachine.balance += coin;
    console.log(`Inserted ${coin} cents.`);
    this.vendingMachine.setState(new CoinInsertedState(this.vendingMachine));
  }
}

class CoinInsertedState extends VendingMachineState {
  selectItem(item) {
    const selectedItem = this.vendingMachine.items[item];
    if (selectedItem && selectedItem.quantity > 0) {
      if (this.vendingMachine.balance >= selectedItem.price) {
        this.vendingMachine.balance -= selectedItem.price;
        selectedItem.quantity--;
        console.log(`Dispensing ${item}.`);
        this.vendingMachine.setState(new IdleState(this.vendingMachine));
      } else {
        console.log(`Insufficient balance for ${item}.`);
      }
    } else {
      console.log(`${item} is out of stock.`);
    }
  }

  returnCoins() {
    console.log(`Returned ${this.vendingMachine.balance} cents.`);
    this.vendingMachine.balance = 0;
    this.vendingMachine.setState(new IdleState(this.vendingMachine));
  }
}

// Client code using the State Pattern
const vendingMachine = new VendingMachine();

vendingMachine.insertCoin(50); // Insert coin
vendingMachine.selectItem("cola"); // Select item
vendingMachine.returnCoins(); // Return change
```
In this code with the State Pattern:

We define state classes (e.g., VendingMachineState, IdleState, CoinInsertedState) that encapsulate the behavior of the vending machine in different states.
The vending machine context (VendingMachine) delegates state-specific operations
:::

---

## When to Use

When to Use the State Pattern:
You should consider using the State Pattern in the following situations:

1. When an object's behavior depends on its internal state, and you want to avoid using complex conditional statements.
2. When you want to represent each state as a separate class, making it easier to add new states and behaviors.
3. When you need to simplify the management of state transitions and make the code more maintainable.
4. When you want to ensure that the behavior of an object can change dynamically at runtime.