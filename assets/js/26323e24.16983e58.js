"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},l="Middle node",a={unversionedId:"easy/middle_node",id:"easy/middle_node",title:"Middle node",description:"You're given a Linked List with at least one node. Write a function that returns the middle node of the Linked List. If there are two middle nodes (i.e. an even length list), your function should return the second of these nodes.",source:"@site/docs/easy/middle_node.md",sourceDirName:"easy",slug:"/easy/middle_node",permalink:"/docs/easy/middle_node",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/middle_node.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693755323,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Longest Palindromic Substring",permalink:"/docs/easy/longest_palindromic_substring"},next:{title:"Min Height BST",permalink:"/docs/easy/min_height_bst"}},d={},s=[],u={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"middle-node"},"Middle node"),(0,o.kt)("admonition",{title:"Middle node",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You're given a Linked List with at least one node. Write a function that returns the middle node of the Linked List. If there are two middle nodes (i.e. an even length list), your function should return the second of these nodes."),(0,o.kt)("p",{parentName:"admonition"},"Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list."),(0,o.kt)("p",{parentName:"admonition"},"Sample Input"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"linkedList = 2 -> 7 -> 3 -> 5\n")),(0,o.kt)("p",{parentName:"admonition"},"Sample Output"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"3 -> 5 // The middle could be 7 or 3,\n// we return the second middle node\n"))),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"class LinkedList {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\n// O(n) time | O(1) space - where n is the number of nodes in the linked list\nfunction middleNode(linkedList) {\n  let count = 0;\n  let currentNode = linkedList;\n  while (currentNode !== null) {\n    count++;\n    currentNode = currentNode.next;\n  }\n\n  let middleNode = linkedList;\n  for (let i = 0; i < Math.floor(count / 2); i++) {\n    middleNode = middleNode.next;\n  }\n  return middleNode;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 2"',title:'"Solution','2"':!0},"class LinkedList {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\n// O(n) time | O(1) space - where n is the number of nodes in the linked list\nfunction middleNode(linkedList) {\n  let slowNode = linkedList;\n  let fastNode = linkedList;\n  while (fastNode !== null && fastNode.next !== null) {\n    slowNode = slowNode.next;\n    fastNode = fastNode.next.next;\n  }\n\n  return slowNode;\n}\n")))}p.isMDXComponent=!0}}]);