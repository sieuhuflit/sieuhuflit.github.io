"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,h=u["".concat(s,".").concat(g)]||u[g]||f[g]||i;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},o="First Non-Repeating Character",c={unversionedId:"easy/first_non_repeating_character",id:"easy/first_non_repeating_character",title:"First Non-Repeating Character",description:"Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.",source:"@site/docs/easy/first_non_repeating_character.md",sourceDirName:"easy",slug:"/easy/first_non_repeating_character",permalink:"/docs/easy/first_non_repeating_character",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/easy/first_non_repeating_character.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Caesar Cipher Encryptor",permalink:"/docs/easy/ceasar_cipher_encryptor"},next:{title:"Generate Document",permalink:"/docs/easy/generate_document"}},s={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-non-repeating-character"},"First Non-Repeating Character"),(0,a.kt)("admonition",{title:"First Non-Repeating Character",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character."),(0,a.kt)("p",{parentName:"admonition"},"The first non-repeating character is the first character in a string that occurs only once."),(0,a.kt)("p",{parentName:"admonition"},"If the input string doesn't have any non-repeating characters, your function should return -1."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'string = "abcdcaf"\n')),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'1 // The first non-repeating character is "b" and is found at index 1.\n'))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(n^2) time | O(1) space\nfunction firstNonRepeatingCharacter(string) {\n  for (let i = 0; i < string.length; i++) { \n    let foundDuplicate = false;\n    for (let j = 0; j < string.length; j++) {\n      if (string[i] === string[j] && i !== j) {\n        foundDuplicate = true;\n      }\n    }\n    if (!foundDuplicate) return i;\n  }\n  return -1;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// O(n) time | O(1) space\nfunction firstNonRepeatingCharacter(string) {\n  const characterFrequencies = {};\n  for (const character of string) {\n    if (!(character in characterFrequencies)) characterFrequencies[character] = 0;\n    characterFrequencies[character]++;\n  }\n\n  for (let i = 0; i < string.length; i++) {\n    const character = string[i];\n    if (characterFrequencies[character] === 1) return i;\n  }\n  return -1;\n}\n")))}f.isMDXComponent=!0}}]);