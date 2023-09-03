"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},s="Adapter",i={unversionedId:"design_patterns/structure_design_patterns/adapter",id:"design_patterns/structure_design_patterns/adapter",title:"Adapter",description:"In software development, you may encounter situations where two existing classes or interfaces have incompatible methods or interfaces. This can occur when working with external libraries or legacy code that cannot be changed. It becomes challenging to use these classes together in a seamless way without modifying their source code.",source:"@site/docs/design_patterns/structure_design_patterns/adapter.md",sourceDirName:"design_patterns/structure_design_patterns",slug:"/design_patterns/structure_design_patterns/adapter",permalink:"/docs/design_patterns/structure_design_patterns/adapter",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/design_patterns/structure_design_patterns/adapter.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693749875,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure Design Patterns",permalink:"/docs/category/structure-design-patterns"},next:{title:"Bridge",permalink:"/docs/design_patterns/structure_design_patterns/brigde"}},l={},c=[{value:"Solution",id:"solution",level:2},{value:"When to Use",id:"when-to-use",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adapter"},"Adapter"),(0,r.kt)("h1",{id:"problem"},"Problem"),(0,r.kt)("admonition",{title:"The Adapter Pattern Problem:",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"In software development, you may encounter situations where two existing classes or interfaces have incompatible methods or interfaces. This can occur when working with external libraries or legacy code that cannot be changed. It becomes challenging to use these classes together in a seamless way without modifying their source code."),(0,r.kt)("p",{parentName:"admonition"},"For example, you may have one class that expects data in one format (e.g., JSON), while another class provides data in a different format (e.g., XML). Using these classes together without an adapter can result in code that is tightly coupled and hard to maintain."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Problem: Using incompatible classes without an adapter\n\n// Existing class for handling JSON data\nclass JSONHandler {\n  processJSON(data) {\n    console.log("Processing JSON data:", data);\n  }\n}\n\n// Existing class for handling XML data\nclass XMLProcessor {\n  processXML(data) {\n    console.log("Processing XML data:", data);\n  }\n}\n\n// Client code\nconst jsonData = \'{"name": "John", "age": 30}\';\nconst xmlData = \'<person><name>John</name><age>30</age></person>\';\n\nconst jsonHandler = new JSONHandler();\njsonHandler.processJSON(jsonData);\n\nconst xmlProcessor = new XMLProcessor();\nxmlProcessor.processXML(xmlData);\n')),(0,r.kt)("p",{parentName:"admonition"},"In this code, we have two existing classes, JSONHandler and XMLProcessor, with incompatible interfaces for processing data in JSON and XML formats. Using these classes together without an adapter results in tightly coupled code that cannot handle both formats seamlessly.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("admonition",{title:"The Adapter Pattern Solution:",type:"success"},(0,r.kt)("p",{parentName:"admonition"},"The Adapter Pattern allows you to create a bridge between two incompatible interfaces, making them work together seamlessly. It involves creating an adapter class that wraps one of the incompatible classes and provides a consistent interface that the client code can use. The adapter translates requests from the client code into calls that are compatible with the wrapped class."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Solution: Using the Adapter Pattern to make incompatible classes work together\n\n// Existing class for handling JSON data\nclass JSONHandler {\n  processJSON(data) {\n    console.log("Processing JSON data:", data);\n  }\n}\n\n// Adapter for handling XML data using the JSONHandler interface\nclass XMLAdapter {\n  constructor(jsonHandler) {\n    this.jsonHandler = jsonHandler;\n  }\n\n  processXML(xmlData) {\n    // Convert XML to JSON format\n    const jsonEquivalent = this.convertXMLToJSON(xmlData);\n    // Use the JSONHandler\'s interface to process the data\n    this.jsonHandler.processJSON(jsonEquivalent);\n  }\n\n  convertXMLToJSON(xmlData) {\n    // Simplified conversion for demonstration\n    // In a real scenario, a more complex conversion logic would be used\n    const jsonEquivalent = JSON.stringify({ name: "John", age: 30 });\n    return jsonEquivalent;\n  }\n}\n\n// Client code\nconst jsonData = \'{"name": "John", "age": 30}\';\nconst xmlData = \'<person><name>John</name><age>30</age></person>\';\n\nconst jsonHandler = new JSONHandler();\njsonHandler.processJSON(jsonData);\n\nconst xmlAdapter = new XMLAdapter(jsonHandler);\nxmlAdapter.processXML(xmlData);\n')),(0,r.kt)("p",{parentName:"admonition"},"In this code:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"We use the Adapter Pattern to create an XMLAdapter class that wraps the JSONHandler class."),(0,r.kt)("li",{parentName:"ul"},"The XMLAdapter class provides an interface compatible with the JSONHandler, allowing it to process XML data by first converting it to JSON format."),(0,r.kt)("li",{parentName:"ul"},"The client code can now use both the JSONHandler and the XMLAdapter to process data in JSON and XML formats seamlessly."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"when-to-use"},"When to Use"),(0,r.kt)("p",null,"When to Use the Adapter Pattern:\nYou should consider using the Adapter Pattern in the following situations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When you need to make two existing classes work together, but their interfaces are incompatible."),(0,r.kt)("li",{parentName:"ol"},"When you want to encapsulate and isolate the code that deals with the incompatibility, making it easier to change or extend in the future."),(0,r.kt)("li",{parentName:"ol"},"When you want to reuse existing classes without modifying their source code, especially when dealing with external libraries or legacy code.")))}u.isMDXComponent=!0}}]);