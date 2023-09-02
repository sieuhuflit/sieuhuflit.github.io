---
tags:
  - Arrays
---

# Transpose Matrix

:::info Transpose Matrix

You're given a 2D array of integers matrix. Write a function that returns the transpose of the matrix.

The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); it switches the row and column indices of the original matrix.

You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.

Sample Input
```
matrix = [
  [1, 2],
]
```

Sample Output
```
[
  [1],
  [2]
]
```
:::
---

```js title="Solution 1"
// O(w * h) time | O(w * h) space - where w is the
// width of the matrix and h is the height
function transposeMatrix(matrix) {
  const transposedMatrix = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
}