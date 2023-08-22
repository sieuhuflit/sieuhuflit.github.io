# Validate Subsequence

:::info Validate Subsequence

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

Sample Input
```
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
```

Sample Output
```
true
```
:::
---

```js title="Solution 1"
// O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
  let index = 0;
  let seqIndex = 0;
  while (index < array.length && seqIndex < sequence.length) {
    if (array[index] === sequence[seqIndex]) seqIndex++;
    index++;
  }
  return seqIndex === sequence.length;
}
```

```js title="Solution 2"
// O(n) time | O(n) space
function isValidSubsequence(array, sequence) {
  let seqIndex = 0;
  for (const value of array) {
    if (seqIndex === sequence.length) break;
    if (sequence[seqIndex] === value) seqIndex++;
  }
  return seqIndex === sequence.length;
}
```
