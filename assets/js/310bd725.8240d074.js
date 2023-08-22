"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var d=2;d<s;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const s={},o="Levenshtein Distance",a={unversionedId:"medium/levenshtein_distance",id:"medium/levenshtein_distance",title:"Levenshtein Distance",description:"Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.",source:"@site/docs/medium/levenshtein_distance.md",sourceDirName:"medium",slug:"/medium/levenshtein_distance",permalink:"/docs/medium/levenshtein_distance",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/medium/levenshtein_distance.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1692724046,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kadane's Algorithm",permalink:"/docs/medium/kadanes_algorithm"},next:{title:"Longest Peak",permalink:"/docs/medium/longest_peak"}},l={},d=[],c={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"levenshtein-distance"},"Levenshtein Distance"),(0,i.kt)("admonition",{title:"Levenshtein Distance",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string."),(0,i.kt)("p",{parentName:"admonition"},"There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another."),(0,i.kt)("p",{parentName:"admonition"},"Sample Input"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'str1 = "abc"\nstr2 = "yabd"\n')),(0,i.kt)("p",{parentName:"admonition"},"Sample Output"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'2 // insert "y"; substitute "c" for "d"\n'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(nm) time | O(nm) space\nfunction levenshteinDistance(str1, str2) {\n  const edits = [];\n  for (let i = 0; i < str2.length + 1; i++) {\n    const row = [];\n    for (let j = 0; j < str1.length + 1; j++) {\n      row.push(j);\n    }\n    row[0] = i;\n    edits.push(row);\n  }\n  for (let i = 1; i < str2.length + 1; i++) {\n    for (let j = 1; j < str1.length + 1; j++) {\n      if (str2[i - 1] === str1[j - 1]) {\n        edits[i][j] = edits[i - 1][j - 1];\n      } else {\n        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1])\n      }\n    }\n  }\n  return edits[str2.length][str1.length];\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// O(nm) time | O(min(n, m)) space\nfunction levenshteinDistance(str1, str2) {\n  const small = str1.length < str2.length ? str1 : str2;\n  const big = str1.length >= str2.length ? str1 : str2;\n  const evenEdits = [];\n  const oddEdits = new Array(small.length + 1);\n  for (let j = 0; j < small.length + 1; j++) {\n    evenEdits.push(j);\n  }\n  for (let i = 1; i < big.length + 1; i++) {\n    let currentEdits, previousEdits;\n    if (i % 2 === 1) {\n      currentEdits = oddEdits;\n      previousEdits = evenEdits;\n    } else {\n      currentEdits = evenEdits;\n      previousEdits = oddEdits;\n    }\n    currentEdits[0] = i;\n    for (let j = 1; j < small.length + 1; j++) {\n      if (big[i - 1] === small[j - 1]) {\n        currentEdits[j] = previousEdits[j - 1];\n      } else {\n        currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);\n      }\n    }\n  }\n  return big.length % 2 === 0 ? evenEdits[small.length] : oddEdits[small.length];\n}\n")))}m.isMDXComponent=!0}}]);