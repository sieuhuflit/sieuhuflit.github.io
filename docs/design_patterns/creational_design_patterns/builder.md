# Builder 🏗️

# Problem

:::danger The Builder Pattern Problem:

In software development, you often encounter scenarios where you need to create complex objects with many optional and configurable properties. If you use a constructor with numerous parameters or setters to initialize objects, it can lead to unreadable and error-prone code. Furthermore, it becomes challenging to enforce a consistent and valid object state.

For example, imagine creating a complex document object in a word processing application with various optional properties like font, size, formatting, and images. Directly constructing such an object with numerous parameters can be unwieldy and error-prone.

```js
// Problem: Creating a complex document without the Builder Pattern

class Document {
  constructor(title, font, fontSize, content, images) {
    this.title = title;
    this.font = font;
    this.fontSize = fontSize;
    this.content = content;
    this.images = images;
  }

  print() {
    console.log(`Title: ${this.title}`);
    console.log(`Font: ${this.font}`);
    console.log(`Font Size: ${this.fontSize}`);
    console.log(`Content: ${this.content}`);
    console.log(`Images: ${this.images.join(', ')}`);
  }
}

// Creating a document
const myDocument = new Document(
  "My Document",
  "Arial",
  "12px",
  "This is the content of my document.",
  ["image1.jpg", "image2.jpg"]
);

myDocument.print();
```
In this code, we create a complex Document object with many optional properties directly in the constructor. This approach can be error-prone, especially when there are many properties, and it doesn't provide a clear way to set optional values.

:::

---

## Solution

:::success The Builder Pattern Solution:
The Builder Pattern separates the construction of a complex object from its representation, allowing you to create an object step by step. It provides a clear and fluent interface for setting object properties and ensures that the object is in a valid state at each step. This pattern improves code readability and maintainability when dealing with complex object construction.

```js
// Solution: Using the Builder Pattern to create a complex document

// Step 1: Define the Builder
class DocumentBuilder {
  constructor(title) {
    this.title = title;
    this.font = "Arial";
    this.fontSize = "12px";
    this.content = "";
    this.images = [];
  }

  setFont(font) {
    this.font = font;
    return this;
  }

  setFontSize(fontSize) {
    this.fontSize = fontSize;
    return this;
  }

  setContent(content) {
    this.content = content;
    return this;
  }

  addImage(image) {
    this.images.push(image);
    return this;
  }

  build() {
    return new Document(this);
  }
}

// Step 2: Define the Product (Document)
class Document {
  constructor(builder) {
    this.title = builder.title;
    this.font = builder.font;
    this.fontSize = builder.fontSize;
    this.content = builder.content;
    this.images = builder.images;
  }

  print() {
    console.log(`Title: ${this.title}`);
    console.log(`Font: ${this.font}`);
    console.log(`Font Size: ${this.fontSize}`);
    console.log(`Content: ${this.content}`);
    console.log(`Images: ${this.images.join(', ')}`);
  }
}

// Step 3: Usage
const myDocument = new DocumentBuilder("My Document")
  .setFont("Times New Roman")
  .setFontSize("14px")
  .setContent("This is the content of my document.")
  .addImage("image1.jpg")
  .addImage("image2.jpg")
  .build();

myDocument.print();

```

We use the Builder Pattern to create a complex Document object step by step. The DocumentBuilder class provides a fluent interface for setting properties and constructing the Document.
Each method in the builder returns the builder itself, allowing method chaining for setting multiple properties.
The build method finalizes the construction and returns the Document object.
This approach ensures that the Document object is in a valid state at each step and provides a clear and fluent way to create complex objects.
:::

## When to Use

When to Use the Builder Pattern:
You should consider using the Builder Pattern in the following situations:

1. When you need to create complex objects with many optional or configurable properties.
2. When you want to ensure that the object is in a valid state at each construction step.
3. When you want to improve code readability and maintainability by providing a fluent and clear interface for object construction.
4. When you need to create different variations of the same object.