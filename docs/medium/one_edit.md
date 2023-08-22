# One Edit

:::info One Edit

You're given two strings stringOne and stringTwo. Write a function that determines if these two strings can be made equal using only one edit.

There are 3 possible edits:

Replace: One character in one string is swapped for a different character.
Add: One character is added at any index in one string.
Remove: One character is removed at any index in one string.
Note that both strings will contain at least one character. If the strings are the same, your function should return true.

Sample Input

```
stringOne = "hello"
stringTwo = "hollo"
```

Sample Output
```
True // A single replace at index 1 of either string can make the strings equal
```
:::
---

```js title="Solution 1"
// O(n + m) time | O(n + m) space - where n is the length of stringOne, and
// m is the length of stringTwo
function oneEdit(stringOne, stringTwo) {
  const lengthOne = stringOne.length;
  const lengthTwo = stringTwo.length;
  if (Math.abs(lengthOne - lengthTwo) > 1) return false;

  for (let i = 0; i < Math.min(lengthOne, lengthTwo); i++) {
    if (stringOne[i] !== stringTwo[i]) {
      if (lengthOne > lengthTwo) {
        return stringOne.slice(i + 1) === stringTwo.slice(i);
      } else if (lengthTwo > lengthOne) {
        return stringOne.slice(i) === stringTwo.slice(i + 1);
      } else {
        return stringOne.slice(i + 1) === stringTwo.slice(i + 1);
      }
    }
  }

  return true;
}
```

```js title="Solution 2"
// O(n) time | O(1) space - where n is the length of the shorter string
function oneEdit(stringOne, stringTwo) {
  const lengthOne = stringOne.length;
  const lengthTwo = stringTwo.length;
  if (Math.abs(lengthOne - lengthTwo) > 1) return false;

  let madeEdit = false;
  let indexOne = 0;
  let indexTwo = 0;

  while (indexOne < lengthOne && indexTwo < lengthTwo) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      if (madeEdit) return false;
      madeEdit = true;

      if (lengthOne > lengthTwo) {
        indexOne++;
      } else if (lengthTwo > lengthOne) {
        indexTwo++;
      } else {
        indexOne++;
        indexTwo++;
      }
    } else {
      indexOne++;
      indexTwo++;
    }
  }

  return true;
}
```