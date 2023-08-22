# Minimum Characters For Words

:::info Minimum Characters For Words

Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don't need to be in any particular order.

For example, the characters ["y", "r", "o", "u"] are needed to form the words ["your", "you", "or", "yo"].

Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.

Sample Input
```
words = ["this", "that", "did", "deed", "them!", "a"]
```

Sample Output
```
["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
// The characters could be ordered differently.
```
:::
---

```js title="Solution 1"
// O(n * l) time | O(c) space - where n is the number of words,
// l is the length of the longest word, and c is the number of
// unique characters across all words
// See notes under video explanation for details about the space complexity.
function minimumCharactersForWords(words) {
  const maximumCharacterFrequencies = {};

  for (const word of words) {
    const characterFrequencies = countCharacterFrequencies(word);
    updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequencies);
  }

  return makeArrayFromCharacterFrequencies(maximumCharacterFrequencies);
}

function countCharacterFrequencies(string) {
  const characterFrequencies = {};

  for (const character of string) {
    if (!(character in characterFrequencies)) {
      characterFrequencies[character] = 0;
    }

    characterFrequencies[character] += 1;
  }

  return characterFrequencies;
}

function updateMaximumFrequencies(frequencies, maximumFrequencies) {
  for (const character in frequencies) {
    const frequency = frequencies[character];

    if (character in maximumFrequencies) {
      maximumFrequencies[character] = Math.max(frequency, maximumFrequencies[character]);
    } else {
      maximumFrequencies[character] = frequency;
    }
  }
}

function makeArrayFromCharacterFrequencies(characterFrequencies) {
  const characters = [];

  for (const character in characterFrequencies) {
    const frequency = characterFrequencies[character];

    for (let idx = 0; idx < frequency; idx++) {
      characters.push(character);
    }
  }

  return characters;
}
```