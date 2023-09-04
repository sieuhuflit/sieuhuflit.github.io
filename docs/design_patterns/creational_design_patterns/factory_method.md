# Factory method 🏭 

# Problem

:::danger Problem

In software design, you often encounter scenarios where you need to create objects of different types, but you want to abstract away the details of object creation from the client code. Directly instantiating objects using new can lead to tight coupling between the client code and the classes being instantiated, making it challenging to introduce new classes or change existing ones.

For example, imagine you're building a game and need to create various types of characters, like wizards, warriors, and archers. If you directly create these characters in your game code, it becomes difficult to extend the game with new character types or change the implementation of existing characters without modifying the client code.

```js
// Problem: Creating characters without Factory Method

// Character classes
class Wizard {
  constructor(name) {
    this.name = name;
    this.type = "Wizard";
  }

  attack() {
    console.log(`${this.name} casts a spell.`);
  }
}

class Warrior {
  constructor(name) {
    this.name = name;
    this.type = "Warrior";
  }

  attack() {
    console.log(`${this.name} swings a sword.`);
  }
}

class Archer {
  constructor(name) {
    this.name = name;
    this.type = "Archer";
  }

  attack() {
    console.log(`${this.name} shoots an arrow.`);
  }
}

// Game code
const player1 = new Wizard("Gandalf");
const player2 = new Warrior("Aragorn");

player1.attack(); // Output: Gandalf casts a spell.
player2.attack(); // Output: Aragorn swings a sword.
```
In this code, we have three character classes (Wizard, Warrior, and Archer). The game code directly creates instances of these classes based on the player's choice. While this approach works, it has several drawbacks:

**1. Tight Coupling**: The client code is tightly coupled to the specific character classes. If you want to add a new character type or modify the existing ones, you need to modify the client code, potentially introducing bugs or breaking existing functionality.

**2. Scalability Issues**: As the game grows, maintaining and extending the codebase becomes challenging. Adding new character types requires modifying the client code, which can lead to code that's difficult to manage and prone to errors.

To address these issues, we can implement the Factory Method Pattern, as shown in the previous example, to decouple the client code from the concrete character classes and make it easier to extend the game with new character types.
:::

---

## Solution

:::success Factory Pattern Solution
The Factory Method Pattern addresses the object creation problem by defining an interface (or abstract class) for creating objects, but allowing subclasses to decide the actual class to instantiate. It abstracts the process of object creation, promoting loose coupling between the client code and the classes being created. This way, you can add new classes (new types of objects) without modifying the existing client code.


```js
// Solution: Using Factory Method Pattern

// Step 1: Define the Creator (CharacterFactory)
class CharacterFactory {
  createCharacter(name) {
    throw new Error("Subclasses must implement createCharacter method.");
  }
}

// Step 2: Create Concrete Creators (WizardFactory, WarriorFactory, ArcherFactory)
class WizardFactory extends CharacterFactory {
  createCharacter(name) {
    return new Wizard(name);
  }
}

class WarriorFactory extends CharacterFactory {
  createCharacter(name) {
    return new Warrior(name);
  }
}

class ArcherFactory extends CharacterFactory {
  createCharacter(name) {
    return new Archer(name);
  }
}

// Character classes remain the same
class Wizard {
  constructor(name) {
    this.name = name;
    this.type = "Wizard";
  }

  attack() {
    console.log(`${this.name} casts a spell.`);
  }
}

class Warrior {
  constructor(name) {
    this.name = name;
    this.type = "Warrior";
  }

  attack() {
    console.log(`${this.name} swings a sword.`);
  }
}

class Archer {
  constructor(name) {
    this.name = name;
    this.type = "Archer";
  }

  attack() {
    console.log(`${this.name} shoots an arrow.`);
  }
}

// Game code
function createCharacterAndAttack(factory, playerName) {
  const character = factory.createCharacter(playerName);
  character.attack();
}

const wizardFactory = new WizardFactory();
const warriorFactory = new WarriorFactory();
const archerFactory = new ArcherFactory();

createCharacterAndAttack(wizardFactory, "Gandalf"); // Output: Gandalf casts a spell.
createCharacterAndAttack(warriorFactory, "Aragorn"); // Output: Aragorn swings a sword.
createCharacterAndAttack(archerFactory, "Legolas"); // Output: Legolas shoots an arrow.
```

In this code, we've implemented the Factory Method Pattern:

We have a CharacterFactory abstract class (Creator) with a createCharacter method that must be implemented by concrete factories.

We create three concrete factories: WizardFactory, WarriorFactory, and ArcherFactory. Each factory implements the createCharacter method to create specific character instances.

The game code uses the createCharacterAndAttack function, which takes a factory and a player name. It creates a character using the factory and then calls the attack method on the created character.

With this pattern, adding new character types is as simple as creating a new factory class and implementing the createCharacter method for that type, without modifying the client code. This promotes extensibility and maintainability in your game code.
:::

## When to Use

When to Use the Factory Method Pattern:
You should consider using the Factory Method Pattern in the following situations:

1. When you want to delegate the responsibility of object creation to subclasses.
2. When you need to create objects based on different conditions or configurations.
3. When you want to ensure that the client code remains decoupled from the concrete classes being created.
4. When you need to extend the system with new classes without modifying existing code.

The Factory Method Pattern is especially useful when you have a family of related classes or when you anticipate changes in the types of objects to be created in the future.