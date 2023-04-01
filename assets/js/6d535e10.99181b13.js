"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=a,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={},o="Binary Tree Diameter",s={unversionedId:"medium/binary_tree_diameter",id:"medium/binary_tree_diameter",title:"Binary Tree Diameter",description:"Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree.",source:"@site/docs/medium/binary_tree_diameter.md",sourceDirName:"medium",slug:"/medium/binary_tree_diameter",permalink:"/docs/medium/binary_tree_diameter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/medium/binary_tree_diameter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Medium",permalink:"/docs/category/medium"},next:{title:"Find Successor",permalink:"/docs/medium/find_successtor"}},c={},m=[],l={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-tree-diameter"},"Binary Tree Diameter"),(0,a.kt)("admonition",{title:"Binary Tree Diameter",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree."),(0,a.kt)("p",{parentName:"admonition"},"A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. The length of a path is the number of edges between the path's first node and its last node."),(0,a.kt)("p",{parentName:"admonition"},"Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"tree =\n              1\n            /   \\\n           3     2\n         /   \\ \n        7     4\n       /       \\\n      8         5\n     /           \\\n    9             6\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"6 // 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6\n// There are 6 edges between the\n// first node and the last node\n// of this tree's longest path.\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution"',title:'"Solution"'},"// This is an input class. Do not edit.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n// O(n) time | O(h) space\nfunction binaryTreeDiameter(tree) {\n  return getTreeInfo(tree).diameter;\n}\n\nfunction getTreeInfo(tree) {\n  if (tree === null) return new TreeInfo(0,0);\n  const leftTreeInfo = getTreeInfo(tree.left);\n  const rightTreeInfo = getTreeInfo(tree.right);\n\n  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;\n  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);\n  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);\n  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);\n\n  return new TreeInfo(currentDiameter, currentHeight);\n}\n\nclass TreeInfo {\n  constructor(diameter, height) {\n    this.diameter = diameter;\n    this.height = height;\n  }\n}\n\n// Do not edit the line below.\nexports.binaryTreeDiameter = binaryTreeDiameter;\nexports.BinaryTree = BinaryTree;\n")))}u.isMDXComponent=!0}}]);