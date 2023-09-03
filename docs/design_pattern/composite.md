# Composite

# Problem

:::danger The Composite Pattern Problem:
In software development, you may need to represent complex hierarchies or structures of objects where individual objects and compositions of objects share a common interface. For example, you might want to represent a tree structure of nodes, where a node can be either a leaf node (individual object) or a composite node (collection of objects).

Without the Composite Pattern, you may have to treat leaf objects and composite objects differently in your code, leading to complex conditional logic and difficulty in managing the hierarchy.

```js
// Problem: Representing a tree structure without the Composite Pattern

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  display() {
    console.log(`Node: ${this.name}`);
    for (const child of this.children) {
      child.display();
    }
  }
}

// Creating a tree structure
const root = new TreeNode("Root");

const node1 = new TreeNode("Node 1");
const node2 = new TreeNode("Node 2");

root.addChild(node1);
root.addChild(node2);

const leaf1 = new TreeNode("Leaf 1");
const leaf2 = new TreeNode("Leaf 2");

node1.addChild(leaf1);
node2.addChild(leaf2);

// Displaying the tree
root.display();

```
In this code, we attempt to represent a tree structure using a TreeNode class. However, there is a problem with treating both individual nodes and leaf nodes uniformly, as each TreeNode has a children property that is not appropriate for leaf nodes.
:::

---

## Solution

:::success The Composite Pattern Solution:
The Composite Pattern allows you to compose objects into tree structures to represent part-whole hierarchies. It defines a uniform interface for both individual objects and compositions of objects. This enables you to treat individual objects and compositions of objects uniformly, simplifying the code that interacts with the hierarchy.

```js
// Solution: Using the Composite Pattern to represent a tree structure

// Component Interface
class Component {
  constructor(name) {
    this.name = name;
  }

  display() {
    throw new Error("Subclasses must implement display.");
  }
}

// Leaf Node
class Leaf extends Component {
  display() {
    console.log(`Leaf: ${this.name}`);
  }
}

// Composite Node
class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  display() {
    console.log(`Composite Node: ${this.name}`);
    for (const child of this.children) {
      child.display();
    }
  }
}

// Creating a tree structure
const root = new Composite("Root");

const node1 = new Composite("Node 1");
const node2 = new Composite("Node 2");

root.addChild(node1);
root.addChild(node2);

const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");

node1.addChild(leaf1);
node2.addChild(leaf2);

// Displaying the tree
root.display();
```
In this code with the Composite Pattern:

- We have separate classes for Leaf nodes (Leaf) and Composite nodes (Composite).
- Both Leaf and Composite nodes implement a common Component interface, allowing them to be treated uniformly.
- The Composite class can contain child components (either Leaf or Composite), and it recursively displays its children.
:::

---

## When to Use

When to Use the Composite Pattern:
You should consider using the Composite Pattern in the following situations:

1. When you need to represent hierarchical structures of objects where individual objects and compositions of objects share a common interface.
2. When you want to treat both leaf objects and composite objects uniformly.
3. When you want to simplify client code by abstracting the complexities of the hierarchy.
4. When you want to add or remove objects from the hierarchy dynamically.
