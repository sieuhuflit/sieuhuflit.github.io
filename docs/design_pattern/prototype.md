# Prototype

# Problem

:::danger The Prototype Pattern Problem:
In software development, you often encounter situations where you need to create objects that are similar to existing objects, but you want to avoid the overhead of creating these objects from scratch. Creating new instances by manually copying properties from an existing object can be error-prone and time-consuming, especially when dealing with complex objects.

For example, in a graphics application, you might have predefined shapes like circles, rectangles, and triangles. Creating new instances of these shapes with the same properties requires duplicating code and initializing each property individually.

```js
// Problem: Creating similar shapes without the Prototype Pattern

class Circle {
  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Circle(this.radius, this.x, this.y);
  }
}

class Rectangle {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Rectangle(this.width, this.height, this.x, this.y);
  }
}

// Creating new shapes
const originalCircle = new Circle(5, 10, 10);
const copiedCircle = originalCircle.clone();

const originalRectangle = new Rectangle(8, 6, 20, 20);
const copiedRectangle = originalRectangle.clone();

console.log(originalCircle);
console.log(copiedCircle);
console.log(originalRectangle);
console.log(copiedRectangle);

```
In this code, we create different shapes (circles and rectangles) without using the Prototype Pattern. To create a new shape, we manually copy properties from an existing shape and create a new instance. This approach can be error-prone and repetitive when dealing with multiple properties or complex objects.

:::

---

## Solution

:::success The Prototype Pattern Solution:
The Prototype Pattern allows you to create new objects by copying an existing object (the prototype). It provides a way to clone objects while keeping the object creation process abstracted from the client code. It's particularly useful when creating objects with shared characteristics.

```js
// Solution: Using the Prototype Pattern to create similar shapes

class Shape {
  clone() {
    throw new Error("Subclasses must implement the clone method.");
  }
}

class Circle extends Shape {
  constructor(radius, x, y) {
    super();
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Circle(this.radius, this.x, this.y);
  }
}

class Rectangle extends Shape {
  constructor(width, height, x, y) {
    super();
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Rectangle(this.width, this.height, this.x, this.y);
  }
}

// Creating new shapes
const originalCircle = new Circle(5, 10, 10);
const copiedCircle = originalCircle.clone();

const originalRectangle = new Rectangle(8, 6, 20, 20);
const copiedRectangle = originalRectangle.clone();

console.log(originalCircle);
console.log(copiedCircle);
console.log(originalRectangle);
console.log(copiedRectangle);

```

In this code:

We use the Prototype Pattern to create similar shapes (circles and rectangles). The Shape class defines a common interface with a clone method that all shape subclasses implement.
Each shape subclass (e.g., Circle and Rectangle) implements the clone method, which creates a new instance of the same shape type with copied properties.
This approach allows us to create new shapes efficiently by cloning existing shapes, reducing the duplication of code and minimizing the risk of errors.

:::

---

## When to Use

When to Use the Prototype Pattern:
You should consider using the Prototype Pattern in the following situations:

When you want to create new objects by copying existing objects, and the objects share similar properties and behaviors.
When you want to avoid the overhead of initializing objects from scratch, especially when the object creation process is complex.
When you need to create a large number of similar objects efficiently.
Now, let's provide code examples for both the problem and the solution.