"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={},s="Valid IP Addresses",o={unversionedId:"medium/valid_ip_address",id:"medium/valid_ip_address",title:"Valid IP Addresses",description:"You're given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses that can be created by inserting three .s in the string.",source:"@site/docs/medium/valid_ip_address.md",sourceDirName:"medium",slug:"/medium/valid_ip_address",permalink:"/docs/medium/valid_ip_address",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/medium/valid_ip_address.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693638433,formattedLastUpdatedAt:"Sep 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Three Number Sum",permalink:"/docs/medium/three_number_sum"},next:{title:"Zero Sum Subarray",permalink:"/docs/medium/zero_sum_subarray"}},d={},l=[],u={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"valid-ip-addresses"},"Valid IP Addresses"),(0,i.kt)("admonition",{title:"Valid IP Addresses",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You're given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses that can be created by inserting three .s in the string."),(0,i.kt)("p",{parentName:"admonition"},"An IP address is a sequence of four positive integers that are separated by .s, where each individual integer is within the range 0 - 255, inclusive."),(0,i.kt)("p",{parentName:"admonition"},'An IP address isn\'t valid if any of the individual integers contains leading 0s. For example, "192.168.0.1" is a valid IP address, but "192.168.00.1" and "192.168.0.01" aren\'t, because they contain "00" and 01, respectively. Another example of a valid IP address is "99.1.1.10"; conversely, "991.1.1.0" isn\'t valid, because "991" is greater than 255.'),(0,i.kt)("p",{parentName:"admonition"},"Your function should return the IP addresses in string format and in no particular order. If no valid IP addresses can be created from the string, your function should return an empty list."),(0,i.kt)("p",{parentName:"admonition"},"Note: check out our Systems Design Fundamentals on SystemsExpert to learn more about IP addresses!"),(0,i.kt)("p",{parentName:"admonition"},"Sample Input"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'string = "1921680"\n')),(0,i.kt)("p",{parentName:"admonition"},"Sample Output"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'[\n  "1.9.216.80",\n  "1.92.16.80",\n  "1.92.168.0",\n  "19.2.16.80",\n  "19.2.168.0",\n  "19.21.6.80",\n  "19.21.68.0",\n  "19.216.8.0",\n  "192.1.6.80",\n  "192.1.68.0",\n  "192.16.8.0"\n]\n// The IP addresses could be ordered differently.\n'))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution "',title:'"Solution','"':!0},"// O(1) time | O(1) space\nfunction validIPAddresses(string) {\n  const ipAddressFound = [];\n  \n  for (let i = 0; i < Math.min(string.length, 4); i++) {\n    const currentIpAddressParts = ['', '', '', ''];\n    \n    currentIpAddressParts[0] = string.slice(0, i);\n    if (!isValidPart(currentIpAddressParts[0])) continue;\n\n    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {\n      currentIpAddressParts[1] = string.slice(i, j);\n      if (!isValidPart(currentIpAddressParts[1])) continue;\n\n      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {\n        currentIpAddressParts[2] = string.slice(j, k);\n        currentIpAddressParts[3] = string.slice(k);\n\n        if (isValidPart(currentIpAddressParts[2]) && isValidPart(currentIpAddressParts[3])) {\n          ipAddressFound.push(currentIpAddressParts.join('.'))\n        }\n      }\n    }\n  }\n  return ipAddressFound;\n}\n\nfunction isValidPart(string) {\n  const stringAsInt = parseInt(string);\n  if (stringAsInt > 255) return false;\n  return string.length === stringAsInt.toString().length;\n}\n")))}p.isMDXComponent=!0}}]);