# Abstract factory 🏭🧩

# Problem

:::danger Problem

In some complex systems, you may need to create families of related objects that have compatible interfaces. For instance, in a graphical user interface (GUI) framework, you might need to create various UI components like buttons, text fields, and checkboxes. Each component has a different appearance and behavior, and these components must be consistent within the same theme (e.g., dark mode or light mode).

Without the Abstract Factory Pattern, you might end up with code that directly creates these components without considering the theme, leading to UI elements that don't match. Additionally, if you want to switch themes or add new components, you'll need to make changes in multiple places throughout the codebase.

```js
import React from 'react';

// Without Pattern: Creating themed UI components directly

// Light theme components
const LightButton = () => (
  <button className="light-button">Light Button</button>
);

const LightTextField = () => (
  <input type="text" className="light-text-field" placeholder="Light Text Field" />
);

// Dark theme components
const DarkButton = () => (
  <button className="dark-button">Dark Button</button>
);

const DarkTextField = () => (
  <input type="text" className="dark-text-field" placeholder="Dark Text Field" />
);

// Themed UI component
const ThemedUI = ({ theme }) => {
  return (
    <div>
      {theme === 'light' ? (
        <div>
          <LightButton />
          <LightTextField />
        </div>
      ) : (
        <div>
          <DarkButton />
          <DarkTextField />
        </div>
      )}
    </div>
  );
};

// App component
function App() {
  return (
    <div>
      <h1>Themed UI Components Without Pattern</h1>
      <ThemedUI theme="light" />
      <ThemedUI theme="dark" />
    </div>
  );
}

export default App;
```

In this code, we create UI components (buttons and text fields) without considering the theme. This leads to inconsistent UI rendering, especially when switching themes or adding new components.

:::

---

## Solution

:::success Factory Pattern Solution
The Factory Method Pattern addresses the object creation problem by defining an interface (or abstract class) for creating objects, but allowing subclasses to decide the actual class to instantiate. It abstracts the process of object creation, promoting loose coupling between the client code and the classes being created. This way, you can add new classes (new types of objects) without modifying the existing client code.


```js
import React, { Component } from 'react';

// Step 1: Define Abstract Factory (UIFactory)
class UIFactory {
  createButton() {
    throw new Error("Subclasses must implement createButton method.");
  }

  createTextField() {
    throw new Error("Subclasses must implement createTextField method.");
  }
}

// Step 2: Create Concrete Factories (LightUIFactory and DarkUIFactory)
class LightUIFactory extends UIFactory {
  createButton() {
    return <LightButton />;
  }

  createTextField() {
    return <LightTextField />;
  }
}

class DarkUIFactory extends UIFactory {
  createButton() {
    return <DarkButton />;
  }

  createTextField() {
    return <DarkTextField />;
  }
}

// Step 3: Define Abstract Products (Button and TextField)
class Button extends Component {
  render() {
    throw new Error("Subclasses must implement render method.");
  }
}

class TextField extends Component {
  render() {
    throw new Error("Subclasses must implement render method.");
  }
}

// Step 4: Create Concrete Products (LightButton, DarkButton, LightTextField, DarkTextField)
class LightButton extends Button {
  render() {
    return <button className="light-button">Light Button</button>;
  }
}

class DarkButton extends Button {
  render() {
    return <button className="dark-button">Dark Button</button>;
  }
}

class LightTextField extends TextField {
  render() {
    return <input type="text" className="light-text-field" placeholder="Light Text Field" />;
  }
}

class DarkTextField extends TextField {
  render() {
    return <input type="text" className="dark-text-field" placeholder="Dark Text Field" />;
  }
}

// Step 5: Create a Themed UI Component
class ThemedUI extends Component {
  constructor(props) {
    super(props);
    this.factory = props.theme === 'light' ? new LightUIFactory() : new DarkUIFactory();
  }

  render() {
    const button = this.factory.createButton();
    const textField = this.factory.createTextField();

    return (
      <div>
        {button}
        {textField}
      </div>
    );
  }
}

// App component
function App() {
  return (
    <div>
      <h1>Themed UI Components with Abstract Factory Pattern</h1>
      <ThemedUI theme="light" />
      <ThemedUI theme="dark" />
    </div>
  );
}

export default App;
```
In this code, we've applied the Abstract Factory Pattern to create themed UI components. The Abstract Factory ensures that the created components are consistent with the chosen theme, and it allows for easy addition of new themes or components in the future. The ThemedUI component selects the appropriate factory based on the theme prop.
:::

## When to Use

You should consider using the Abstract Factory Pattern in the following situations:

1. When your system needs to create families of related or dependent objects.
2. When you want to ensure that the created objects are consistent and compatible with each other, such as in theme-based UI components.
3. When you need to provide an interface for creating objects without specifying their concrete classes.
4. When you want to support multiple product families with the ability to add new families easily.
