"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,p=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?r.createElement(p,o(o({ref:t},m),{},{components:n})):r.createElement(p,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},o="Binary Tree Diameter",s={unversionedId:"medium/binary_tree_diameter",id:"medium/binary_tree_diameter",title:"Binary Tree Diameter",description:"Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree.",source:"@site/docs/medium/binary_tree_diameter.md",sourceDirName:"medium",slug:"/medium/binary_tree_diameter",permalink:"/docs/medium/binary_tree_diameter",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/medium/binary_tree_diameter.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693638433,formattedLastUpdatedAt:"Sep 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Best Seat",permalink:"/docs/medium/best_seat"},next:{title:"Colliding Asteroids",permalink:"/docs/medium/colliding_asteroids"}},l={},d=[],m={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-tree-diameter"},"Binary Tree Diameter"),(0,a.kt)("admonition",{title:"Binary Tree Diameter",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree."),(0,a.kt)("p",{parentName:"admonition"},"A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. The length of a path is the number of edges between the path's first node and its last node."),(0,a.kt)("p",{parentName:"admonition"},"Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"tree =\n              1\n            /   \\\n           3     2\n         /   \\ \n        7     4\n       /       \\\n      8         5\n     /           \\\n    9             6\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"6 // 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6\n// There are 6 edges between the\n// first node and the last node\n// of this tree's longest path.\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution"',title:'"Solution"'},"// This is an input class. Do not edit.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n// O(n) time | O(h) space\nfunction binaryTreeDiameter(tree) {\n  return getTreeInfo(tree).diameter;\n}\n\nfunction getTreeInfo(tree) {\n  if (tree === null) return new TreeInfo(0,0);\n  const leftTreeInfo = getTreeInfo(tree.left);\n  const rightTreeInfo = getTreeInfo(tree.right);\n\n  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;\n  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);\n  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);\n  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);\n\n  return new TreeInfo(currentDiameter, currentHeight);\n}\n\nclass TreeInfo {\n  constructor(diameter, height) {\n    this.diameter = diameter;\n    this.height = height;\n  }\n}\n\n// Do not edit the line below.\nexports.binaryTreeDiameter = binaryTreeDiameter;\nexports.BinaryTree = BinaryTree;\n")))}u.isMDXComponent=!0}}]);