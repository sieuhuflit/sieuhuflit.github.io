# Symmetrical Tree

:::info Symmetrical Tree
Write a function that takes in a Binary Tree and returns if that tree is symmetrical. A tree is symmetrical if the left and right subtrees are mirror images of each other.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

Sample Input
```
tree =    1
       /     \
      2       2
    /   \   /   \
   3     4 4     3
 /   \          /  \
5     6        6    5
```   
Sample Output
```
True
```
:::


```js title="Solution 1"
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

// O(n) time | O(h) space
function symmetricalTree(tree) {
  const stackLeft = [tree.left];
  const stackRight = [tree.right];

  while (stackLeft.length > 0) {
    const left = stackLeft.pop();
    const right = stackRight.pop();

    if (left === null && right === null) continue;
    if (left === null || right === null || left.value !== right.value) {
      return false;
    }

    stackLeft.push(left.left);
    stackLeft.push(left.right);
    stackRight.push(right.right);
    stackRight.push(right.left);
  }
  return true;
}
```


```js title="Solution 2"
// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

// O(n) time | O(h) space
function symmetricalTree(tree) {
  return symmetricalTreeHelper(tree.left, tree.right);
}

function symmetricalTreeHelper(left, right) {
  if (left !== null && right !== null && left.value === right.value) {
    return symmetricalTreeHelper(left.left, right.right) && symmetricalTreeHelper(left.right, right.left);
  }
  return left === right;
}
```