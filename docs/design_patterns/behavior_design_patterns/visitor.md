# Visitor

# Problem

:::danger The Visitor Pattern Problem:
In software development, you may have a complex object structure with multiple types of elements or nodes. When you need to perform various operations on these elements, adding new operations or behaviors to the elements can become challenging, especially if the element classes are scattered throughout your codebase. Without the Visitor Pattern, you might resort to using multiple conditional statements (e.g., using instanceof) to apply different behaviors to different types of elements, resulting in code that is hard to maintain and extend.

For example, consider a system with different shapes (e.g., circles, squares, triangles) that need to be rendered and printed. Without the Visitor Pattern, you might have to add rendering and printing logic directly into each shape class.

```js
// Problem: Implementing rendering and printing for shapes without the Visitor Pattern

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  render() {
    console.log(`Rendered a circle with radius ${this.radius}.`);
  }

  print() {
    console.log(`Printed a circle with radius ${this.radius}.`);
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  render() {
    console.log(`Rendered a square with side length ${this.side}.`);
  }

  print() {
    console.log(`Printed a square with side length ${this.side}.`);
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  render() {
    console.log(`Rendered a triangle with base ${this.base} and height ${this.height}.`);
  }

  print() {
    console.log(`Printed a triangle with base ${this.base} and height ${this.height}.`);
  }
}

// Client code
const shapes = [new Circle(5), new Square(4), new Triangle(3, 6)];

for (const shape of shapes) {
  shape.render();
  shape.print();
}
```
In this code, rendering and printing logic is directly implemented in each shape class, leading to code duplication and making it difficult to add new behaviors without modifying the shape classes.
:::

---

## Solution

:::success The Visitor Pattern Solution:
The Visitor Pattern allows you to define a separate visitor class for each operation or behavior that you want to apply to elements in an object structure. Elements (objects) accept visitors, and the visitors perform the desired operations on the elements. This pattern promotes flexibility by allowing you to add new operations (visitor classes) without modifying the element classes.

```js
// Solution: Implementing rendering and printing for shapes using the Visitor Pattern

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  accept(visitor) {
    visitor.visitCircle(this);
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  accept(visitor) {
    visitor.visitSquare(this);
  }
}

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  accept(visitor) {
    visitor.visitTriangle(this);
  }
}

class Renderer {
  visitCircle(circle) {
    console.log(`Rendered a circle with radius ${circle.radius}.`);
  }

  visitSquare(square) {
    console.log(`Rendered a square with side length ${square.side}.`);
  }

  visitTriangle(triangle) {
    console.log(`Rendered a triangle with base ${triangle.base} and height ${triangle.height}.`);
  }
}

class Printer {
  visitCircle(circle) {
    console.log(`Printed a circle with radius ${circle.radius}.`);
  }

  visitSquare(square) {
    console.log(`Printed a square with side length ${square.side}.`);
  }

  visitTriangle(triangle) {
    console.log(`Printed a triangle with base ${triangle.base} and height ${triangle.height}.`);
  }
}

// Client code using the Visitor Pattern
const shapes = [new Circle(5), new Square(4), new Triangle(3, 6)];
const renderer = new Renderer();
const printer = new Printer();

for (const shape of shapes) {
  shape.accept(renderer); // Render each shape
  shape.accept(printer); // Print each shape
}
```
In this code with the Visitor Pattern:

- We define separate visitor classes (Renderer and Printer) for rendering and printing behaviors.
- Each shape class (Circle, Square, Triangle) accepts a visitor and delegates the rendering or printing operation to the visitor.
- The client code uses visitors to apply rendering and printing behaviors to shapes without modifying the shape classes.

The Visitor Pattern separates the algorithm (visitor) from the elements it operates on, promoting flexibility and making it easy to add new behaviors without changing the element classes. It is useful when you have complex object structures with multiple types of elements and need to perform various operations on them.
:::

---

## When to Use

When to Use the Visitor Pattern:
You should consider using the Visitor Pattern in the following situations:

1. When you have a complex object structure with multiple types of elements or nodes, and you want to perform various operations on them without modifying their classes.
2. When you want to add new operations or behaviors to elements without changing their code.
3. When you need to separate the algorithm (visitor) from the elements it operates on, promoting a clean separation of concerns.
4. When you want to avoid using conditional statements to apply different behaviors to different types of elements.