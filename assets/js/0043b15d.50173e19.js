"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Longest Peak",l={unversionedId:"medium/longest_peak",id:"medium/longest_peak",title:"Longest Peak",description:"Write a function that takes in an array of integers and returns the length of the longest peak in the array.",source:"@site/docs/medium/longest_peak.md",sourceDirName:"medium",slug:"/medium/longest_peak",permalink:"/docs/medium/longest_peak",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/medium/longest_peak.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1692724046,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Levenshtein Distance",permalink:"/docs/medium/levenshtein_distance"},next:{title:"Max Subset Sum No Adjacent",permalink:"/docs/medium/max_subset_sum_no_adjadent"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"longest-peak"},"Longest Peak"),(0,a.kt)("admonition",{title:"Longest Peak",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Write a function that takes in an array of integers and returns the length of the longest peak in the array."),(0,a.kt)("p",{parentName:"admonition"},"A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak."),(0,a.kt)("p",{parentName:"admonition"},"For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"6 // 0, 10, 6, 5, -1, -3\n")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},""))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution "',title:'"Solution','"':!0},"// Copyright \xa9 2022 AlgoExpert LLC. All rights reserved.\n\n// O(n) time | O(1) space - where n is the length of the input array\nfunction longestPeak(array) {\n  let longestPeakLength = 0;\n  let i = 1;\n  while (i < array.length - 1) {\n    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];\n    if (!isPeak) {\n      i++;\n      continue;\n    }\n\n    let leftIndex = i - 2;\n    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {\n      leftIndex--;\n    }\n    let rightIndex = i + 2;\n    while (rightIndex < array.length && array[rightIndex] < array[rightIndex - 1]) {\n      rightIndex++;\n    }\n\n    const currentPeakLength = rightIndex - leftIndex - 1;\n    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);\n    i = rightIndex;\n  }\n  return longestPeakLength;\n}\n")))}d.isMDXComponent=!0}}]);