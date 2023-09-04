"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||s;return n?i.createElement(p,o(o({ref:t},d),{},{components:n})):i.createElement(p,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[h]="string"==typeof e?e:a,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const s={},o="State",r={unversionedId:"design_patterns/behavior_design_patterns/state",id:"design_patterns/behavior_design_patterns/state",title:"State",description:"In software development, you may have objects that change their behavior based on their internal state. Managing these state transitions can become complex without proper structure. Without the State Pattern, you might use a multitude of conditional statements to manage these state changes, resulting in code that is difficult to maintain and extend.",source:"@site/docs/design_patterns/behavior_design_patterns/state.md",sourceDirName:"design_patterns/behavior_design_patterns",slug:"/design_patterns/behavior_design_patterns/state",permalink:"/docs/design_patterns/behavior_design_patterns/state",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/design_patterns/behavior_design_patterns/state.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693800530,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observer \ud83d\udc40",permalink:"/docs/design_patterns/behavior_design_patterns/observer"},next:{title:"Strategy \ud83c\udfaf",permalink:"/docs/design_patterns/behavior_design_patterns/strategy"}},c={},l=[{value:"Solution",id:"solution",level:2},{value:"When to Use",id:"when-to-use",level:2}],d={toc:l},h="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state"},"State"),(0,a.kt)("h1",{id:"problem"},"Problem"),(0,a.kt)("admonition",{title:"The State Pattern Problem:",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"In software development, you may have objects that change their behavior based on their internal state. Managing these state transitions can become complex without proper structure. Without the State Pattern, you might use a multitude of conditional statements to manage these state changes, resulting in code that is difficult to maintain and extend."),(0,a.kt)("p",{parentName:"admonition"},"For example, consider a vending machine that dispenses items based on its current state. Without the State Pattern, you might have numerous if-else statements to handle different states, making the code error-prone and challenging to modify."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Problem: Implementing a vending machine without the State Pattern\n\nclass VendingMachine {\n  constructor() {\n    this.balance = 0;\n    this.items = {\n      cola: { price: 1.5, quantity: 10 },\n      chips: { price: 1, quantity: 5 },\n    };\n    this.currentState = "idle";\n  }\n\n  insertCoin(coin) {\n    if (this.currentState === "idle") {\n      this.balance += coin;\n      this.currentState = "coinInserted";\n      console.log(`Inserted ${coin} cents.`);\n    } else if (this.currentState === "coinInserted") {\n      console.log("Coin already inserted.");\n    } else {\n      console.log("Cannot insert coin. Please make a selection.");\n    }\n  }\n\n  selectItem(item) {\n    if (this.currentState === "coinInserted") {\n      const selectedItem = this.items[item];\n      if (selectedItem && selectedItem.quantity > 0) {\n        if (this.balance >= selectedItem.price) {\n          this.balance -= selectedItem.price;\n          selectedItem.quantity--;\n          console.log(`Dispensing ${item}.`);\n        } else {\n          console.log(`Insufficient balance for ${item}.`);\n        }\n      } else {\n        console.log(`${item} is out of stock.`);\n      }\n    } else {\n      console.log("Please insert a coin.");\n    }\n  }\n\n  returnCoins() {\n    if (this.currentState === "coinInserted") {\n      console.log(`Returned ${this.balance} cents.`);\n      this.balance = 0;\n      this.currentState = "idle";\n    } else {\n      console.log("No coins to return.");\n    }\n  }\n}\n\n// Client code\nconst vendingMachine = new VendingMachine();\n\nvendingMachine.insertCoin(50); // Insert coin\nvendingMachine.selectItem("cola"); // Select item\nvendingMachine.returnCoins(); // Return change\n')),(0,a.kt)("p",{parentName:"admonition"},"In this code, managing the state of the vending machine without the State Pattern involves multiple conditional statements (if-else) and results in complex code for handling state transitions.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("admonition",{title:"The State Pattern Solution:",type:"success"},(0,a.kt)("p",{parentName:"admonition"},"The State Pattern allows an object to change its behavior when its internal state changes. It involves defining a set of state classes, each representing a specific behavior, and allowing the context object (the object whose behavior changes) to delegate state-specific operations to the current state object. This pattern simplifies the management of state transitions and promotes cleaner and more maintainable code."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Solution: Implementing a vending machine using the State Pattern\n\nclass VendingMachine {\n  constructor() {\n    this.balance = 0;\n    this.items = {\n      cola: { price: 1.5, quantity: 10 },\n      chips: { price: 1, quantity: 5 },\n    };\n    this.currentState = new IdleState(this);\n  }\n\n  insertCoin(coin) {\n    this.currentState.insertCoin(coin);\n  }\n\n  selectItem(item) {\n    this.currentState.selectItem(item);\n  }\n\n  returnCoins() {\n    this.currentState.returnCoins();\n  }\n\n  setState(newState) {\n    this.currentState = newState;\n  }\n}\n\nclass VendingMachineState {\n  constructor(vendingMachine) {\n    this.vendingMachine = vendingMachine;\n  }\n\n  insertCoin() {\n    console.log("Coin already inserted.");\n  }\n\n  selectItem() {\n    console.log("Please insert a coin.");\n  }\n\n  returnCoins() {\n    console.log("No coins to return.");\n  }\n}\n\nclass IdleState extends VendingMachineState {\n  insertCoin(coin) {\n    this.vendingMachine.balance += coin;\n    console.log(`Inserted ${coin} cents.`);\n    this.vendingMachine.setState(new CoinInsertedState(this.vendingMachine));\n  }\n}\n\nclass CoinInsertedState extends VendingMachineState {\n  selectItem(item) {\n    const selectedItem = this.vendingMachine.items[item];\n    if (selectedItem && selectedItem.quantity > 0) {\n      if (this.vendingMachine.balance >= selectedItem.price) {\n        this.vendingMachine.balance -= selectedItem.price;\n        selectedItem.quantity--;\n        console.log(`Dispensing ${item}.`);\n        this.vendingMachine.setState(new IdleState(this.vendingMachine));\n      } else {\n        console.log(`Insufficient balance for ${item}.`);\n      }\n    } else {\n      console.log(`${item} is out of stock.`);\n    }\n  }\n\n  returnCoins() {\n    console.log(`Returned ${this.vendingMachine.balance} cents.`);\n    this.vendingMachine.balance = 0;\n    this.vendingMachine.setState(new IdleState(this.vendingMachine));\n  }\n}\n\n// Client code using the State Pattern\nconst vendingMachine = new VendingMachine();\n\nvendingMachine.insertCoin(50); // Insert coin\nvendingMachine.selectItem("cola"); // Select item\nvendingMachine.returnCoins(); // Return change\n')),(0,a.kt)("p",{parentName:"admonition"},"In this code with the State Pattern:"),(0,a.kt)("p",{parentName:"admonition"},"We define state classes (e.g., VendingMachineState, IdleState, CoinInsertedState) that encapsulate the behavior of the vending machine in different states.\nThe vending machine context (VendingMachine) delegates state-specific operations")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"when-to-use"},"When to Use"),(0,a.kt)("p",null,"When to Use the State Pattern:\nYou should consider using the State Pattern in the following situations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When an object's behavior depends on its internal state, and you want to avoid using complex conditional statements."),(0,a.kt)("li",{parentName:"ol"},"When you want to represent each state as a separate class, making it easier to add new states and behaviors."),(0,a.kt)("li",{parentName:"ol"},"When you need to simplify the management of state transitions and make the code more maintainable."),(0,a.kt)("li",{parentName:"ol"},"When you want to ensure that the behavior of an object can change dynamically at runtime.")))}u.isMDXComponent=!0}}]);