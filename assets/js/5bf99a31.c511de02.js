"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(n),f=a,y=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return n?r.createElement(y,u(u({ref:t},l),{},{components:n})):r.createElement(y,u({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,u[1]=i;for(var m=2;m<o;m++)u[m]=n[m];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={tags:["Arrays"]},u="Two number sum",i={unversionedId:"easy/two_number_sum",id:"easy/two_number_sum",title:"Two number sum",description:"Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.",source:"@site/docs/easy/two_number_sum.md",sourceDirName:"easy",slug:"/easy/two_number_sum",permalink:"/docs/easy/two_number_sum",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/two_number_sum.md",tags:[{label:"Arrays",permalink:"/docs/tags/arrays"}],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693638433,formattedLastUpdatedAt:"Sep 2, 2023",frontMatter:{tags:["Arrays"]},sidebar:"tutorialSidebar",previous:{title:"Transpose Matrix",permalink:"/docs/easy/transpose_matrix"},next:{title:"Validate Subsequence",permalink:"/docs/easy/validate_subsequence"}},s={},m=[],l={toc:m},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"two-number-sum"},"Two number sum"),(0,a.kt)("admonition",{title:"Two number sum",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array."),(0,a.kt)("p",{parentName:"admonition"},"Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum."),(0,a.kt)("p",{parentName:"admonition"},"You can assume that there will be at most one pair of numbers summing up to the target sum."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"array = [3, 5, -4, 8, 11, 1, -1, 6]\n")),(0,a.kt)("p",{parentName:"admonition"},"targetSum = 10\nSample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"[-1, 11] // the numbers could be in reverse order\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(n^2) time | O(1) space\nfunction twoNumberSum(array, targetSum) {\n  for (let i = 0; i < array.length - 1; i++) {\n    const firstNum = array[i];\n    for (let j = i + 1; j < array.length; j++) {\n      const secondNum = array[j];\n      if (firstNum + secondNum === targetSum) {\n        return [firstNum, secondNum];\n      }\n    }\n  }\n  return []\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// O(n) time | O(n) space\nfunction twoNumberSum(array, targetSum) {\n  const nums = {};\n  for (const num of array) {\n    const match = targetSum - num;\n    if (match in nums) {\n      return [match, num];\n    } else {\n      nums[num] = true;\n    }\n  }\n  return [];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 3"',title:'"Solution','3"':!0},"// O(nlog(n)) time | O(1) space\nfunction twoNumberSum(array, targetSum) {\n  array.sort((a, b) => a - b);\n  let left = 0;\n  let right = array.length - 1;\n  while (left < right) {\n    const currentSum = array[left] + array[right];\n    if (currentSum === targetSum) {\n      return [array[left], array[right]]\n    } else if (currentSum < targetSum) {\n      left++;\n    } else if (currentSum > targetSum) {\n      right--;\n    }\n  }\n  return [];\n}\n")))}p.isMDXComponent=!0}}]);