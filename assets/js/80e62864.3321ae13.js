"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={tags:["Binary Trees"]},i="Node Depths",s={unversionedId:"easy/node_depths",id:"easy/node_depths",title:"Node Depths",description:"The distance between a node in a Binary Tree and the tree's root is called the node's depth.",source:"@site/docs/easy/node_depths.md",sourceDirName:"easy",slug:"/easy/node_depths",permalink:"/docs/easy/node_depths",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/node_depths.md",tags:[{label:"Binary Trees",permalink:"/docs/tags/binary-trees"}],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693728212,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{tags:["Binary Trees"]},sidebar:"tutorialSidebar",previous:{title:"Validate Subsequence",permalink:"/docs/easy/minimum_waiting_time"},next:{title:"Non-Constructible Change",permalink:"/docs/easy/non_constructible_change"}},l={},p=[],d={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-depths"},"Node Depths"),(0,a.kt)("admonition",{title:"Node Depths",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The distance between a node in a Binary Tree and the tree's root is called the node's depth."),(0,a.kt)("p",{parentName:"admonition"},"Write a function that takes in a Binary Tree and returns the sum of its nodes' depths."),(0,a.kt)("p",{parentName:"admonition"},"Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"tree =    1\n       /     \\\n      2       3\n    /   \\   /   \\\n   4     5 6     7\n /   \\\n8     9\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"16\n// The depth of the node with value 2 is 1.\n// The depth of the node with value 3 is 1.\n// The depth of the node with value 4 is 2.\n// The depth of the node with value 5 is 2.\n// Etc..\n// Summing all of these depths yields 16.\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// Average case: when the tree is balanced\n// O(n) time | O(h) space - where n is the number of nodes in\n// the Binary Tree and h is the height of the Binary Tree\nfunction nodeDepths(root) {\n  let sumOfDepths = 0;\n  const stack = [{node: root, depth: 0}];\n  while (stack.length > 0) {\n    const {node, depth} = stack.pop();\n    if (node === null) continue;\n    sumOfDepths += depth;\n    stack.push({node: node.left, depth: depth + 1});\n    stack.push({node: node.right, depth: depth + 1});\n  }\n  return sumOfDepths;\n}\n\n// This is the class of the input binary tree.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// Average case: when the tree is balanced\n// O(n) time | O(h) space - where n is the number of nodes in\n// the Binary Tree and h is the height of the Binary Tree\nfunction nodeDepths(root, depth = 0) {\n  if (root === null) return 0;\n  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);\n}\n\n// This is the class of the input binary tree.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n")))}c.isMDXComponent=!0}}]);