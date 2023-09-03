# Bridge

# Problem

:::danger The Bridge Pattern Problem:
In software development, you may encounter situations where you have a hierarchy of abstractions and multiple implementations for those abstractions. The traditional inheritance-based approach can lead to a complex and inflexible class hierarchy. Additionally, changes in the implementation classes can affect all subclasses, leading to maintenance challenges.

For example, imagine a scenario where you have different shapes (abstractions) like circles and rectangles and different rendering engines (implementations) like vector and raster. Without the Bridge Pattern, you might create a complex hierarchy of shape subclasses for each rendering engine, which can be hard to manage.

```js
// Problem: Managing shapes and rendering engines without the Bridge Pattern

// Abstraction: Shape
class Shape {
  constructor() {}

  drawWithVector() {
    throw new Error("Subclasses must implement drawWithVector.");
  }

  drawWithRaster() {
    throw new Error("Subclasses must implement drawWithRaster.");
  }
}

// Implementations: Vector and Raster Rendering Engines
class VectorRenderingEngine {
  render() {
    console.log("Drawing in vector mode.");
  }
}

class RasterRenderingEngine {
  render() {
    console.log("Drawing in raster mode.");
  }
}

// Concrete Shapes
class Circle extends Shape {
  drawWithVector() {
    console.log("Drawing a circle with vectors.");
  }

  drawWithRaster() {
    console.log("Drawing a circle with raster.");
  }
}

class Rectangle extends Shape {
  drawWithVector() {
    console.log("Drawing a rectangle with vectors.");
  }

  drawWithRaster() {
    console.log("Drawing a rectangle with raster.");
  }
}

// Client Code
const circle = new Circle();
const rectangle = new Rectangle();

const vectorEngine = new VectorRenderingEngine();
const rasterEngine = new RasterRenderingEngine();

circle.drawWithVector();
rectangle.drawWithVector();

circle.drawWithRaster();
rectangle.drawWithRaster();

```
In this code, we have a hierarchy of shapes (abstractions) and two rendering engines (implementations). The problem is that each shape class has methods for both vector and raster rendering, which leads to a complex hierarchy. Additionally, changes in rendering engines can affect all shape subclasses, making it less flexible.

:::

---

## Solution

:::success The Bridge Pattern Solution:
The Bridge Pattern decouples the abstraction from its implementation, allowing both to vary independently. It involves creating two separate hierarchies: one for abstractions (e.g., shapes) and one for implementations (e.g., rendering engines). The abstraction holds a reference to an implementation object, and the client code interacts with the abstraction.

This separation of concerns improves flexibility, maintainability, and allows for new combinations of abstractions and implementations without changing existing code.

```js
// Solution: Using the Bridge Pattern to decouple shapes and rendering engines

// Abstraction: Shape
class Shape {
  constructor(renderingEngine) {
    this.renderingEngine = renderingEngine;
  }

  draw() {
    throw new Error("Subclasses must implement draw.");
  }
}

// Implementations: Rendering Engines
class RenderingEngine {
  render() {
    throw new Error("Subclasses must implement render.");
  }
}

class VectorRenderingEngine extends RenderingEngine {
  render() {
    console.log("Drawing in vector mode.");
  }
}

class RasterRenderingEngine extends RenderingEngine {
  render() {
    console.log("Drawing in raster mode.");
  }
}

// Concrete Shapes
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle.");
    this.renderingEngine.render();
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a rectangle.");
    this.renderingEngine.render();
  }
}

// Client Code
const vectorEngine = new VectorRenderingEngine();
const rasterEngine = new RasterRenderingEngine();

const circle = new Circle(vectorEngine);
const rectangle = new Rectangle(rasterEngine);

circle.draw();
rectangle.draw();

```

In this code with the Bridge Pattern:

- We have separated the abstraction (Shape) from the implementation (RenderingEngine).
- Each shape class now holds a reference to a rendering engine, allowing them to use the rendering engine without the need for redundant methods.
- Changes in rendering engines or the addition of new rendering engines do not impact the shape classes, enhancing flexibility and maintainability.
:::

---

## When to Use

When to Use the Bridge Pattern:
You should consider using the Bridge Pattern in the following situations:

1. When you have a complex hierarchy of abstractions and multiple implementations, and you want to avoid a combinatorial explosion of subclasses.
2. When you need to allow the abstraction and implementation to vary independently.
3. When you want to avoid tight coupling between abstractions and implementations, enabling flexibility and ease of maintenance.
4. When you need to support multiple, interchangeable implementations for an abstraction.
