# Decorator 🎨

# Problem

:::danger The Decorator Pattern Problem:
In software development, you may need to add behavior or responsibilities to individual objects dynamically, without affecting other objects of the same class. Traditional inheritance-based approaches involve creating a large number of subclasses for each combination of behaviors, leading to a class explosion and inflexibility.

For example, consider a scenario where you have a Coffee class, and you want to add additional options like milk, sugar, or caramel to a coffee order. Without the Decorator Pattern, you might need to create subclasses for each possible combination, which is impractical.

```js
// Problem: Adding options to a coffee order without the Decorator Pattern

class Coffee {
  constructor() {
    this.cost = 5;
    this.ingredients = ["Coffee"];
  }

  getCost() {
    return this.cost;
  }

  getIngredients() {
    return this.ingredients;
  }
}

// Creating a coffee order with additional options
const coffeeWithMilk = new Coffee();
coffeeWithMilk.cost += 2;
coffeeWithMilk.ingredients.push("Milk");

const coffeeWithSugar = new Coffee();
coffeeWithSugar.cost += 1;
coffeeWithSugar.ingredients.push("Sugar");

console.log("Coffee with Milk: ", coffeeWithMilk.getCost(), coffeeWithMilk.getIngredients());
console.log("Coffee with Sugar: ", coffeeWithSugar.getCost(), coffeeWithSugar.getIngredients());

```
In this code, we attempt to add options (e.g., milk, sugar) to a coffee order by directly modifying the Coffee class. This approach is inflexible and can lead to code that is hard to maintain, especially as the number of options increases.
:::

---

## Solution

:::success The Decorator Pattern Solution:
The Decorator Pattern allows you to attach additional behaviors or responsibilities to objects dynamically. It involves creating a set of decorator classes that wrap the base object (component) and provide additional functionality without modifying the original class. Decorators follow the same interface as the component they decorate, making them interchangeable.

```js
// Solution: Using the Decorator Pattern to add options to a coffee order

// Component: Coffee
class Coffee {
  getCost() {
    return 5;
  }

  getIngredients() {
    return "Coffee";
  }
}

// Decorator: Milk
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 2;
  }

  getIngredients() {
    return `${this.coffee.getIngredients()}, Milk`;
  }
}

// Decorator: Sugar
class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 1;
  }

  getIngredients() {
    return `${this.coffee.getIngredients()}, Sugar`;
  }
}

// Creating a coffee order with decorators
let coffee = new Coffee();
console.log("Plain Coffee: ", coffee.getCost(), coffee.getIngredients());

coffee = new MilkDecorator(coffee);
console.log("Coffee with Milk: ", coffee.getCost(), coffee.getIngredients());

coffee = new SugarDecorator(coffee);
console.log("Coffee with Milk and Sugar: ", coffee.getCost(), coffee.getIngredients());
```
In this code with the Decorator Pattern:

- We have a base class Coffee representing the component with a default cost and ingredients.
- We create decorator classes (MilkDecorator and SugarDecorator) that wrap the base Coffee class and add additional behavior (cost and ingredients) to it.
- The decorators follow the same interface as the component, making them interchangeable and allowing us to stack them to create different combinations of options.
:::

---

## When to Use

When to Use the Decorator Pattern:
You should consider using the Decorator Pattern in the following situations:

1. When you need to add behavior or responsibilities to individual objects dynamically and without modifying their class.
2. When you want to avoid creating a large number of subclasses to represent different combinations of behaviors.
3. When you want to keep the original class (component) and the decorator classes open for extension but closed for modification.
4. When you need to compose objects with different combinations of behaviors.
