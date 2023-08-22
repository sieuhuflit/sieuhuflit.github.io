"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,u=s["".concat(p,".").concat(f)]||s[f]||d[f]||r;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i="Optimal freelancing",l={unversionedId:"easy/optimal_freelancing",id:"easy/optimal_freelancing",title:"Optimal freelancing",description:"You recently started freelance software development and have been offered a variety of job opportunities. Each job has a deadline, meaning there is no value in completing the work after the deadline. Additionally, each job has an associated payment representing the profit for completing that job. Given this information, write a function that returns the maximum profit that can be obtained in a 7-day period.",source:"@site/docs/easy/optimal_freelancing.md",sourceDirName:"easy",slug:"/easy/optimal_freelancing",permalink:"/docs/easy/optimal_freelancing",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/optimal_freelancing.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1692727554,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nth Fibonacci",permalink:"/docs/easy/nth_fibonacci"},next:{title:"Product Sum",permalink:"/docs/easy/product_sum"}},p={},c=[],m={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"optimal-freelancing"},"Optimal freelancing"),(0,o.kt)("admonition",{title:"Optimal freelancing",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You recently started freelance software development and have been offered a variety of job opportunities. Each job has a deadline, meaning there is no value in completing the work after the deadline. Additionally, each job has an associated payment representing the profit for completing that job. Given this information, write a function that returns the maximum profit that can be obtained in a 7-day period."),(0,o.kt)("p",{parentName:"admonition"},"Each job will take 1 full day to complete, and the deadline will be given as the number of days left to complete the job. For example, if a job has a deadline of 1, then it can only be completed if it is the first job worked on. If a job has a deadline of 2, then it could be started on the first or second day."),(0,o.kt)("p",{parentName:"admonition"},"Note: There is no requirement to complete all of the jobs. Only one job can be worked on at a time, meaning that in some scenarios it will be impossible to complete them all."),(0,o.kt)("p",{parentName:"admonition"},"Sample Input"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'jobs = [\n  {"deadline": 1, "payment": 1},\n  {"deadline": 2, "payment": 1},\n  {"deadline": 2, "payment": 2}\n]\n')),(0,o.kt)("p",{parentName:"admonition"},"Sample Output"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"3 // Job 0 would be completed first, followed by job 2. Job 1 is not completed.\n"))),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(n * log(n)) time | O(1) space - where n is the number of jobs\nfunction optimalFreelancing(jobs) {\n  const LENGTH_OF_WEEK = 7;\n  let profit = 0;\n  jobs.sort((jobA, jobB) => jobB.payment - jobA.payment);\n  const timeline = new Array(LENGTH_OF_WEEK).fill(false);\n  for (const job of jobs) {\n    const maxTime = Math.min(job.deadline, LENGTH_OF_WEEK);\n    for (let time = maxTime - 1; time >= 0; time--) {\n      if (timeline[time] === false) {\n        timeline[time] = true;\n        profit += job.payment;\n        break;\n      }\n    }\n  }\n  return profit;\n}\n")))}d.isMDXComponent=!0}}]);