"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1725],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2814:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const i={},a="Find Successor",s={unversionedId:"medium/find_successtor",id:"medium/find_successtor",title:"Find Successor",description:"Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor.",source:"@site/docs/medium/find_successtor.md",sourceDirName:"medium",slug:"/medium/find_successtor",permalink:"/docs/medium/find_successtor",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/medium/find_successtor.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1692729053,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Colliding Asteroids",permalink:"/docs/medium/colliding_asteroids"},next:{title:"Group Anagrams",permalink:"/docs/medium/group_anagrams"}},d={},l=[],u={toc:l},c="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"find-successor"},"Find Successor"),(0,o.kt)("admonition",{title:"Find Successor",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor."),(0,o.kt)("p",{parentName:"admonition"},"A node's successor is the next node to be visited (immediately after the given node) when traversing its tree using the in-order tree-traversal technique. A node has no successor if it's the last node to be visited in the in-order traversal."),(0,o.kt)("p",{parentName:"admonition"},"If a node has no successor, your function should return None / null."),(0,o.kt)("p",{parentName:"admonition"},"Each BinaryTree node has an integer value, a parent node, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null."),(0,o.kt)("p",{parentName:"admonition"},"Sample Input"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"tree = \n              1\n            /   \\\n           2     3\n         /   \\ \n        4     5\n       /       \n      6  \nnode = 5\n")),(0,o.kt)("p",{parentName:"admonition"},"Sample Output"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"1\n// This tree's in-order traversal order is:\n// 6 -> 4 -> 2 -> 5 -> 1 -> 3 \n// 1 comes immediately after 5.\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// This is an input class. Do not edit.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n    this.parent = null;\n  }\n}\n\n// O(n) time | O(n) space\nfunction findSuccessor(tree, node) {\n  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);\n\n  for (let i = 0; i < inOrderTraversalOrder.length; i++) {\n    const currentNode = inOrderTraversalOrder[i];\n    if (currentNode !== node) continue;\n    \n    if (i === inOrderTraversalOrder.length - 1) return null;\n    \n    return inOrderTraversalOrder[i + 1];\n  }\n  \n  return null;\n}\n\nfunction getInOrderTraversalOrder(node, order = []) {\n  if (node === null) return order;\n  \n  getInOrderTraversalOrder(node.left, order);\n  order.push(node);\n  getInOrderTraversalOrder(node.right, order);\n\n  return order;\n}\n\n// Do not edit the lines below.\nexports.BinaryTree = BinaryTree;\nexports.findSuccessor = findSuccessor;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// This is an input class. Do not edit.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n    this.parent = null;\n  }\n}\n\n// O(n) time | O(1) space\nfunction findSuccessor(tree, node) {\n  if (node.right !== null) {\n    return getLeftMostChild(node.right)\n  }\n  return getRightMostParent(node);\n}\n\nfunction getLeftMostChild(node) {\n  let currentNode = node;\n  while (currentNode.left !== null) {\n    currentNode = currentNode.left;\n  }\n  return currentNode;\n}\n\nfunction getRightMostParent(node) {\n  let currentNode = node;\n  while (currentNode.parent !== null && currentNode.parent.right === currentNode) {\n    currentNode = currentNode.parent;\n  }\n  return currentNode.parent;\n}\n\n// Do not edit the lines below.\nexports.BinaryTree = BinaryTree;\nexports.findSuccessor = findSuccessor;\n\n")))}p.isMDXComponent=!0}}]);