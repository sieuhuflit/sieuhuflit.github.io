"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5146],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),m=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},l=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),c=m(n),f=a,y=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(y,u(u({ref:e},l),{},{components:n})):r.createElement(y,u({ref:e},l))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,u=new Array(o);u[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,u[1]=i;for(var m=2;m<o;m++)u[m]=n[m];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8721:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={tags:["Arrays"]},u="Two number sum",i={unversionedId:"easy/two_number_sum",id:"easy/two_number_sum",title:"Two number sum",description:"Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.",source:"@site/docs/easy/two_number_sum.md",sourceDirName:"easy",slug:"/easy/two_number_sum",permalink:"/docs/easy/two_number_sum",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/two_number_sum.md",tags:[{label:"Arrays",permalink:"/docs/tags/arrays"}],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693728212,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{tags:["Arrays"]},sidebar:"tutorialSidebar",previous:{title:"Transpose Matrix",permalink:"/docs/easy/transpose_matrix"},next:{title:"Validate BST",permalink:"/docs/easy/validate_bst"}},s={},m=[],l={toc:m},c="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"two-number-sum"},"Two number sum"),(0,a.kt)("admonition",{title:"Two number sum",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array."),(0,a.kt)("p",{parentName:"admonition"},"Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum."),(0,a.kt)("p",{parentName:"admonition"},"You can assume that there will be at most one pair of numbers summing up to the target sum."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"array = [3, 5, -4, 8, 11, 1, -1, 6]\n")),(0,a.kt)("p",{parentName:"admonition"},"targetSum = 10\nSample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"[-1, 11] // the numbers could be in reverse order\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(n^2) time | O(1) space\nfunction twoNumberSum(array, targetSum) {\n  for (let i = 0; i < array.length - 1; i++) {\n    const firstNum = array[i];\n    for (let j = i + 1; j < array.length; j++) {\n      const secondNum = array[j];\n      if (firstNum + secondNum === targetSum) {\n        return [firstNum, secondNum];\n      }\n    }\n  }\n  return []\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// O(n) time | O(n) space\nfunction twoNumberSum(array, targetSum) {\n  const nums = {};\n  for (const num of array) {\n    const match = targetSum - num;\n    if (match in nums) {\n      return [match, num];\n    } else {\n      nums[num] = true;\n    }\n  }\n  return [];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 3"',title:'"Solution','3"':!0},"// O(nlog(n)) time | O(1) space\nfunction twoNumberSum(array, targetSum) {\n  array.sort((a, b) => a - b);\n  let left = 0;\n  let right = array.length - 1;\n  while (left < right) {\n    const currentSum = array[left] + array[right];\n    if (currentSum === targetSum) {\n      return [array[left], array[right]]\n    } else if (currentSum < targetSum) {\n      left++;\n    } else if (currentSum > targetSum) {\n      right--;\n    }\n  }\n  return [];\n}\n")))}p.isMDXComponent=!0}}]);