# Iterator

# Problem

:::danger The Iterator Pattern Problem:
In software development, you may need to access elements of a collection (like an array or a list) without exposing the underlying data structure. Directly accessing the collection's elements can lead to tight coupling between client code and the collection, making it challenging to change the data structure or traverse it in different ways.

For example, consider a scenario where you have a collection of books, and you want to provide a way to access and iterate through these books. Without the Iterator Pattern, client code might need to know the internal details of the collection, making it less maintainable.

```js
// Problem: Accessing elements of a collection without the Iterator Pattern

class BookCollection {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }
}

// Client code accessing collection elements directly
const bookCollection = new BookCollection();
bookCollection.addBook("Book 1");
bookCollection.addBook("Book 2");

const books = bookCollection.getBooks();

for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}
```
In this code, client code directly accesses the collection's elements, making it tightly coupled with the collection's internal structure.
:::

---

## Solution

:::success The Iterator Pattern Solution:
The Iterator Pattern provides a way to access elements of a collection without exposing its underlying structure. It defines a common interface for iterators, which are responsible for traversing the collection and providing access to its elements. This decouples the client code from the collection and allows for flexibility in iterating over different types of collections.

```js
// Solution: Using the Iterator Pattern to access elements of a collection

// Iterator Interface
class Iterator {
  hasNext() {
    throw new Error("Subclasses must implement hasNext.");
  }

  next() {
    throw new Error("Subclasses must implement next.");
  }
}

// Concrete Iterator: BookIterator
class BookIterator extends Iterator {
  constructor(collection) {
    super();
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    if (this.hasNext()) {
      return this.collection[this.index++];
    }
    return null;
  }
}

class BookCollection {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  createIterator() {
    return new BookIterator(this.books);
  }
}

// Client code using the Iterator Pattern
const bookCollection = new BookCollection();
bookCollection.addBook("Book 1");
bookCollection.addBook("Book 2");

const iterator = bookCollection.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
```
In this code with the Iterator Pattern:

- We define an Iterator interface that includes methods like hasNext and next.
- A concrete iterator class (BookIterator) implements the iterator interface and is responsible for traversing the collection.
- The BookCollection class provides a way to create an iterator for its collection.
- Client code uses the iterator to access and iterate through the collection without knowing its internal structure.
:::

---

## When to Use

When to Use the Iterator Pattern:
You should consider using the Iterator Pattern in the following situations:

1. When you want to provide a consistent way to traverse different types of collections without exposing their details.
2. When you want to decouple the client code from the underlying data structure of a collection.
3. When you want to support multiple traversal algorithms for the same collection.
4. When you want to hide the complexities of iteration, such as handling boundary conditions.
