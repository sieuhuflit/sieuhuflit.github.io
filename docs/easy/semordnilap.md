# Semordnilap

:::info Semordnilap
Semordnilap
Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".

The order of the returned pairs and the order of the strings within each pair does not matter.

Sample Input

```
words = ["diaper", "abc", "test", "cba", "repaid"]
```

Sample Output

```
[["diaper", "repaid"], ["abc", "cba"]]
```

:::

---

```js title="Solution"
// O(n * m) time | O(n * m) space
// n is number of words
// m is the length of the longest word
function semordnilap(words) {
  const wordsSet = new Set(words);
  const semordnilapPairs = [];

  for (const word of words) {
    const reverse = word.split("").reverse().join("");
    if (wordsSet.has(reverse) && reverse !== word) {
      semordnilapPairs.push([word, reverse]);
      wordsSet.delete(word);
      wordsSet.delete(reverse);
    }
  }
  return semordnilapPairs;
}
```
