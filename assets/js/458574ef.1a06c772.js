"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Validate Subsequence",s={unversionedId:"easy/validate_subsequence",id:"easy/validate_subsequence",title:"Validate Subsequence",description:"Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.",source:"@site/docs/easy/validate_subsequence.md",sourceDirName:"easy",slug:"/easy/validate_subsequence",permalink:"/docs/easy/validate_subsequence",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/validate_subsequence.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1692724046,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Two number sum",permalink:"/docs/easy/two_number_sum"},next:{title:"Medium",permalink:"/docs/category/medium"}},u={},c=[],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validate-subsequence"},"Validate Subsequence"),(0,a.kt)("admonition",{title:"Validate Subsequence",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one."),(0,a.kt)("p",{parentName:"admonition"},"A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers ","[1, 3, 4]"," form a subsequence of the array ","[1, 2, 3, 4]",", and so do the numbers ","[2, 4]",". Note that a single number in an array and the array itself are both valid subsequences of the array."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"array = [5, 1, 22, 25, 6, -1, 8, 10]\nsequence = [1, 6, -1, 10]\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"true\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(n) time | O(1) space\nfunction isValidSubsequence(array, sequence) {\n  let index = 0;\n  let seqIndex = 0;\n  while (index < array.length && seqIndex < sequence.length) {\n    if (array[index] === sequence[seqIndex]) seqIndex++;\n    index++;\n  }\n  return seqIndex === sequence.length;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// O(n) time | O(n) space\nfunction isValidSubsequence(array, sequence) {\n  let seqIndex = 0;\n  for (const value of array) {\n    if (seqIndex === sequence.length) break;\n    if (sequence[seqIndex] === value) seqIndex++;\n  }\n  return seqIndex === sequence.length;\n}\n")))}d.isMDXComponent=!0}}]);