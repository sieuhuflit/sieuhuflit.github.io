---
tags:
  - Arrays
---

# Zero Sum Subarray

:::info Zero Sum Subarray
You're given a list of integers nums. Write a function that returns a boolean representing whether there exists a zero-sum subarray of nums.

A zero-sum subarray is any subarray where all of the values add up to zero. A subarray is any contiguous section of the array. For the purposes of this problem, a subarray can be as small as one element and as long as the original array.

Sample Input
```
nums = [-5, -5, 2, 3, -2]
```
Sample Output
```
True // The subarray [-5, 2, 3] has a sum of 0
```

:::

```js title="Solution"
// O(n) time | O(n) space - where n is the length of nums
function zeroSumSubarray(nums) {
  const sums = new Set([0]);
  let currentSum = 0;
  for (const num of nums) {
    currentSum += num;
    if (sums.has(currentSum)) return true;
    sums.add(currentSum);
  }

  return false;
}
```