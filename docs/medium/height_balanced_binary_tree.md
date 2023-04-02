# Height Balanced Binary Tree

:::info Height Balanced Binary Tree
You're given the root node of a Binary Tree. Write a function that returns true if this Binary Tree is height balanced and false if it isn't.

A Binary Tree is height balanced if for each node in the tree, the difference between the height of its left subtree and the height of its right subtree is at most 1.

Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

Sample Input
```
tree = 1
     /   \
    2     3
  /   \     \
 4     5     6
     /   \
    7     8
```   
Sample Output
```
true.
```
:::


```js title="Solution 1"
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced
    this.height = height;
  }
}

// O(n) time | O(h) space
function heightBalancedBinaryTree(tree) {
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

function getTreeInfo(node) {
  if (node === null) return new TreeInfo(true, -1);

  const leftSubtreeInfo = getTreeInfo(node.left);
  const rightSubtreeInfo = getTreeInfo(node.right);

  const isBalanced = 
    leftSubtreeInfo.isBalanced && 
    rightSubtreeInfo.isBalanced &&
    Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;
  const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
  return new TreeInfo(isBalanced, height);
}


```