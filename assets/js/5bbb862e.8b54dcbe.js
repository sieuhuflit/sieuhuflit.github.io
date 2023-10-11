"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={tags:["Binary Search Trees"]},s="Reconstruct BST",i={unversionedId:"easy/reconstruct_bst",id:"easy/reconstruct_bst",title:"Reconstruct BST",description:"The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's root node and visits nodes in the following order:",source:"@site/docs/easy/reconstruct_bst.md",sourceDirName:"easy",slug:"/easy/reconstruct_bst",permalink:"/docs/easy/reconstruct_bst",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/reconstruct_bst.md",tags:[{label:"Binary Search Trees",permalink:"/docs/tags/binary-search-trees"}],version:"current",lastUpdatedBy:"Sieu Thai",lastUpdatedAt:1696996042,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{tags:["Binary Search Trees"]},sidebar:"tutorialSidebar",previous:{title:"Product Sum",permalink:"/docs/easy/product_sum"},next:{title:"Remove Duplicates From Linked List",permalink:"/docs/easy/remove_duplicates_from_linked_list"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reconstruct-bst"},"Reconstruct BST"),(0,a.kt)("admonition",{title:"Reconstruct BST",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's root node and visits nodes in the following order:"),(0,a.kt)("p",{parentName:"admonition"},"Current node\nLeft subtree\nRight subtree\nGiven a non-empty array of integers representing the pre-order traversal of a Binary Search Tree (BST), write a function that creates the relevant BST and returns its root node."),(0,a.kt)("p",{parentName:"admonition"},"The input array will contain the values of BST nodes in the order in which these nodes would be visited with a pre-order traversal."),(0,a.kt)("p",{parentName:"admonition"},"Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"        10 \n      /    \\\n     4      17\n   /   \\      \\\n  2     5     19\n /           /\n1           18 \n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// This is an input class. Do not edit.\nclass BST {\n  constructor(value, left = null, right = null) {\n    this.value = value;\n    this.left = left;\n    this.right = right;\n  }\n}\n\n// O(n^2) time | O(n) space - where n is the length of the input array\nfunction reconstructBst(preOrderTraversalValues) {\n  if (preOrderTraversalValues.length === 0) return null;\n\n  const currentValue = preOrderTraversalValues[0];\n  let rightSubtreeRootIdx = preOrderTraversalValues.length;\n\n  for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {\n    const value = preOrderTraversalValues[idx];\n    if (value >= currentValue) {\n      rightSubtreeRootIdx = idx;\n      break;\n    }\n  }\n\n  const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));\n  const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));\n  return new BST(currentValue, leftSubtree, rightSubtree);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// Copyright \xa9 2023 AlgoExpert LLC. All rights reserved.\n\n// This is an input class. Do not edit.\nclass BST {\n  constructor(value, left = null, right = null) {\n    this.value = value;\n    this.left = left;\n    this.right = right;\n  }\n}\n\nclass TreeInfo {\n  constructor(rootIdx) {\n    this.rootIdx = rootIdx;\n  }\n}\n\n// O(n) time | O(n) space - where n is the length of the input array\nfunction reconstructBst(preOrderTraversalValues) {\n  const treeInfo = new TreeInfo(0);\n  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);\n}\n\nfunction reconstructBstFromRange(\n  lowerBound,\n  upperBound,\n  preOrderTraversalValues,\n  currentSubtreeInfo,\n) {\n  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;\n\n  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];\n  if (rootValue < lowerBound || rootValue >= upperBound) return null;\n\n  currentSubtreeInfo.rootIdx++;\n  const leftSubtree = reconstructBstFromRange(\n    lowerBound,\n    rootValue,\n    preOrderTraversalValues,\n    currentSubtreeInfo,\n  );\n  const rightSubtree = reconstructBstFromRange(\n    rootValue,\n    upperBound,\n    preOrderTraversalValues,\n    currentSubtreeInfo,\n  );\n  return new BST(rootValue, leftSubtree, rightSubtree);\n}\n")))}p.isMDXComponent=!0}}]);