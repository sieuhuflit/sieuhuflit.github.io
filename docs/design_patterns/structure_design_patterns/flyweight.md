# Flyweight

# Problem

:::danger The Flyweight Pattern Problem:
In software development, you may encounter scenarios where you need to work with a large number of objects that have shared intrinsic (invariant) properties. Creating and managing individual objects for each instance can lead to high memory consumption and inefficiency, especially when most of the object's data is the same.

For example, consider a text editor where you need to render a large document with many characters. Creating a separate object for each character, including its font and size information, can consume a significant amount of memory and slow down the application.

```js
// Problem: Rendering a large document without the Flyweight Pattern

class Character {
  constructor(character, font, size) {
    this.character = character;
    this.font = font;
    this.size = size;
  }

  render() {
    console.log(`Rendering ${this.character} with font ${this.font} and size ${this.size}.`);
  }
}

// Creating and rendering individual characters
const characters = [];
for (let i = 0; i < 1000; i++) {
  characters.push(new Character("A", "Arial", 12));
}

for (const char of characters) {
  char.render();
}
```
In this code, we create individual Character objects for each character in a large document. Each object contains font and size information, resulting in high memory consumption and inefficiency.
:::

---

## Solution

:::success The Flyweight Pattern Solution:
The Flyweight Pattern aims to minimize memory usage and improve performance by sharing as much as possible among similar objects. It achieves this by separating the intrinsic (shared) state from the extrinsic (unique) state of objects. The intrinsic state is shared, and the extrinsic state is passed in when needed.

```js
// Solution: Rendering a large document using the Flyweight Pattern

class Character {
  constructor(character) {
    this.character = character;
  }

  render(font, size) {
    console.log(`Rendering ${this.character} with font ${font} and size ${size}.`);
  }
}

// Flyweight Factory for character creation and caching
class CharacterFactory {
  constructor() {
    this.characters = {};
  }

  getCharacter(character) {
    if (!this.characters[character]) {
      this.characters[character] = new Character(character);
    }
    return this.characters[character];
  }
}

// Creating and rendering characters using the Flyweight Pattern
const factory = new CharacterFactory();
const characters = [];

for (let i = 0; i < 1000; i++) {
  const char = factory.getCharacter("A");
  characters.push(char);
}

for (const char of characters) {
  char.render("Arial", 12);
}
```
In this code with the Flyweight Pattern:

We have a Character class that contains only the intrinsic state (the character itself).
We create a CharacterFactory class responsible for creating and caching character objects.
When rendering characters, we use the factory to retrieve or create character objects and pass the extrinsic state (font and size) as needed.
:::

---

## When to Use

When to Use the Flyweight Pattern:
You should consider using the Flyweight Pattern in the following situations:

1. When you have a large number of objects with shared intrinsic properties.
2. When you want to reduce memory consumption by sharing common data among multiple objects.
3. When most of the object's data is invariant and can be shared.
4. When you want to improve performance by minimizing the creation and management of similar objects.