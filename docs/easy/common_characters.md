# Common Characters

:::info Common Characters
Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignoring multiplicity.

Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return can be in any order.

Sample Input
```
strings = ["abc", "bcd", "cbaccd"]
```

Sample Output
```
["b", "c"] // The characters could be ordered differently.
```
:::
---

```js title="Solution 1"
// O(n * m) time | O(c) space - where n is the number of strings, m is the
// length of the longest string, and c is the number of unique characters across
// all strings
function commonCharacters(strings) {
  const characterCounts = {};
  for (const string of strings) {
    const uniqueStringCharacters = new Set(string);
    for (const character of uniqueStringCharacters) {
      if (!(character in characterCounts)) {
        characterCounts[character] = 0;
      }
      characterCounts[character]++;
    }
  }

  const finalCharacters = [];
  for (const [character, count] of Object.entries(characterCounts)) {
    if (count === strings.length) {
      finalCharacters.push(character);
    }
  }

  return finalCharacters;
}
```

```js title="Solution 2"
// O(n * m) time | O(m) space - where n is the number of strings, and m is the
// length of the longest string
function commonCharacters(strings) {
  const smallestString = getSmallestString(strings);
  const potentialCommonCharacters = new Set(smallestString);

  for (const string of strings) {
    removeNonexistentCharacters(string, potentialCommonCharacters);
  }

  return Array.from(potentialCommonCharacters);
}

function getSmallestString(strings) {
  let smallestString = strings[0];
  for (const string of strings) {
    if (string.length < smallestString.length) {
      smallestString = string;
    }
  }

  return smallestString;
}

function removeNonexistentCharacters(string, potentialCommonCharacters) {
  const uniqueStringCharacters = new Set(string);

  for (const character of Array.from(potentialCommonCharacters)) {
    if (!uniqueStringCharacters.has(character)) {
      potentialCommonCharacters.delete(character);
    }
  }
}

```
