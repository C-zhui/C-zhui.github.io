"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[583],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?t.createElement(d,a(a({ref:n},c),{},{components:r})):t.createElement(d,a({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6366:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={sidebar_position:1},u="\u4f18\u5148\u961f\u5217",p={unversionedId:"ds/priorityQueue",id:"ds/priorityQueue",title:"\u4f18\u5148\u961f\u5217",description:"1. \u57fa\u4e8e\u6570\u7ec4\uff0c\u6982\u5ff5\u4e0a\u662f\u5b8c\u5168\u4e8c\u53c9\u6811",source:"@site/docs/04-ds/priorityQueue.md",sourceDirName:"04-ds",slug:"/ds/priorityQueue",permalink:"/docs/ds/priorityQueue",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u603b\u7ed3\u4e00\u4e0b\u51e0\u79cd\u6392\u5e8f\u7b97\u6cd5",permalink:"/docs/algo/sort"},next:{title:"Git",permalink:"/docs/general/git"}},c=[],s={toc:c};function f(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f18\u5148\u961f\u5217"},"\u4f18\u5148\u961f\u5217"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6570\u7ec4\uff0c\u6982\u5ff5\u4e0a\u662f\u5b8c\u5168\u4e8c\u53c9\u6811"),(0,o.kt)("li",{parentName:"ol"},"\u4e24\u4e2a\u57fa\u672c\u64cd\u4f5c\uff0c\u4e0a\u6d6e\u3001\u4e0b\u6c89\u3002\u4e0a\u6d6e\u5c06\u4f18\u5148\u7ea7\u9ad8\u7684\u8282\u70b9\u5411\u4e0a\u7f6e\u6362\uff0c\u4e0b\u6c89\u5c06\u8282\u70b9\u7684\u5b50\u8282\u70b9\u4e2d\u4f18\u5148\u7ea7\u9ad8\u7684\u4e0e\u5f53\u524d\u8282\u70b9\u7f6e\u6362"),(0,o.kt)("li",{parentName:"ol"},"\u5148\u901a\u8fc7\u4ece\u540e\u5f80\u524d\u904d\u5386\u5e76\u4e0b\u6c89\u521d\u59cb\u5316\u5806"),(0,o.kt)("li",{parentName:"ol"},"push \u65f6\uff0c\u653e\u5165\u6570\u7ec4\u672b\u5c3e\uff0c\u5e76\u6267\u884c\u4e0a\u6d6e"),(0,o.kt)("li",{parentName:"ol"},"pop \u65f6\uff0c\u62ff\u51fa\u6570\u7ec4\u9996\u4e2a\u5143\u7d20\uff0c\u5c06\u6570\u7ec4\u672b\u5c3e\u5143\u7d20\u6362\u5230\u6570\u7ec4\u9996\u4f4d\uff0c\u5e76\u6267\u884c\u4e0b\u6c89")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\nexport function PriorityQueue<T>(\n  fstTop: (a: T, b: T) => boolean,\n  initArr: T[] = []\n) {\n  const arr = initArr.concat()\n\n  const up = (i: number) => {\n    if (i === 0) return\n    const p = (i - 1) >> 2\n    if (fstTop(arr[p], arr[i])) {\n      return\n    }\n    ;[arr[p], arr[i]] = [arr[i], arr[p]]\n    up(p)\n  }\n\n  const down = (i: number) => {\n    const left = 2 * i + 1\n    const right = 2 * i + 2\n    let max = i\n    if (left < arr.length && fstTop(arr[left], arr[max])) max = left\n    if (right < arr.length && fstTop(arr[right], arr[max])) max = right\n    if (max === i) {\n      return\n    }\n    ;[arr[max], arr[i]] = [arr[i], arr[max]]\n    down(max) // tail recursive call\n  }\n\n  let i = arr.length >> 2\n  while (i > 0) down(i--) // \u9020\u5806\n\n  return {\n    len() {\n      return arr.length\n    },\n    push(item: T) {\n      arr.push(item)\n      up(this.len() - 1)\n    },\n    peek() {\n      return arr[0]\n    },\n    pop() {\n      if (arr.length > 0) {\n        const out = this.peek()\n        const last = arr.pop()\n        if (arr.length) {\n          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n          arr[0] = last!\n          down(0)\n        }\n        return out\n      } else return null\n    },\n  }\n}\n\n")))}f.isMDXComponent=!0}}]);