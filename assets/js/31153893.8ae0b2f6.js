"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Caesar Cipher Encryptor",p={unversionedId:"easy/ceasar_cipher_encryptor",id:"easy/ceasar_cipher_encryptor",title:"Caesar Cipher Encryptor",description:"Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.",source:"@site/docs/easy/ceasar_cipher_encryptor.md",sourceDirName:"easy",slug:"/easy/ceasar_cipher_encryptor",permalink:"/docs/easy/ceasar_cipher_encryptor",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/ceasar_cipher_encryptor.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1692724046,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Easy",permalink:"/docs/category/easy"},next:{title:"First Non-Repeating Character",permalink:"/docs/easy/first_non_repeating_character"}},s={},c=[],l={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"caesar-cipher-encryptor"},"Caesar Cipher Encryptor"),(0,a.kt)("admonition",{title:"Caesar Cipher Encryptor",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key."),(0,a.kt)("p",{parentName:"admonition"},'Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.'),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'string = "xyz"\n')),(0,a.kt)("p",{parentName:"admonition"},"key = 2\nSample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'"zab"\n'))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution"',title:'"Solution"'},"// O(n) time  | O(n) space\nfunction caesarCipherEncryptor(string, key) {\n  const newLetters = [];\n  const newKey = key % 26;\n  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');\n  for (const letter of string) {\n    newLetters.push(getNewLetter(letter, newKey, alphabet));\n  }\n  return newLetters.join('')\n}\n\nfunction getNewLetter(letter, key, alphabet) {\n  const newLetterCode = alphabet.indexOf(letter) + key;\n  return alphabet[newLetterCode % 26];\n}\n")))}y.isMDXComponent=!0}}]);