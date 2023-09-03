# Template method

# Problem

:::danger The Template Method Pattern Problem:
In software development, you may have scenarios where you need to define the skeleton of an algorithm in a base class, but allow certain steps of the algorithm to be implemented by subclasses. Without the Template Method Pattern, you might create a monolithic method with conditional statements that determine the flow of the algorithm. This can lead to code duplication, reduced reusability, and difficulty in maintaining and extending the algorithm.

For example, consider a process for making different types of beverages (e.g., coffee, tea). Without the Template Method Pattern, you might have a single method with conditionals to handle the specific steps for each beverage type.

```js
// Problem: Implementing beverage preparation without the Template Method Pattern

class Coffee {
  prepare() {
    this.boilWater();
    this.brewCoffeeGrounds();
    this.pourInCup();
    this.addSugarAndMilk();
  }

  boilWater() {
    console.log("Boiling water.");
  }

  brewCoffeeGrounds() {
    console.log("Brewing coffee grounds.");
  }

  pourInCup() {
    console.log("Pouring coffee into cup.");
  }

  addSugarAndMilk() {
    console.log("Adding sugar and milk.");
  }
}

class Tea {
  prepare() {
    this.boilWater();
    this.steepTeaBag();
    this.pourInCup();
    this.addLemon();
  }

  boilWater() {
    console.log("Boiling water.");
  }

  steepTeaBag() {
    console.log("Steeping the tea bag.");
  }

  pourInCup() {
    console.log("Pouring tea into cup.");
  }

  addLemon() {
    console.log("Adding lemon.");
  }
}

// Client code
const coffee = new Coffee();
const tea = new Tea();

console.log("Making coffee:");
coffee.prepare();

console.log("\nMaking tea:");
tea.prepare();
```
In this code, each beverage class (Coffee and Tea) has its own prepare method with duplicated steps for boiling water and pouring in a cup.
:::

---

## Solution

:::success The Template Method Pattern Solution:
The Template Method Pattern defines the structure of an algorithm in a base class (template method) but allows subclasses to override specific steps of the algorithm. It promotes code reuse, provides a consistent structure for algorithms, and ensures that certain steps are enforced while allowing flexibility for customization.

```js
// Solution: Implementing beverage preparation using the Template Method Pattern

class Beverage {
  prepare() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater() {
    console.log("Boiling water.");
  }

  pourInCup() {
    console.log("Pouring into cup.");
  }

  // Methods to be overridden by subclasses
  brew() {}

  addCondiments() {}
}

class Coffee extends Beverage {
  brew() {
    console.log("Dripping coffee through filter.");
  }

  addCondiments() {
    console.log("Adding sugar and milk.");
  }
}

class Tea extends Beverage {
  brew() {
    console.log("Steeping the tea.");
  }

  addCondiments() {
    console.log("Adding lemon.");
  }
}

// Client code using the Template Method Pattern
const coffee = new Coffee();
const tea = new Tea();

console.log("Making coffee:");
coffee.prepare();

console.log("\nMaking tea:");
tea.prepare();
```
In this code with the Template Method Pattern:

- We define a Beverage base class with a template method prepare() that defines the algorithm's structure. It calls common methods like boilWater(), pourInCup(), brew(), and addCondiments().
- Subclasses (Coffee and Tea) override the brew() and addCondiments() methods to customize their behavior.
- The template method ensures that common steps are executed in a specific order, promoting code reuse and consistency.

The Template Method Pattern is useful when you have a family of algorithms with a common structure but varying steps. It allows you to centralize the common algorithmic logic in a base class while allowing subclasses to customize specific steps.
:::

---

## When to Use

When to Use the Template Method Pattern:
You should consider using the Template Method Pattern in the following situations:

1. When you want to define the structure of an algorithm but allow certain steps to be customized by subclasses.
2. When you want to avoid code duplication by centralizing common algorithmic logic in a base class.
3. When you need to ensure that certain steps are followed in a specific order within an algorithm.
4. When you want to provide a consistent interface for a family of algorithms while allowing individual steps to vary.
