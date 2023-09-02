---
tags:
  - Arrays
---

# Majority Element

:::info Majority Element
Write a function that takes in a non-empty, unordered array of positive integers and returns the array's majority element without sorting the array and without using more than constant space.

An array's majority element is an element of the array that appears in over half of its indices. Note that the most common element of an array (the element that appears the most times in the array) isn't necessarily the array's majority element; for example, the arrays [3, 2, 2, 1] and [3, 4, 2, 2, 1] both have 2 as their most common element, yet neither of these arrays have a majority element, because neither 2 nor any other element appears in over half of the respective arrays' indices.

You can assume that the input array will always have a majority element.

Sample Input
```
array = [1, 2, 3, 2, 2, 1, 2]
```
Sample Output
```
2 // 2 occurs in 4/7 array indices, making it the majority element
```

:::

```js title="Solution 1"
// O(n) time | O(1) space - where n is the number of elements in the array
function majorityElement(array) {
  let count = 0;
  let answer = null;

  for (const value of array) {
    if (count === 0) answer = value;

    if (value === answer) {
      count++;
    } else {
      count--;
    }
  }

  return answer;
}
```

```js title="Solution 2"
// O(n) time | O(1) space - where n is the number of elements in the array
function majorityElement(array) {
  let answer = 0;

  for (let currentBit = 0; currentBit < 32; currentBit++) {
    const currentBitValue = 1 << currentBit;
    let onesCount = 0;

    for (const num of array) {
      if ((num & currentBitValue) !== 0) onesCount++;
    }

    if (onesCount > array.length / 2) answer += currentBitValue;
  }

  return answer;
}
```