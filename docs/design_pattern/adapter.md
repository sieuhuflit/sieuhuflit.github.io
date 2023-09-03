# Adapter

# Problem

:::danger The Adapter Pattern Problem:
In software development, you may encounter situations where two existing classes or interfaces have incompatible methods or interfaces. This can occur when working with external libraries or legacy code that cannot be changed. It becomes challenging to use these classes together in a seamless way without modifying their source code.

For example, you may have one class that expects data in one format (e.g., JSON), while another class provides data in a different format (e.g., XML). Using these classes together without an adapter can result in code that is tightly coupled and hard to maintain.

```js
// Problem: Using incompatible classes without an adapter

// Existing class for handling JSON data
class JSONHandler {
  processJSON(data) {
    console.log("Processing JSON data:", data);
  }
}

// Existing class for handling XML data
class XMLProcessor {
  processXML(data) {
    console.log("Processing XML data:", data);
  }
}

// Client code
const jsonData = '{"name": "John", "age": 30}';
const xmlData = '<person><name>John</name><age>30</age></person>';

const jsonHandler = new JSONHandler();
jsonHandler.processJSON(jsonData);

const xmlProcessor = new XMLProcessor();
xmlProcessor.processXML(xmlData);
```
In this code, we have two existing classes, JSONHandler and XMLProcessor, with incompatible interfaces for processing data in JSON and XML formats. Using these classes together without an adapter results in tightly coupled code that cannot handle both formats seamlessly.

:::

---

## Solution

:::success The Adapter Pattern Solution:
The Adapter Pattern allows you to create a bridge between two incompatible interfaces, making them work together seamlessly. It involves creating an adapter class that wraps one of the incompatible classes and provides a consistent interface that the client code can use. The adapter translates requests from the client code into calls that are compatible with the wrapped class.

```js
// Solution: Using the Adapter Pattern to make incompatible classes work together

// Existing class for handling JSON data
class JSONHandler {
  processJSON(data) {
    console.log("Processing JSON data:", data);
  }
}

// Adapter for handling XML data using the JSONHandler interface
class XMLAdapter {
  constructor(jsonHandler) {
    this.jsonHandler = jsonHandler;
  }

  processXML(xmlData) {
    // Convert XML to JSON format
    const jsonEquivalent = this.convertXMLToJSON(xmlData);
    // Use the JSONHandler's interface to process the data
    this.jsonHandler.processJSON(jsonEquivalent);
  }

  convertXMLToJSON(xmlData) {
    // Simplified conversion for demonstration
    // In a real scenario, a more complex conversion logic would be used
    const jsonEquivalent = JSON.stringify({ name: "John", age: 30 });
    return jsonEquivalent;
  }
}

// Client code
const jsonData = '{"name": "John", "age": 30}';
const xmlData = '<person><name>John</name><age>30</age></person>';

const jsonHandler = new JSONHandler();
jsonHandler.processJSON(jsonData);

const xmlAdapter = new XMLAdapter(jsonHandler);
xmlAdapter.processXML(xmlData);
```

In this code:

- We use the Adapter Pattern to create an XMLAdapter class that wraps the JSONHandler class.
- The XMLAdapter class provides an interface compatible with the JSONHandler, allowing it to process XML data by first converting it to JSON format.
- The client code can now use both the JSONHandler and the XMLAdapter to process data in JSON and XML formats seamlessly.
:::

---

## When to Use

When to Use the Adapter Pattern:
You should consider using the Adapter Pattern in the following situations:

1. When you need to make two existing classes work together, but their interfaces are incompatible.
2. When you want to encapsulate and isolate the code that deals with the incompatibility, making it easier to change or extend in the future.
3. When you want to reuse existing classes without modifying their source code, especially when dealing with external libraries or legacy code.