# First Non-Repeating Character

:::info First Non-Repeating Character
Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.

Sample Input
```
string = "abcdcaf"
```
Sample Output
```
1 // The first non-repeating character is "b" and is found at index 1.
```
:::
---


```js title="Solution 1"
// O(n^2) time | O(1) space
function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) { 
    let foundDuplicate = false;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j] && i !== j) {
        foundDuplicate = true;
      }
    }
    if (!foundDuplicate) return i;
  }
  return -1;
}
```

```js title="Solution 2"
// O(n) time | O(1) space
function firstNonRepeatingCharacter(string) {
  const characterFrequencies = {};
  for (const character of string) {
    if (!(character in characterFrequencies)) characterFrequencies[character] = 0;
    characterFrequencies[character]++;
  }

  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (characterFrequencies[character] === 1) return i;
  }
  return -1;
}
```