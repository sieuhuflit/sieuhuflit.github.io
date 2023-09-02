"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={tags:["Arrays"]},l="Spiral Traverse",s={unversionedId:"medium/spiral_traverse",id:"medium/spiral_traverse",title:"Spiral Traverse",description:"Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.",source:"@site/docs/medium/spiral_traverse.md",sourceDirName:"medium",slug:"/medium/spiral_traverse",permalink:"/docs/medium/spiral_traverse",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/medium/spiral_traverse.md",tags:[{label:"Arrays",permalink:"/docs/tags/arrays"}],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693638433,formattedLastUpdatedAt:"Sep 2, 2023",frontMatter:{tags:["Arrays"]},sidebar:"tutorialSidebar",previous:{title:"Smallest Difference",permalink:"/docs/medium/smallest_difference"},next:{title:"Suffix Trie Construction",permalink:"/docs/medium/suffix_trie_construction"}},i={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spiral-traverse"},"Spiral Traverse"),(0,a.kt)("admonition",{title:"Spiral Traverse",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order."),(0,a.kt)("p",{parentName:"admonition"},"Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"array = [\n  [1,   2,  3, 4],\n  [12, 13, 14, 5],\n  [11, 16, 15, 6],\n  [10,  9,  8, 7],\n]\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]\n")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},""))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(n) time | O(n) space - where n is the total number of elements in the array\nfunction spiralTraverse(array) {\n  const result = [];\n  let startRow = 0,\n    endRow = array.length - 1;\n  let startCol = 0,\n    endCol = array[0].length - 1;\n\n  while (startRow <= endRow && startCol <= endCol) {\n    for (let col = startCol; col <= endCol; col++) {\n      result.push(array[startRow][col]);\n    }\n\n    for (let row = startRow + 1; row <= endRow; row++) {\n      result.push(array[row][endCol]);\n    }\n\n    for (let col = endCol - 1; col >= startCol; col--) {\n      // Handle the edge case when there's a single row\n      // in the middle of the matrix. In this case, we don't\n      // want to double-count the values in this row, which\n      // we've already counted in the first for loop above.\n      // See Test Case 8 for an example of this edge case.\n      if (startRow === endRow) break;\n      result.push(array[endRow][col]);\n    }\n\n    for (let row = endRow - 1; row > startRow; row--) {\n      // Handle the edge case when there's a single column\n      // in the middle of the matrix. In this case, we don't\n      // want to double-count the values in this column, which\n      // we've already counted in the second for loop above.\n      // See Test Case 9 for an example of this edge case.\n      if (startCol === endCol) break;\n      result.push(array[row][startCol]);\n    }\n\n    startRow++;\n    endRow--;\n    startCol++;\n    endCol--;\n  }\n\n  return result;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// O(n) time | O(n) space - where n is the total number of elements in the array\nfunction spiralTraverse(array) {\n  const result = [];\n  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);\n  return result;\n}\n\nfunction spiralFill(array, startRow, endRow, startCol, endCol, result) {\n  if (startRow > endRow || startCol > endCol) return;\n\n  for (let col = startCol; col <= endCol; col++) {\n    result.push(array[startRow][col]);\n  }\n\n  for (let row = startRow + 1; row <= endRow; row++) {\n    result.push(array[row][endCol]);\n  }\n\n  for (let col = endCol - 1; col >= startCol; col--) {\n    // Handle the edge case when there's a single row\n    // in the middle of the matrix. In this case, we don't\n    // want to double-count the values in this row, which\n    // we've already counted in the first for loop above.\n    // See Test Case 8 for an example of this edge case.\n    if (startRow === endRow) break;\n    result.push(array[endRow][col]);\n  }\n  for (let row = endRow - 1; row >= startRow + 1; row--) {\n    // Handle the edge case when there's a single column\n    // in the middle of the matrix. In this case, we don't\n    // want to double-count the values in this column, which\n    // we've already counted in the second for loop above.\n    // See Test Case 9 for an example of this edge case.\n    if (startCol === endCol) break;\n    result.push(array[row][startCol]);\n  }\n\n  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);\n}\n")))}p.isMDXComponent=!0}}]);