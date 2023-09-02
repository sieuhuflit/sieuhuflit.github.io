"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,h=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,p=m["".concat(i,".").concat(d)]||m[d]||l[d]||c;return n?r.createElement(p,o(o({ref:t},h),{},{components:n})):r.createElement(p,o({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const c={},o="Generate Document",u={unversionedId:"easy/generate_document",id:"easy/generate_document",title:"Generate Document",description:"You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false.",source:"@site/docs/easy/generate_document.md",sourceDirName:"easy",slug:"/easy/generate_document",permalink:"/docs/easy/generate_document",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/generate_document.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693638433,formattedLastUpdatedAt:"Sep 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"First Non-Repeating Character",permalink:"/docs/easy/first_non_repeating_character"},next:{title:"Insertion Sort",permalink:"/docs/easy/insertion_sort"}},i={},s=[],h={toc:s},m="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generate-document"},"Generate Document"),(0,a.kt)("admonition",{title:"Generate Document",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false."),(0,a.kt)("p",{parentName:"admonition"},'You\'re only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For example, if you\'re given characters = "abcabc" and document = "aabbccc" you cannot generate the document because you\'re missing one c.'),(0,a.kt)("p",{parentName:"admonition"},"The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces."),(0,a.kt)("p",{parentName:"admonition"},'Note: you can always generate the empty string ("").'),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'characters = "Bste!hetsi ogEAxpelrt x "\ndocument = "AlgoExpert is the Best!"\n')),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"true\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(m * (n + m)) time | O(1) space - where n is the number\n// of characters and m is the length of the document\nfunction generateDocument(characters, document) {\n  for (const character of document) {\n    const documentFrequency = countCharacterFrequency(character, document);\n    const charactersFrequency = countCharacterFrequency(character, characters);\n    if (documentFrequency > charactersFrequency) return false;\n  }\n\n  return true;\n}\n\nfunction countCharacterFrequency(character, target) {\n  let frequency = 0;\n  for (const char of target) {\n    if (char === character) frequency++;\n  }\n\n  return frequency;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// O(c * (n + m)) time | O(c) space - where n is the number of characters, m is\n// the length of the document, and c is the number of unique characters in the document\nfunction generateDocument(characters, document) {\n  const alreadyCounted = new Set();\n\n  for (const character of document) {\n    if (character in alreadyCounted) continue;\n\n    const documentFrequency = countCharacterFrequency(character, document);\n    const charactersFrequency = countCharacterFrequency(character, characters);\n    if (documentFrequency > charactersFrequency) return false;\n\n    alreadyCounted.add(character);\n  }\n\n  return true;\n}\n\nfunction countCharacterFrequency(character, target) {\n  let frequency = 0;\n  for (const char of target) {\n    if (char === character) frequency++;\n  }\n\n  return frequency;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 3"',title:'"Solution','3"':!0},"// O(n + m) time | O(c) space - where n is the number of characters, m is\n// the length of the document, and c is the number of unique characters in the characters string\nfunction generateDocument(characters, document) {\n  const characterCounts = {};\n\n  for (const character of characters) {\n    if (!(character in characterCounts)) characterCounts[character] = 0;\n\n    characterCounts[character]++;\n  }\n\n  for (const character of document) {\n    if (!(character in characterCounts) || characterCounts[character] === 0) return false;\n\n    characterCounts[character]--;\n  }\n\n  return true;\n}\n\n")))}l.isMDXComponent=!0}}]);