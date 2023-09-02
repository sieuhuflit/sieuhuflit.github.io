"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=m(n),p=r,f=l["".concat(s,".").concat(p)]||l[p]||d[p]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[l]="string"==typeof e?e:r,o[1]=u;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var i=n(7462),r=(n(7294),n(3905));const a={},o="Validate Subsequence",u={unversionedId:"easy/minimum_waiting_time",id:"easy/minimum_waiting_time",title:"Validate Subsequence",description:"You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order.",source:"@site/docs/easy/minimum_waiting_time.md",sourceDirName:"easy",slug:"/easy/minimum_waiting_time",permalink:"/docs/easy/minimum_waiting_time",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/minimum_waiting_time.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693639106,formattedLastUpdatedAt:"Sep 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Min Height BST",permalink:"/docs/easy/min_height_bst"},next:{title:"Node Depths",permalink:"/docs/easy/node_depths"}},s={},m=[],c={toc:m},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validate-subsequence"},"Validate Subsequence"),(0,r.kt)("admonition",{title:"Validate Subsequence",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order."),(0,r.kt)("p",{parentName:"admonition"},"A query's waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries."),(0,r.kt)("p",{parentName:"admonition"},"Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries of durations ","[1, 4, 5]",", then the total waiting time if the queries were executed in the order of ","[5, 1, 4]"," would be (0) + (5) + (5 + 1) = 11. The first query of duration 5 would be executed immediately, so its waiting time would be 0, the second query of duration 1 would have to wait 5 seconds (the duration of the first query) to be executed, and the last query would have to wait the duration of the first two queries before being executed."),(0,r.kt)("p",{parentName:"admonition"},"Note: you're allowed to mutate the input array."),(0,r.kt)("p",{parentName:"admonition"},"Sample Input"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"queries = [3, 2, 1, 2, 6]\n")),(0,r.kt)("p",{parentName:"admonition"},"Sample Output"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"17\n"))),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(nlogn) time | O(1) space - where n is the number of queries\nfunction minimumWaitingTime(queries) {\n  queries.sort((a, b) => a - b);\n\n  let totalWaitingTime = 0;\n  for (let idx = 0; idx < queries.length; idx++) {\n    const duration = queries[idx];\n    const queriesLeft = queries.length - (idx + 1);\n    totalWaitingTime += duration * queriesLeft;\n  }\n\n  return totalWaitingTime;\n}\n")))}d.isMDXComponent=!0}}]);