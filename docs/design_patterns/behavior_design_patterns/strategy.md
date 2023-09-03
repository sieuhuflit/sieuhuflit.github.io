# Strategy

# Problem

:::danger The Strategy Pattern Problem:
In software development, you may need to implement different algorithms or behaviors for a particular task. Without the Strategy Pattern, you might end up with conditional statements to select the appropriate algorithm based on specific conditions. This approach leads to code that is difficult to maintain, inflexible, and tightly coupled to the algorithms.

For example, consider a sorting algorithm that needs to be flexible enough to switch between various sorting methods (e.g., bubble sort, merge sort, quicksort). Without the Strategy Pattern, you might use if-else statements to choose the sorting algorithm, making the code complex and less extensible.

```js
// Problem: Implementing sorting algorithms without the Strategy Pattern

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Implementation of merge sort
  // ...
}

// Client code selecting and using sorting algorithms
const unsortedArray = [5, 2, 9, 1, 5, 6];

// Conditionally choose a sorting algorithm
const useBubbleSort = true;

if (useBubbleSort) {
  bubbleSort(unsortedArray);
} else {
  mergeSort(unsortedArray);
}

console.log("Sorted array:", unsortedArray);
```
In this code, the client code directly selects and uses sorting algorithms based on conditional statements (if-else), resulting in tight coupling between the client and the algorithms.
:::

---

## Solution

:::success The Strategy Pattern Solution:
The Strategy Pattern defines a family of interchangeable algorithms, encapsulates each algorithm in a separate class (strategy), and allows clients to choose and switch between these strategies at runtime. It promotes flexibility, encapsulation, and clean separation of concerns.

```js
// Solution: Implementing sorting algorithms using the Strategy Pattern

class BubbleSort {
  sort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
}

class MergeSort {
  sort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    // Implementation of merge sort
    // ...
  }
}

class SortingContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  sort(arr) {
    this.strategy.sort(arr);
  }
}

// Client code using the Strategy Pattern
const unsortedArray = [5, 2, 9, 1, 5, 6];

const bubbleSort = new BubbleSort();
const mergeSort = new MergeSort();

const sortingContext = new SortingContext(bubbleSort);

sortingContext.sort(unsortedArray);

console.log("Sorted array using bubble sort:", unsortedArray);

sortingContext.setStrategy(mergeSort);
sortingContext.sort(unsortedArray);

console.log("Sorted array using merge sort:", unsortedArray);
```
In this code with the Strategy Pattern:

- We define separate strategy classes (BubbleSort, MergeSort) for each sorting algorithm, encapsulating their behavior.
- The SortingContext class allows the client to set and switch between sorting strategies at runtime.
- Client code interacts with the SortingContext and delegates the sorting operation to the selected strategy.

The Strategy Pattern promotes cleaner separation of concerns, encapsulation of algorithms, and easy switching between strategies at runtime. It is particularly useful when you have multiple interchangeable algorithms or behaviors and want to avoid conditional statements to determine behavior.
:::

---

## When to Use

When to Use the Strategy Pattern:
You should consider using the Strategy Pattern in the following situations:

1. When you have multiple algorithms or behaviors that need to be used interchangeably.
2. When you want to encapsulate each algorithm in its own class, making it easy to add or modify algorithms.
3. When you need to select and switch between algorithms at runtime.
4. When you want to avoid conditional statements that determine behavior.