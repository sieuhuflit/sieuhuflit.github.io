"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={tags:["Binary Trees"]},o="Merge Binary Trees",l={unversionedId:"medium/merge_binary_tree",id:"medium/merge_binary_tree",title:"Merge Binary Trees",description:"Given two binary trees, merge them and return the resulting tree. If two nodes overlap during the merger then sum the values, otherwise use the existing node.",source:"@site/docs/medium/merge_binary_tree.md",sourceDirName:"medium",slug:"/medium/merge_binary_tree",permalink:"/docs/medium/merge_binary_tree",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/medium/merge_binary_tree.md",tags:[{label:"Binary Trees",permalink:"/docs/tags/binary-trees"}],version:"current",lastUpdatedBy:"Sieu Thai",lastUpdatedAt:1696995571,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{tags:["Binary Trees"]},sidebar:"tutorialSidebar",previous:{title:"Max Subset Sum No Adjacent",permalink:"/docs/medium/max_subset_sum_no_adjadent"},next:{title:"Merge Overlapping Intervals",permalink:"/docs/medium/merge_overlapping_intervals"}},s={},u=[],c={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merge-binary-trees"},"Merge Binary Trees"),(0,a.kt)("admonition",{title:"Merge Binary Trees",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Given two binary trees, merge them and return the resulting tree. If two nodes overlap during the merger then sum the values, otherwise use the existing node."),(0,a.kt)("p",{parentName:"admonition"},"Note that your solution can either mutate the existing trees or return a new tree."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"tree1 =   1\n        /   \\\n       3     2\n     /   \\\n    7     4\n\ntree2 =   1\n        /   \\\n       5     9\n     /      / \\\n    2      7   6\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"output =  2\n        /   \\\n      8      11\n    /  \\    /  \\\n  9     4  7    6\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// This is an input class. Do not edit.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n// O(n) time | O(h) space - where n is the number of nodes in the smaller of the\n// two trees and h is the height of the shorter tree.\nfunction mergeBinaryTrees(tree1, tree2) {\n  if (tree1 === null) return tree2;\n  if (tree2 === null) return tree1;\n\n  tree1.value += tree2.value;\n  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);\n  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);\n  return tree1;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"// This is an input class. Do not edit.\nclass BinaryTree {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n// O(n) time | O(h) space - where n is the number of nodes in the smaller of the\n// two trees and h is the height of the shorter tree.\nfunction mergeBinaryTrees(tree1, tree2) {\n  if (tree1 === null) return tree2;\n\n  const tree1Stack = [tree1];\n  const tree2Stack = [tree2];\n\n  while (tree1Stack.length > 0) {\n    const tree1Node = tree1Stack.pop();\n    const tree2Node = tree2Stack.pop();\n\n    if (tree2Node === null) continue;\n\n    tree1Node.value += tree2Node.value;\n\n    if (tree1Node.left === null) {\n      tree1Node.left = tree2Node.left;\n    } else {\n      tree1Stack.push(tree1Node.left);\n      tree2Stack.push(tree2Node.left);\n    }\n\n    if (tree1Node.right === null) {\n      tree1Node.right = tree2Node.right;\n    } else {\n      tree1Stack.push(tree1Node.right);\n      tree2Stack.push(tree2Node.right);\n    }\n  }\n\n  return tree1;\n}\n")))}p.isMDXComponent=!0}}]);