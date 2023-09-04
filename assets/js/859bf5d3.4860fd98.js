"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),h=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=h(n),p=a,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var h=2;h<i;h++)o[h]=n[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=n(7462),a=(n(7294),n(3905));const i={},o="Flyweight",c={unversionedId:"design_patterns/structure_design_patterns/flyweight",id:"design_patterns/structure_design_patterns/flyweight",title:"Flyweight",description:"In software development, you may encounter scenarios where you need to work with a large number of objects that have shared intrinsic (invariant) properties. Creating and managing individual objects for each instance can lead to high memory consumption and inefficiency, especially when most of the object's data is the same.",source:"@site/docs/design_patterns/structure_design_patterns/flyweight.md",sourceDirName:"design_patterns/structure_design_patterns",slug:"/design_patterns/structure_design_patterns/flyweight",permalink:"/docs/design_patterns/structure_design_patterns/flyweight",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/design_patterns/structure_design_patterns/flyweight.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693800530,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Facade",permalink:"/docs/design_patterns/structure_design_patterns/facade"},next:{title:"Proxy \ud83d\udd76\ufe0f",permalink:"/docs/design_patterns/structure_design_patterns/proxy"}},s={},h=[{value:"Solution",id:"solution",level:2},{value:"When to Use",id:"when-to-use",level:2}],l={toc:h},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flyweight"},"Flyweight"),(0,a.kt)("h1",{id:"problem"},"Problem"),(0,a.kt)("admonition",{title:"The Flyweight Pattern Problem:",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"In software development, you may encounter scenarios where you need to work with a large number of objects that have shared intrinsic (invariant) properties. Creating and managing individual objects for each instance can lead to high memory consumption and inefficiency, especially when most of the object's data is the same."),(0,a.kt)("p",{parentName:"admonition"},"For example, consider a text editor where you need to render a large document with many characters. Creating a separate object for each character, including its font and size information, can consume a significant amount of memory and slow down the application."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Problem: Rendering a large document without the Flyweight Pattern\n\nclass Character {\n  constructor(character, font, size) {\n    this.character = character;\n    this.font = font;\n    this.size = size;\n  }\n\n  render() {\n    console.log(`Rendering ${this.character} with font ${this.font} and size ${this.size}.`);\n  }\n}\n\n// Creating and rendering individual characters\nconst characters = [];\nfor (let i = 0; i < 1000; i++) {\n  characters.push(new Character("A", "Arial", 12));\n}\n\nfor (const char of characters) {\n  char.render();\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"In this code, we create individual Character objects for each character in a large document. Each object contains font and size information, resulting in high memory consumption and inefficiency.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("admonition",{title:"The Flyweight Pattern Solution:",type:"success"},(0,a.kt)("p",{parentName:"admonition"},"The Flyweight Pattern aims to minimize memory usage and improve performance by sharing as much as possible among similar objects. It achieves this by separating the intrinsic (shared) state from the extrinsic (unique) state of objects. The intrinsic state is shared, and the extrinsic state is passed in when needed."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Solution: Rendering a large document using the Flyweight Pattern\n\nclass Character {\n  constructor(character) {\n    this.character = character;\n  }\n\n  render(font, size) {\n    console.log(`Rendering ${this.character} with font ${font} and size ${size}.`);\n  }\n}\n\n// Flyweight Factory for character creation and caching\nclass CharacterFactory {\n  constructor() {\n    this.characters = {};\n  }\n\n  getCharacter(character) {\n    if (!this.characters[character]) {\n      this.characters[character] = new Character(character);\n    }\n    return this.characters[character];\n  }\n}\n\n// Creating and rendering characters using the Flyweight Pattern\nconst factory = new CharacterFactory();\nconst characters = [];\n\nfor (let i = 0; i < 1000; i++) {\n  const char = factory.getCharacter("A");\n  characters.push(char);\n}\n\nfor (const char of characters) {\n  char.render("Arial", 12);\n}\n')),(0,a.kt)("p",{parentName:"admonition"},"In this code with the Flyweight Pattern:"),(0,a.kt)("p",{parentName:"admonition"},"We have a Character class that contains only the intrinsic state (the character itself).\nWe create a CharacterFactory class responsible for creating and caching character objects.\nWhen rendering characters, we use the factory to retrieve or create character objects and pass the extrinsic state (font and size) as needed.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"when-to-use"},"When to Use"),(0,a.kt)("p",null,"When to Use the Flyweight Pattern:\nYou should consider using the Flyweight Pattern in the following situations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When you have a large number of objects with shared intrinsic properties."),(0,a.kt)("li",{parentName:"ol"},"When you want to reduce memory consumption by sharing common data among multiple objects."),(0,a.kt)("li",{parentName:"ol"},"When most of the object's data is invariant and can be shared."),(0,a.kt)("li",{parentName:"ol"},"When you want to improve performance by minimizing the creation and management of similar objects.")))}u.isMDXComponent=!0}}]);