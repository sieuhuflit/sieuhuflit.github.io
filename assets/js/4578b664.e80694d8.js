"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,p=d["".concat(l,".").concat(f)]||d[f]||h[f]||i;return n?r.createElement(p,o(o({ref:t},u),{},{components:n})):r.createElement(p,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Height Balanced Binary Tree",c={unversionedId:"medium/height_balanced_binary_tree",id:"medium/height_balanced_binary_tree",title:"Height Balanced Binary Tree",description:"You're given the root node of a Binary Tree. Write a function that returns true if this Binary Tree is height balanced and false if it isn't.",source:"@site/docs/medium/height_balanced_binary_tree.md",sourceDirName:"medium",slug:"/medium/height_balanced_binary_tree",permalink:"/docs/medium/height_balanced_binary_tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/medium/height_balanced_binary_tree.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Find Successor",permalink:"/docs/medium/find_successtor"},next:{title:"Levenshtein Distance",permalink:"/docs/medium/levenshtein_distance"}},l={},s=[],u={toc:s},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"height-balanced-binary-tree"},"Height Balanced Binary Tree"),(0,a.kt)("admonition",{title:"Height Balanced Binary Tree",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You're given the root node of a Binary Tree. Write a function that returns true if this Binary Tree is height balanced and false if it isn't."),(0,a.kt)("p",{parentName:"admonition"},"A Binary Tree is height balanced if for each node in the tree, the difference between the height of its left subtree and the height of its right subtree is at most 1."),(0,a.kt)("p",{parentName:"admonition"},"Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"tree = 1\n     /   \\\n    2     3\n  /   \\     \\\n 4     5     6\n     /   \\\n    7     8\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"true.\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"class BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass TreeInfo {\n  constructor(isBalanced, height) {\n    this.isBalanced = isBalanced\n    this.height = height;\n  }\n}\n\n// O(n) time | O(h) space\nfunction heightBalancedBinaryTree(tree) {\n  const treeInfo = getTreeInfo(tree);\n  return treeInfo.isBalanced;\n}\n\nfunction getTreeInfo(node) {\n  if (node === null) return new TreeInfo(true, -1);\n\n  const leftSubtreeInfo = getTreeInfo(node.left);\n  const rightSubtreeInfo = getTreeInfo(node.right);\n\n  const isBalanced = \n    leftSubtreeInfo.isBalanced && \n    rightSubtreeInfo.isBalanced &&\n    Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;\n  const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;\n  return new TreeInfo(isBalanced, height);\n}\n\n\n")))}h.isMDXComponent=!0}}]);