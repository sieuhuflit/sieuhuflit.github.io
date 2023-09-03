# Memento

# Problem

:::danger The Memento Pattern Problem:
In software development, you may have scenarios where you need to capture and restore an object's internal state without exposing its details. For example, consider a text editor where you want to implement undo/redo functionality. Without the Memento Pattern, you might need to expose the entire state of the editor, leading to tight coupling and a lack of encapsulation.

```js
// Problem: Implementing undo/redo functionality without the Memento Pattern

class TextEditor {
  constructor() {
    this.content = "";
  }

  type(text) {
    this.content += text;
  }

  deleteLastCharacter() {
    this.content = this.content.slice(0, -1);
  }
}

// Client code managing undo/redo manually
const editor = new TextEditor();
editor.type("Hello, ");
console.log("Content after typing: ", editor.content);

editor.type("world!");
console.log("Content after typing more: ", editor.content);

editor.deleteLastCharacter();
console.log("Content after deleting: ", editor.content);

// Manually maintaining a history for undo/redo
const history = [];
history.push(editor.content); // Save the current state

// Restoring previous state
editor.content = history.pop();
console.log("Content after undo: ", editor.content);
```
In this code, the text editor directly manages its content, and the client code manually maintains a history to implement undo/redo functionality. This approach exposes the internal state of the editor and lacks encapsulation.
:::

---

## Solution

:::success The Memento Pattern Solution:
The Memento Pattern provides a way to capture an object's internal state and externalize it, allowing the object to be restored to that state at a later time. It involves three key components: the originator (the object whose state needs to be saved), the memento (a snapshot of the state), and the caretaker (responsible for storing and retrieving mementos). This pattern promotes encapsulation and allows for easy undo/redo functionality.

```js
// Solution: Implementing undo/redo functionality using the Memento Pattern

class Memento {
  constructor(content) {
    this.content = content;
  }
}

class TextEditor {
  constructor() {
    this.content = "";
  }

  type(text) {
    this.content += text;
  }

  deleteLastCharacter() {
    this.content = this.content.slice(0, -1);
  }

  save() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.content;
  }
}

class EditorHistory {
  constructor() {
    this.history = [];
  }

  push(memento) {
    this.history.push(memento);
  }

  pop() {
    return this.history.pop();
  }
}

// Client code using the Memento Pattern for undo/redo
const editor = new TextEditor();
const history = new EditorHistory();

editor.type("Hello, ");
console.log("Content after typing: ", editor.content);

history.push(editor.save()); // Save the current state

editor.type("world!");
console.log("Content after typing more: ", editor.content);

editor.deleteLastCharacter();
console.log("Content after deleting: ", editor.content);

// Restoring previous state (undo)
const previousState = history.pop();
if (previousState) {
  editor.restore(previousState);
  console.log("Content after undo: ", editor.content);
} else {
  console.log("No more undo steps available.");
}

```
In this code with the Memento Pattern:

- We introduce a Memento class to represent the snapshot of the editor's content.
- The TextEditor class provides methods to save and restore the state using mementos.
- The EditorHistory class manages a history of mementos, enabling undo/redo functionality.

The Memento Pattern encapsulates the state of the TextEditor object and allows for easy undo/redo functionality without exposing the internal state. It is particularly useful when you need to capture and restore an object's state or implement undo/redo in an application.
:::

---

## When to Use

When to Use the Memento Pattern:
You should consider using the Memento Pattern in the following situations:

1. When you need to capture and restore the internal state of an object without exposing its details.
2. When you want to implement undo/redo functionality in an application.
3. When you want to ensure that the object's state is encapsulated and not directly accessible by other objects.
4. When you need to maintain a history of changes to an object's state.