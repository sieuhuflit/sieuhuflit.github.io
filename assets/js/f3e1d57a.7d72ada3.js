"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[938],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=c(t),h=a,m=g["".concat(l,".").concat(h)]||g[h]||p[h]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={},o="Bridge",s={unversionedId:"design_patterns/structure_design_patterns/brigde",id:"design_patterns/structure_design_patterns/brigde",title:"Bridge",description:"In software development, you may encounter situations where you have a hierarchy of abstractions and multiple implementations for those abstractions. The traditional inheritance-based approach can lead to a complex and inflexible class hierarchy. Additionally, changes in the implementation classes can affect all subclasses, leading to maintenance challenges.",source:"@site/docs/design_patterns/structure_design_patterns/brigde.md",sourceDirName:"design_patterns/structure_design_patterns",slug:"/design_patterns/structure_design_patterns/brigde",permalink:"/docs/design_patterns/structure_design_patterns/brigde",draft:!1,editUrl:"https://github.com/sieuhuflit/sieuhuflit.github.io/tree/main/docs/design_patterns/structure_design_patterns/brigde.md",tags:[],version:"current",lastUpdatedBy:"sieuhuflit",lastUpdatedAt:1693800530,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adapter \ud83c\udf10",permalink:"/docs/design_patterns/structure_design_patterns/adapter"},next:{title:"Composite",permalink:"/docs/design_patterns/structure_design_patterns/composite"}},l={},c=[{value:"Solution",id:"solution",level:2},{value:"When to Use",id:"when-to-use",level:2}],d={toc:c},g="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bridge"},"Bridge"),(0,a.kt)("h1",{id:"problem"},"Problem"),(0,a.kt)("admonition",{title:"The Bridge Pattern Problem:",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"In software development, you may encounter situations where you have a hierarchy of abstractions and multiple implementations for those abstractions. The traditional inheritance-based approach can lead to a complex and inflexible class hierarchy. Additionally, changes in the implementation classes can affect all subclasses, leading to maintenance challenges."),(0,a.kt)("p",{parentName:"admonition"},"For example, imagine a scenario where you have different shapes (abstractions) like circles and rectangles and different rendering engines (implementations) like vector and raster. Without the Bridge Pattern, you might create a complex hierarchy of shape subclasses for each rendering engine, which can be hard to manage."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Problem: Managing shapes and rendering engines without the Bridge Pattern\n\n// Abstraction: Shape\nclass Shape {\n  constructor() {}\n\n  drawWithVector() {\n    throw new Error("Subclasses must implement drawWithVector.");\n  }\n\n  drawWithRaster() {\n    throw new Error("Subclasses must implement drawWithRaster.");\n  }\n}\n\n// Implementations: Vector and Raster Rendering Engines\nclass VectorRenderingEngine {\n  render() {\n    console.log("Drawing in vector mode.");\n  }\n}\n\nclass RasterRenderingEngine {\n  render() {\n    console.log("Drawing in raster mode.");\n  }\n}\n\n// Concrete Shapes\nclass Circle extends Shape {\n  drawWithVector() {\n    console.log("Drawing a circle with vectors.");\n  }\n\n  drawWithRaster() {\n    console.log("Drawing a circle with raster.");\n  }\n}\n\nclass Rectangle extends Shape {\n  drawWithVector() {\n    console.log("Drawing a rectangle with vectors.");\n  }\n\n  drawWithRaster() {\n    console.log("Drawing a rectangle with raster.");\n  }\n}\n\n// Client Code\nconst circle = new Circle();\nconst rectangle = new Rectangle();\n\nconst vectorEngine = new VectorRenderingEngine();\nconst rasterEngine = new RasterRenderingEngine();\n\ncircle.drawWithVector();\nrectangle.drawWithVector();\n\ncircle.drawWithRaster();\nrectangle.drawWithRaster();\n\n')),(0,a.kt)("p",{parentName:"admonition"},"In this code, we have a hierarchy of shapes (abstractions) and two rendering engines (implementations). The problem is that each shape class has methods for both vector and raster rendering, which leads to a complex hierarchy. Additionally, changes in rendering engines can affect all shape subclasses, making it less flexible.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("admonition",{title:"The Bridge Pattern Solution:",type:"success"},(0,a.kt)("p",{parentName:"admonition"},"The Bridge Pattern decouples the abstraction from its implementation, allowing both to vary independently. It involves creating two separate hierarchies: one for abstractions (e.g., shapes) and one for implementations (e.g., rendering engines). The abstraction holds a reference to an implementation object, and the client code interacts with the abstraction."),(0,a.kt)("p",{parentName:"admonition"},"This separation of concerns improves flexibility, maintainability, and allows for new combinations of abstractions and implementations without changing existing code."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Solution: Using the Bridge Pattern to decouple shapes and rendering engines\n\n// Abstraction: Shape\nclass Shape {\n  constructor(renderingEngine) {\n    this.renderingEngine = renderingEngine;\n  }\n\n  draw() {\n    throw new Error("Subclasses must implement draw.");\n  }\n}\n\n// Implementations: Rendering Engines\nclass RenderingEngine {\n  render() {\n    throw new Error("Subclasses must implement render.");\n  }\n}\n\nclass VectorRenderingEngine extends RenderingEngine {\n  render() {\n    console.log("Drawing in vector mode.");\n  }\n}\n\nclass RasterRenderingEngine extends RenderingEngine {\n  render() {\n    console.log("Drawing in raster mode.");\n  }\n}\n\n// Concrete Shapes\nclass Circle extends Shape {\n  draw() {\n    console.log("Drawing a circle.");\n    this.renderingEngine.render();\n  }\n}\n\nclass Rectangle extends Shape {\n  draw() {\n    console.log("Drawing a rectangle.");\n    this.renderingEngine.render();\n  }\n}\n\n// Client Code\nconst vectorEngine = new VectorRenderingEngine();\nconst rasterEngine = new RasterRenderingEngine();\n\nconst circle = new Circle(vectorEngine);\nconst rectangle = new Rectangle(rasterEngine);\n\ncircle.draw();\nrectangle.draw();\n\n')),(0,a.kt)("p",{parentName:"admonition"},"In this code with the Bridge Pattern:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"We have separated the abstraction (Shape) from the implementation (RenderingEngine)."),(0,a.kt)("li",{parentName:"ul"},"Each shape class now holds a reference to a rendering engine, allowing them to use the rendering engine without the need for redundant methods."),(0,a.kt)("li",{parentName:"ul"},"Changes in rendering engines or the addition of new rendering engines do not impact the shape classes, enhancing flexibility and maintainability."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"when-to-use"},"When to Use"),(0,a.kt)("p",null,"When to Use the Bridge Pattern:\nYou should consider using the Bridge Pattern in the following situations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When you have a complex hierarchy of abstractions and multiple implementations, and you want to avoid a combinatorial explosion of subclasses."),(0,a.kt)("li",{parentName:"ol"},"When you need to allow the abstraction and implementation to vary independently."),(0,a.kt)("li",{parentName:"ol"},"When you want to avoid tight coupling between abstractions and implementations, enabling flexibility and ease of maintenance."),(0,a.kt)("li",{parentName:"ol"},"When you need to support multiple, interchangeable implementations for an abstraction.")))}p.isMDXComponent=!0}}]);