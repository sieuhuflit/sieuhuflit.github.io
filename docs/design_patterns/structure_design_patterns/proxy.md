# Proxy

# Problem

:::danger The Proxy Pattern Problem:
In software development, you may encounter situations where you need to control access to an object or add some additional functionality to an object without modifying its code directly. Traditional approaches involve direct access to the object, which can result in issues like unauthorized access, inefficient loading, or a lack of control over resource utilization.

For example, consider a scenario where you want to control access to sensitive data or limit the number of database connections without altering the core functionality of the data access object.

```js
// Problem: Accessing a sensitive resource without access control

class SensitiveData {
  constructor() {
    this.data = "This is sensitive data.";
  }

  readData() {
    return this.data;
  }
}

// Client code
const sensitiveData = new SensitiveData();
console.log("Data: ", sensitiveData.readData());
```
In this code, we have a SensitiveData class that provides access to sensitive information without any access control. Client code can directly create an instance of SensitiveData and access the data, which might not be desirable in security-sensitive scenarios.
:::

---

## Solution

:::success The Proxy Pattern Solution:
The Proxy Pattern provides a surrogate or placeholder for another object to control access to it. It acts as an intermediary, allowing you to add behaviors or control access to the real object. The proxy follows the same interface as the real object, and client code interacts with the proxy as if it were the real object.

```js
// Solution: Using the Proxy Pattern to control access to sensitive data

// Real Subject: Sensitive Data
class SensitiveData {
  constructor() {
    this.data = "This is sensitive data.";
  }

  readData() {
    return this.data;
  }
}

// Proxy: Data Access Proxy
class DataAccessProxy {
  constructor() {
    this.sensitiveData = new SensitiveData();
  }

  readData(user) {
    if (user === "admin") {
      return this.sensitiveData.readData();
    } else {
      return "Access denied. You are not authorized to view this data.";
    }
  }
}

// Client code with controlled access
const adminProxy = new DataAccessProxy();
const userProxy = new DataAccessProxy();

console.log("Admin access: ", adminProxy.readData("admin")); // Access granted
console.log("User access: ", userProxy.readData("user")); // Access denied
```
In this code with the Proxy Pattern:

We have a SensitiveData class that provides access to sensitive information.
We create a DataAccessProxy class that acts as an intermediary between the client code and the sensitive data.
The proxy controls access by checking the user's authorization level before allowing access to the real data.
:::

---

## When to Use

When to Use the Proxy Pattern:
You should consider using the Proxy Pattern in the following situations:

1. Controlling Access: When you need to control access to an object, such as implementing access restrictions, logging access, or adding security checks.

2. Lazy Initialization: When you want to defer the creation and initialization of resource-intensive objects until they are actually needed.

3. Resource Management: When you want to manage limited resources, such as database connections or network bandwidth.

4. Monitoring: When you need to add monitoring or logging capabilities around object interactions without modifying the object itself.