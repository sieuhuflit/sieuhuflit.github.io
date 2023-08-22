# Sorted Squared Array

:::info Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Sample Input
```
array = [1, 2, 3, 5, 6, 8, 9]
```

Sample Output
```
[1, 4, 9, 25, 36, 64, 81]
```
:::
---

```js title="Solution 1"
// O(nlogn) time | O(n) space
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sortedSquares[i] = element * element;
  }
  sortedSquares.sort((a, b) => a- b);
  return sortedSquares;
}
```

```js title="Solution 2"
// O(n) time | O(n) space
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let start = 0;
  let end = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const startValue = array[start];
    const endValue = array[end];
    if (Math.abs(startValue) < Math.abs(endValue)) {
      sortedSquares[i] = endValue * endValue;
      end--;
    } else {
      sortedSquares[i] = startValue * startValue;
      start++;
    }
  }
  return sortedSquares;

}
```
