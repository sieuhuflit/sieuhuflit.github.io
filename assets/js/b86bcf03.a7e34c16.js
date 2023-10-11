"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=n.createContext({}),l=function(e){var t=n.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(h.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,h=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(h,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},s="Class Photos",i={unversionedId:"easy/class_photos",id:"easy/class_photos",title:"Class Photos",description:"It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the students in two rows before taking the photo. Each row should contain the same number of the students and should adhere to the following guidelines:",source:"@site/docs/easy/class_photos.md",sourceDirName:"easy",slug:"/easy/class_photos",permalink:"/docs/easy/class_photos",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/easy/class_photos.md",tags:[],version:"current",lastUpdatedBy:"Sieu Thai",lastUpdatedAt:1696996042,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Caesar Cipher Encryptor",permalink:"/docs/easy/ceasar_cipher_encryptor"},next:{title:"Common Characters",permalink:"/docs/easy/common_characters"}},h={},l=[],c={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-photos"},"Class Photos"),(0,a.kt)("admonition",{title:"Class Photos",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the students in two rows before taking the photo. Each row should contain the same number of the students and should adhere to the following guidelines:"),(0,a.kt)("p",{parentName:"admonition"},"All students wearing red shirts must be in the same row.\nAll students wearing blue shirts must be in the same row.\nEach student in the back row must be strictly taller than the student directly in front of them in the front row.\nYou're given two input arrays: one containing the heights of all the students with red shirts and another one containing the heights of all the students with blue shirts. These arrays will always have the same length, and each height will be a positive integer. Write a function that returns whether or not a class photo that follows the stated guidelines can be taken."),(0,a.kt)("p",{parentName:"admonition"},"Note: you can assume that each class has at least 2 students."),(0,a.kt)("p",{parentName:"admonition"},"Sample Input"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"redShirtHeights = [5, 8, 1, 3, 4]\nblueShirtHeights = [6, 9, 2, 4, 5]\n")),(0,a.kt)("p",{parentName:"admonition"},"Sample Output"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"true // Place all students with blue shirts in the back row.\n"))),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Solution 1"',title:'"Solution','1"':!0},"// O(nlog(n)) time | O(1) space - where n is the number of students\nfunction classPhotos(redShirtHeights, blueShirtHeights) {\n  redShirtHeights.sort((a, b) => b - a);\n  blueShirtHeights.sort((a, b) => b - a);\n\n  const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';\n  for (let idx = 0; idx < redShirtHeights.length; idx++) {\n    const redShirtHeight = redShirtHeights[idx];\n    const blueShirtHeight = blueShirtHeights[idx];\n\n    if (shirtColorInFirstRow === 'RED') {\n      if (redShirtHeight >= blueShirtHeight) return false;\n    } else if (blueShirtHeight >= redShirtHeight) return false;\n  }\n\n  return true;\n}\n")))}p.isMDXComponent=!0}}]);