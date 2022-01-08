"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[723],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return b}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),b=a,u=m["".concat(p,".").concat(b)]||m[b]||d[b]||o;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},895:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:3},p="Mobx\u4f7f\u7528",s={unversionedId:"fe/state/mobx",id:"fe/state/mobx",title:"Mobx\u4f7f\u7528",description:"\u524d\u7aef\u7684\u573a\u666f\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u73b0\u9636\u6bb5\uff0c\u65b0\u9879\u76ee\u90fd\u4f1a\u91c7\u7528Vue\u3001Angular\u3001React\u4e4b\u4e00\u6765\u7ba1\u7406\u6570\u636e\u5230\u89c6\u56fe\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u5b83\u4eec\u90fd\u6709\u81ea\u5df1\u7ba1\u7406\u7ec4\u4ef6\u72b6\u6001\u3001\u751f\u547d\u5468\u671f\u7684\u72ec\u7279\u673a\u5236\uff0c\u4f46\u662f\u5728\u590d\u6742\u573a\u666f\u4e0b\uff0c\u8fd8\u662f\u4f1a\u91c7\u7528\u50cfVuex\u3001Ngrx\u3001Redux\u8fd9\u6837\u7684\u72b6\u6001\u5bb9\u5668\u6765\u7ba1\u7406\u91cd\u8981\u7684\u5168\u5c40\u72b6\u6001\u3002",source:"@site/docs/01-fe/state/mobx.md",sourceDirName:"01-fe/state",slug:"/fe/state/mobx",permalink:"/docs/fe/state/mobx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"React\u72b6\u6001\u7ba1\u7406",permalink:"/docs/fe/state/tools"},next:{title:"Flatten Array",permalink:"/docs/fe/misc/flat"}},c=[{value:"\u4ecb\u7ecd \ud83d\udcda",id:"\u4ecb\u7ecd-",children:[],level:2},{value:"\u7528\u6cd5 \ud83d\udd27",id:"\u7528\u6cd5-",children:[{value:"\u76f4\u63a5\u88c5\u9970\u5bf9\u8c61",id:"\u76f4\u63a5\u88c5\u9970\u5bf9\u8c61",children:[],level:3},{value:"\u5728\u7c7b\u4e2d\u58f0\u660e\u5176\u5c5e\u6027\u4e3a <code>observable</code>",id:"\u5728\u7c7b\u4e2d\u58f0\u660e\u5176\u5c5e\u6027\u4e3a-observable",children:[],level:3},{value:"\u5728 <code>react</code> \u7ec4\u4ef6\u4e2d\u4f7f\u7528 <code>Mobx</code>",id:"\u5728-react-\u7ec4\u4ef6\u4e2d\u4f7f\u7528-mobx",children:[{value:"\u7c7b\u7ec4\u4ef6\u4e2d",id:"\u7c7b\u7ec4\u4ef6\u4e2d",children:[],level:4},{value:"\u51fd\u6570\u7ec4\u4ef6\u4e2d",id:"\u51fd\u6570\u7ec4\u4ef6\u4e2d",children:[],level:4},{value:"\u5916\u90e8\u7684 <code>observable</code> \u5bf9\u8c61",id:"\u5916\u90e8\u7684-observable-\u5bf9\u8c61",children:[],level:4}],level:3},{value:"\u4e00\u4e9b\u6280\u5de7",id:"\u4e00\u4e9b\u6280\u5de7",children:[{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",children:[],level:4},{value:"\u4f18\u5316",id:"\u4f18\u5316",children:[],level:4},{value:"\u94fe\u5f0f\u53cd\u5e94",id:"\u94fe\u5f0f\u53cd\u5e94",children:[],level:4},{value:"\u7531 <code>react</code> \u751f\u547d\u5468\u671f\u7ba1\u7406\u5c40\u90e8\u7684 <code>observable</code> \u72b6\u6001",id:"\u7531-react-\u751f\u547d\u5468\u671f\u7ba1\u7406\u5c40\u90e8\u7684-observable-\u72b6\u6001",children:[],level:4}],level:3}],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mobx\u4f7f\u7528"},"Mobx\u4f7f\u7528"),(0,o.kt)("p",null,"\u524d\u7aef\u7684\u573a\u666f\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u73b0\u9636\u6bb5\uff0c\u65b0\u9879\u76ee\u90fd\u4f1a\u91c7\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Vue"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Angular"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u4e4b\u4e00\u6765\u7ba1\u7406\u6570\u636e\u5230\u89c6\u56fe\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u5b83\u4eec\u90fd\u6709\u81ea\u5df1\u7ba1\u7406\u7ec4\u4ef6\u72b6\u6001\u3001\u751f\u547d\u5468\u671f\u7684\u72ec\u7279\u673a\u5236\uff0c\u4f46\u662f\u5728\u590d\u6742\u573a\u666f\u4e0b\uff0c\u8fd8\u662f\u4f1a\u91c7\u7528\u50cf",(0,o.kt)("inlineCode",{parentName:"p"},"Vuex"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Ngrx"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Redux"),"\u8fd9\u6837\u7684\u72b6\u6001\u5bb9\u5668\u6765\u7ba1\u7406",(0,o.kt)("strong",{parentName:"p"},"\u91cd\u8981\u7684\u5168\u5c40\u72b6\u6001"),"\u3002"),(0,o.kt)("p",null,"\u6211\u5de5\u4f5c\u6700\u4e3b\u8981\u7528\u7684\u8fd8\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\uff0c\u5728\u9879\u76ee\u4e2d\uff0c\u6211\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Mobx"),"\u6765\u4f5c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u72b6\u6001\u7ba1\u7406\u7684\u8865\u5145\uff0c\u52a0\u5feb\u7f16\u7801\u7684\u6548\u7387\uff0c\u672c\u6587\u4e3b\u8981\u8bb0\u5f55\u4e00\u4e9b",(0,o.kt)("inlineCode",{parentName:"p"},"Mobx"),"\u7684\u7528\u6cd5\u3002"),(0,o.kt)("h2",{id:"\u4ecb\u7ecd-"},"\u4ecb\u7ecd \ud83d\udcda"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Mobx"),"\u662f\u4e00\u4e2a\u72b6\u6001\u7ba1\u7406\u5e93\uff0c\u5728\u72b6\u6001\u4f9d\u8d56\u7684\u63cf\u8ff0\u4e0a\u9762\u6709\u72ec\u7279\u7684\u4f18\u52bf\uff0c\u5c31\u50cf\u662f\u5728\u5199\u516c\u5f0f\u4e00\u6837\uff0c\u5b83\u80fd\u8ba9\u5f00\u53d1\u8005\u66f4\u7b80\u6d01\u7684\u58f0\u660e\u63cf\u8ff0\u5c5e\u6027\u72b6\u6001\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u81ea\u52a8\u7684\u5b8c\u6210\u76f8\u5173\u4f9d\u8d56\u7684\u66f4\u65b0\u3001\u5f15\u8d77\u526f\u4f5c\u7528\u3002"),(0,o.kt)("h2",{id:"\u7528\u6cd5-"},"\u7528\u6cd5 \ud83d\udd27"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Mobx"),"\u7684\u4f7f\u7528\u5f88\u7075\u6d3b\uff0c\u53ef\u4ee5\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"observable"),"\u7684\u7279\u6027\u76f4\u63a5\u4f5c\u7528\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u58f0\u660e\u5728\u7c7b\u4e2d\uff0c\u751a\u81f3\u76f4\u63a5\u5199\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"React"),"\u7ec4\u4ef6\u7c7b\u7684\u5c5e\u6027\u4e2d\uff08\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Mobx"),"\u7684\u89c6\u89d2\u4e2d\u4e0e\u7c7b\u6ca1\u6709\u533a\u522b\uff09\u3002"),(0,o.kt)("h3",{id:"\u76f4\u63a5\u88c5\u9970\u5bf9\u8c61"},"\u76f4\u63a5\u88c5\u9970\u5bf9\u8c61"),(0,o.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observable")," \u5305\u88c5\u7684\u5bf9\u8c61\uff0c\u4f1a\u83b7\u5f97",(0,o.kt)("inlineCode",{parentName:"p"},"Mobx"),"\u7ed9\u4e88\u7684\u80fd\u529b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import * as mobx from "mobx";\n\n// \u58f0\u660e\u4e00\u4e2a\u5bf9\u8c61\u662f observable\nconst myObj = mobx.observable({\n  a: 1,\n  b: 3,\n  get c() {\n    return this.b * 2;\n  }\n});\n\n// \u6ce8\u518c\u4e00\u4e2a\u526f\u4f5c\u7528\u51fd\u6570\nmobx.autorun(() => {\n  console.log("a", myObj.a);\n});\nmobx.autorun(() => {\n  console.log("c", myObj.c);\n});\n// \u6539\u53d8\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\nmyObj.a = false;\nmyObj.a = "hello";\nmyObj.b = 4;\n\n/** \u4f9d\u6b21\u8f93\u51fa\na 1\nc 6\na false\na hello \nc 8\n*/\n')),(0,o.kt)("p",null,"\u5df2\u7ecf\u53ef\u4ee5\u770b\u51fa",(0,o.kt)("inlineCode",{parentName:"p"},"Mobx"),"\u7684\u4e00\u4e9b\u7279\u6027\u4e86"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06\u5bf9\u8c61\u8f6c\u53d8\u4e3a\u53ef\u89c2\u5bdf\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u8c61\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u6ce8\u518c\u7684\u526f\u4f5c\u7528\u51fd\u6570\u81ea\u52a8\u89e6\u53d1\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e0e\u526f\u4f5c\u7528\u65e0\u5173\u7684\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u526f\u4f5c\u7528\u4e0d\u4f1a\u89e6\u53d1\uff0c\u4e0a\u4f8b\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"myObj.b"),"\uff0c\u53d8\u5316\u65f6\u4e0d\u4f1a\u89e6\u53d1\u53ea\u4e0e",(0,o.kt)("inlineCode",{parentName:"li"},"a"),"\u6709\u5173\u7684\u526f\u4f5c\u7528\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"c"),"\u8fd9\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"getter"),"\u5c5e\u6027\u4f1a\u88ab",(0,o.kt)("inlineCode",{parentName:"li"},"autorun"),"\u526f\u4f5c\u7528\u8bb0\u5f55\u5230\u5173\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"b"),"\u7684\u4f9d\u8d56\uff0c\u5f53",(0,o.kt)("inlineCode",{parentName:"li"},"b"),"\u53d1\u751f\u53d8\u5316\uff0c\u5173\u8054",(0,o.kt)("inlineCode",{parentName:"li"},"c"),"\u7684\u526f\u4f5c\u7528\u4e5f\u4f1a\u88ab\u89e6\u53d1\u3002")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u77e5\u9053\u4ee5\u4e0a\u7684\u89c4\u5219\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u9879\u76ee\u4e2d\u5c1d\u8bd5\u5b83\u4e86"),"\u3002"),(0,o.kt)("h3",{id:"\u5728\u7c7b\u4e2d\u58f0\u660e\u5176\u5c5e\u6027\u4e3a-observable"},"\u5728\u7c7b\u4e2d\u58f0\u660e\u5176\u5c5e\u6027\u4e3a ",(0,o.kt)("inlineCode",{parentName:"h3"},"observable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { observable, computed, action, autorun, flow } from "mobx";\n\n// \u4f7f\u7528\u5c5e\u6027\u88c5\u9970\u5668\u58f0\u660e\nclass SimpleStore {\n  @observable a = 1;\n  @observable c = 2;\n\n  @computed get b() {\n    return this.a * this.a + 1;\n  }\n  @action setA(a) {\n    this.a = a;\n  }\n  asyncUpdate = flow(function*() {\n    const next1 = yield new Promise(res => setTimeout(() => res(3), 1000));\n    this.a = next1;\n    const next2 = yield new Promise(res => setTimeout(() => res(4), 1000));\n    this.a = next2;\n  });\n}\n\nconst store = new SimpleStore();\n\nautorun(() => {\n  console.log(store.a);\n});\n\nstore.setA(2);\nstore.asyncUpdate();\n/** \u4f9d\u6b21\u8f93\u51fa\n1\n2   // setA(2)\n3   // asyncUpdate()   1s\n4   // asyncUpdate()   2s\n*/\n')),(0,o.kt)("p",null,"\u4ece\u7c7b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"observable"),"\u58f0\u660e\u4e2d\u53c8\u80fd\u770b\u51fa\u4e00\u4e9b\u4e1c\u897f\u6765\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9700\u8981\u4f7f\u7528\u88c5\u9970\u5668\u7684\u8bed\u6cd5\u6765\u5feb\u901f\u7684\u58f0\u660e",(0,o.kt)("inlineCode",{parentName:"li"},"Mobx"),"\u76f8\u5173\u7684\u529f\u80fd\uff0c\u76f8\u6bd4\u76f4\u63a5\u4f7f\u7528\u5bf9\u8c61\uff0c\u9700\u8981\u8f93\u5165\u7684\u5de5\u4f5c\u91cf\u4f1a\u5927\u4e00\u4e9b\uff0c\u4f46\u662f\u53ef\u4ee5\u5bf9\u5176\u8fd0\u4f5c\u6709\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u4f8b\u5316\u7684\u7c7b\u5bf9\u8c61\u4e5f\u62e5\u6709\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"observable"),"\u7684\u80fd\u529b\uff0c\u5728\u5b57\u6bb5\u4e0a\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"li"},"@observable"),"\uff0c\u8be5\u5b57\u6bb5\u5c31\u4f1a\u88ab\u526f\u4f5c\u7528\u8bb0\u5f55\u5230\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@action"),"\u662f\u7528\u6765\u58f0\u660e\u6539\u53d8",(0,o.kt)("inlineCode",{parentName:"li"},"@observable"),"\u5b57\u6bb5\u7684\u65b9\u6cd5\u3002\u5982\u679c\u5f00\u542f\u4e86\u4ee5\u4e0b\u914d\u7f6e\uff0c\u5c06\u5f3a\u5236\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"@action"),"\u65b9\u6cd5\u6765\u4fee\u6539\u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mobx.configure({\n    enforceActions: true\n});\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"flow"),"\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"Mobx"),"\u63d0\u4f9b\u7528\u4e8e\u4fee\u9970\u5f02\u6b65",(0,o.kt)("inlineCode",{parentName:"li"},"action"),"\u7684\u65b9\u6cd5\u3002\u5176\u5b9e\u5c31\u662f\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"async/await"),"\u65b9\u6cd5\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"Generator"),"\u5b9e\u73b0\uff0c\u6700\u68d2\u7684\u7279\u6027\u5c31\u662f\u8fd9\u4e2a\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u662f\u53ef\u4ee5\u53d6\u6d88\u7684\u3002")),(0,o.kt)("h3",{id:"\u5728-react-\u7ec4\u4ef6\u4e2d\u4f7f\u7528-mobx"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"h3"},"react")," \u7ec4\u4ef6\u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Mobx")),(0,o.kt)("p",null,"\u56e0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," \u7ec4\u4ef6\u9700\u8981\u76d1\u542c ",(0,o.kt)("inlineCode",{parentName:"p"},"observable")," \u7684\u53d8\u5316\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," \u7684\u903b\u8f91\u5176\u5b9e\u5c31\u662f\u526f\u4f5c\u7528\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"autorun")," \u7684\u6b63\u786e\u65b9\u5f0f\u662f\u5f15\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"mobx-react")," \u5e93\u3002\u5bfc\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"observer")," \u8fd9\u4e2a\u9ad8\u9636\u7ec4\u4ef6\uff0c\u6765\u81ea\u52a8\u5b8c\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"autorun")," \u7684\u6ce8\u518c\u4e0e\u9500\u6bc1\u3002"),(0,o.kt)("h4",{id:"\u7c7b\u7ec4\u4ef6\u4e2d"},"\u7c7b\u7ec4\u4ef6\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport * as ReactDOM from "react-dom";\nimport { observable } from "mobx";\nimport { observer, Observer } from "mobx-react";\n\n@observer // \u9ad8\u9636\u7ec4\u4ef6\uff0c\u8ba9react\u7ec4\u4ef6\u7684render\u5728mobx\u7684autorun\u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\nclass Counter extends React.Component {\n  // \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 observable \u88c5\u9970\u4f7f\u7528\uff0c\u4ee3\u66ff react \u81ea\u5df1\u7684 state\uff0c\u66f4\u65b0\u5c5e\u6027\u6bd4setState\u8981\u76f4\u63a5\u4e00\u4e9b\n  @observable count = 0;\n  @observable unused = 0;\n\n  handleInc = () => this.count++;\n  handleDec = () => this.unused--;\n\n  render() {\n    console.log("render");\n    return (\n      <div>\n        {this.count}\n        <button onClick={this.handleInc}>+</button>\n        <button onClick={this.handleDec}>-</button>\n      </div>\n    );\n  }\n}\n')),(0,o.kt)("p",null,"\u4e0a\u4f8b\u4e2d\uff0c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u7684\u66f4\u65b0\u4f1a\u5f3a\u5236\u7ec4\u4ef6\u66f4\u65b0\uff0c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"unused")," \u7684\u66f4\u65b0\u4e0d\u4f1a\u5bfc\u81f4\u91cd\u65b0\u6e32\u67d3\uff0c\u56e0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," \u4ec5\u4ec5\u58f0\u660e\u4e86\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u7684\u4f7f\u7528\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"render"),"\u53c8\u88ab\u9ad8\u9636\u7ec4\u4ef6\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"autorun")," \u5305\u88c5\u8fc7\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"autorun")," \u5176\u5b9e\u6709\u8fd4\u56de\u503c\uff0c\u7528\u4e8e\u9500\u6bc1\u8fd9\u4e2a\u526f\u4f5c\u7528\uff0c\u4e0d\u8fc7\u88ab ",(0,o.kt)("inlineCode",{parentName:"p"},"react"),"\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"unmount")," \u751f\u547d\u5468\u671f\u81ea\u52a8\u9500\u6bc1\u4e86\u3002"),(0,o.kt)("h4",{id:"\u51fd\u6570\u7ec4\u4ef6\u4e2d"},"\u51fd\u6570\u7ec4\u4ef6\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport * as ReactDOM from "react-dom";\nimport { observable } from "mobx";\nimport { observer, Observer, useLocalStore } from "mobx-react";\n\n// \u4f7f\u7528 observer \u76f4\u63a5\u5305\u88c5\u51fd\u6570\u7ec4\u4ef6\nconst Counter = observer(() => {\n  // \u4f7f\u7528 useLocalStore \u521b\u5efa\u4e00\u4e2a\u5c40\u90e8\u7684 observable\n  const local = useLocalStore(() => ({\n    count: 0,\n    unused: 0,\n    handleInc() {\n      this.count++;\n    },\n    handleDec() {\n      this.unused--;\n    }\n  }));\n  console.log("render");\n  return (\n    <div>\n      {local.count}\n      <button onClick={() => local.handleInc()}>+</button>\n      <button onClick={() => local.handleDec()}>-</button>\n    </div>\n  );\n});\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observer")," \uff1a \u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"autorun")," \u7684\u4e0a\u4e0b\u6587\u4ec5\u4ec5\u7528\u4e8e\u5f53\u524d ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," \u76f4\u63a5\u8bbf\u95ee\u7684\u5c5e\u6027\uff0c\u5982\u679c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"observable")," \u5c5e\u6027\u7684\u8bbf\u95ee\u53d1\u751f\u5728\u5b50\u5143\u7d20\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u4e14\u4e3a\u51fd\u6570\u65f6\uff0c\u9700\u8981\u624b\u52a8\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"<Observer render={()=><JSX>...</JSX>}/>")," \u5c06\u5176\u653e\u5165\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"autorun")," \u4e0a\u4e0b\u6587\u4e2d\uff0c\u5426\u5219\u66f4\u65b0\u4e0d\u4f1a\u751f\u6548\u3002"),(0,o.kt)("h4",{id:"\u5916\u90e8\u7684-observable-\u5bf9\u8c61"},"\u5916\u90e8\u7684 ",(0,o.kt)("inlineCode",{parentName:"h4"},"observable")," \u5bf9\u8c61"),(0,o.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u5728\u5916\u9762\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"observable")," \u5bf9\u8c61\u6216\u7c7b\uff0c\u518d\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observer")," \u6d88\u8d39\u5b83\u3002\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e0b\u4f7f\u7528\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," \u7684\u65b9\u5f0f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport * as ReactDOM from "react-dom";\nimport { observable } from "mobx";\nimport { observer, Observer, useLocalStore } from "mobx-react";\n\nconst store1 = observable({\n  a: 1,\n  b: "hello",\n  incA() {\n    this.a++;\n  },\n  repeatB() {\n    this.b += this.b;\n  },\n  asyncIncA() {\n    setTimeout(() => {\n      this.a++;\n    }, 1000);\n  }\n});\n\n// \u4e3b\u8981\u4ee3\u7801\n//// {\nconst stores = {\n  store1\n};\n\ntype TStore = typeof stores;\nconst storeCtx = React.createContext<TStore>(stores);\n\nconst StoreProvider = ({ children }) => (\n  <storeCtx.Provider value={stores}>{children}</storeCtx.Provider>\n);\n\nconst useSore = () => React.useContext(storeCtx);\n\n//// }\n// \u4e3b\u8981\u4ee3\u7801\n\nconst UsingStore = observer(() => {\n  const { store1 } = useSore();\n\n  return (\n    <div>\n      <div>a:{store1.a}</div>\n      <div>b:{store1.b}</div>\n      <button onClick={() => store1.incA()}>incA</button>\n      <button onClick={() => store1.asyncIncA()}>asyncIncA</button>\n      <button onClick={() => store1.repeatB()}>repeatB</button>\n    </div>\n  );\n});\n\n@observer\nclass UsingStoreInClass extends React.Component {\n  static contextType = storeCtx;\n\n  render() {\n    const { store1 } = this.context as TStore;\n    return (\n      <div>\n        <div>a:{store1.a}</div>\n        <div>b:{store1.b}</div>\n        <button onClick={() => store1.incA()}>incA</button>\n        <button onClick={() => store1.repeatB()}>repeatB</button>\n      </div>\n    );\n  }\n}\n\nconst App = () => {\n  return (\n    <>\n      <StoreProvider>\n        <UsingStore />\n        <br />\n        <UsingStoreInClass />\n        <br />\n      </StoreProvider>\n    </>\n  );\n};\n')),(0,o.kt)("p",null,"\u4e3b\u8981\u7684\u4ee3\u7801\u6bb5\u5c31\u662f\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"stores")," \u5e76\u653e\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"Context"),"\uff0c\u4e4b\u540e\u7c7b\u7ec4\u4ef6\u548c\u51fd\u6570\u7ec4\u4ef6\u90fd\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observer"),"\u88c5\u9970\uff0c\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," \u62ff\u51fa\u8fd9\u4e2a\u5168\u5c40\u72b6\u6001\u4f7f\u7528\uff0c\u4e00\u65e6\u8fd9\u4e2a\u5168\u5c40\u72b6\u6001\u6709\u66f4\u65b0\uff0c\u76f8\u5173\u7684\u7ec4\u4ef6\u90fd\u4f1a\u88ab\u901a\u77e5\u5230\u5e76\u91cd\u65b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"render"),"\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u8fd8\u662f\u8981\u591a\u8bf4\u4e00\u53e5\uff0c\u4e0d\u8981\u628a\u5e94\u7528\u7684\u5168\u90e8\u72b6\u6001\u653e\u5728\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," \u91cc\u9762\uff0c\u8fd9\u6837\u72b6\u6001\u7ba1\u7406\u7684\u96be\u5ea6\u4f1a\u5927\u5927\u589e\u52a0\uff0c\u5185\u5b58\u8d44\u6e90\u7684\u91ca\u653e\u5f80\u5f80\u4e0d\u5230\u4f4d\uff0c\u5e94\u8be5\u4ea4\u7531\u5c40\u90e8\u7684\u72b6\u6001\u8ba9 ",(0,o.kt)("inlineCode",{parentName:"p"},"react"),"\u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u6765\u5e2e\u6211\u4eec\u505a\u8fd9\u4e9b\u4e8b\u60c5\uff0c\u5c24\u5176\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"React v16.8")," \u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Hooks"),"\u5c31\u662f\u4e0d\u9519\u7684\u9009\u62e9 \uff0c\u5e94\u8be5\u53ea\u628a\u4e00\u4e9b ",(0,o.kt)("strong",{parentName:"p"},"\u5173\u952e\u7684\u5168\u5c40\u53ef\u53d8\u72b6\u6001")," \u653e\u5165\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"p"},"Store"),"\uff0c\u6bd4\u5982\u7528\u6237\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"\u4e00\u4e9b\u6280\u5de7"},"\u4e00\u4e9b\u6280\u5de7"),(0,o.kt)("h4",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observable")," \u5305\u88c5\u4e00\u4e2a\u5bf9\u8c61\u6216\u5c5e\u6027\u65f6\uff0c\u4f1a\u9012\u5f52\u7684\u5c06\u5176\u8f6c\u6362\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"observable"),"\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," \u67e5\u770b\u8c03\u8bd5\u7684\u65f6\u5019\u5f88\u4e0d\u65b9\u4fbf\uff0c\u5145\u6ee1\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy"),"(\u5982\u679c\u7528\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Mobx 5.x"),")\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mobx.toJS")," \u6765\u5c06\u5176\u8f6c\u6362\u6210\u4e00\u4e2a\u666e\u901a\u7684\u5bf9\u8c61"),(0,o.kt)("h4",{id:"\u4f18\u5316"},"\u4f18\u5316"),(0,o.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\uff0c\u9012\u5f52\u5c06\u5c5e\u6027\u8f6c\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"observable")," \u7c92\u5ea6\u592a\u7ec6\u4e86\uff0c\u5f88\u6ca1\u5fc5\u8981\uff0c\u5176\u5b9e\u4e5f\u53ef\u4ee5\u51cf\u5c11\u8fd9\u90e8\u5206\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy")," \u5f00\u9500\uff0c\u65b9\u6cd5\u662f\u4f7f\u7528\u5bf9\u5c5e\u6027\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observable.ref"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"observable.shallow"),"\uff0c\u6216\u8005\u5bf9\u5c5e\u6027\u76f4\u63a5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"observable.object"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"observable.array"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"observable.map")," \u521b\u5efa\u65f6\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," ",(0,o.kt)("inlineCode",{parentName:"p"},"{deep:false}"),"\u6765\u8c03\u8282\u3002"),(0,o.kt)("h4",{id:"\u94fe\u5f0f\u53cd\u5e94"},"\u94fe\u5f0f\u53cd\u5e94"),(0,o.kt)("p",null,"\u4e00\u4e9b\u590d\u6742\u573a\u666f\u4e0b\uff0c\u8ba1\u7b97\u5c5e\u6027\u5f80\u5f80\u662f\u6839\u636e\u4f9d\u8d56\u5f02\u6b65\u83b7\u53d6\u7684\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"computed")," \u663e\u5f97\u4e0d\u5408\u9002\uff0c\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"observable")," \u5e76\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"reaction")," \u6765\u6267\u884c\u83b7\u53d6\u903b\u8f91\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport * as ReactDOM from "react-dom";\nimport { observable, reaction, autorun } from "mobx";\nimport { observer, Observer, useLocalStore } from "mobx-react";\n\nclass ChainDemo {\n  @observable a = 0;\n  @observable b = 0;\n  @observable c = 0;\n  @observable d = 0;\n\n  init = () => {\n    const disposer = [\n      reaction(\n        () => {\n          const val = this.a;\n          return new Promise<number>(res =>\n            setTimeout(() => res(val + 1), 100)\n          );\n        },\n        async p => {\n          this.b = await p;\n        }\n      ),\n      reaction(\n        () => {\n          const val = this.b;\n          return new Promise<number>(res =>\n            setTimeout(() => res(val + 1), 100)\n          );\n        },\n        async p => {\n          this.c = await p;\n        }\n      ),\n      reaction(\n        () => {\n          const val = this.c;\n          return new Promise<number>(res =>\n            setTimeout(() => res(val + 1), 100)\n          );\n        },\n        async p => {\n          this.d = await p;\n        }\n      )\n    ];\n\n    return () => disposer.forEach(d=>d());\n  };\n}\n\nconst chain = new ChainDemo();\nchain.init();\n\nautorun(() => {\n  console.log(chain.a, chain.b, chain.c, chain.d);\n});\n\nchain.a = 2;\n\n/**\n * 0 0 0 0\n * 2 0 0 0\n * 2 3 0 0\n * 2 3 4 0\n * 2 3 4 5\n * /\n')),(0,o.kt)("p",null,"\u4e0a\u4f8b\u4e2d\u4f7f\u7528\u4e86\u51e0\u4e2a\u5ef6\u8fdf\u8ba1\u7b97\u53d6\u503c\uff0c\u72b6\u6001\u6839\u636e\u6211\u4eec\u63cf\u8ff0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," \u94fe\u9010\u6b65\u66f4\u65b0\uff0c\u53d8\u5316\u5feb\u65f6\u53ef\u4ee5\u914d\u5408 ",(0,o.kt)("inlineCode",{parentName:"p"},"flow")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"debounce"),"\u505a\u66f4\u52a0\u7ec6\u7c92\u5ea6\uff0c\u53ef\u63a7\u7684\u6027\u80fd\u4f18\u5316\u3002"),(0,o.kt)("h4",{id:"\u7531-react-\u751f\u547d\u5468\u671f\u7ba1\u7406\u5c40\u90e8\u7684-observable-\u72b6\u6001"},"\u7531 ",(0,o.kt)("inlineCode",{parentName:"h4"},"react")," \u751f\u547d\u5468\u671f\u7ba1\u7406\u5c40\u90e8\u7684 ",(0,o.kt)("inlineCode",{parentName:"h4"},"observable")," \u72b6\u6001"),(0,o.kt)("p",null,"\u63a5\u7740\u4e0a\u9762\u7684\u4ee3\u7801\u7ee7\u7eed\u770b\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u4e00\u7cfb\u5217\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"reaction")," \u8fd4\u56de\u4e86\u5f88\u591a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"disposer"),"\u7528\u4e8e\u9500\u6bc1\u526f\u4f5c\u7528\uff0c\u6240\u4ee5\u628a\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," \u76f4\u63a5\u653e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u53bb\u6267\u884c\u7b80\u76f4\u662f\u5b8c\u7f8e\uff0c\u5229\u7528\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u5b8c\u6210\u72b6\u6001\u7684\u521d\u59cb\u5316\u548c\u9500\u6bc1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const Comp = observer(() => {\n  const [state] = useState(() => new ChainDemo());\n  useEffect(state.init, [state]);\n});\n")))}m.isMDXComponent=!0}}]);