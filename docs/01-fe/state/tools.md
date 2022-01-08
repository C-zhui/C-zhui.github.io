---
sidebar_position: 1
---

# React状态管理
## 为什么要写这篇文章
状态管理是一个老生常谈的问题，但是在 react 的框架中，这个问题似乎被「神话」了。
 
相信多数人在学习 react 的时候，刷完官方文档，emmmm，react 就是不断的撸组件，层层组装成一个页面，so easy 啦。但是当你真正接手祖传代码开始开发的时候，发现不是那么回事。随着组件层级的增多、状态逐渐复杂，组件状态的下传、回调，副作用的状态引用问题，进一步的重构等等，只会不断地消磨你继续写 react 的勇气，原来 react 并非无所不能，它只是提供了从状态到视图渲染的能力。你开始寻找解决方案，发现需要给项目加上状态管理，这时候你迷茫了。
 
react 社区状态管理方案很多，各有各的特点，可维护性、开发效率、运行效率都有一些差异。在实际的开发过程中，说哪一种方案最好，想要一个 all in one 之类的（虽然我很想要），是没有意义的，因为确实每种方案、工具都有可取之处，需要依照场景做出选择、组合。
 
本文章作为个人对状态管理工具的整理、总结，其中会有个人主观的一些见解和看法，本文作为一个概览，列举一些常用的方案、工具，后续或许会补充实践文章，希望对大家能有所帮助。
 
## 前端运行时基本框架
https://excalidraw.com/#json=_-7wZ-atTtetIPKbKmsoh,4Ktt42PCLG0ceNGnTetIgw

## react & 状态 & 副作用
react 是状态驱动的，状态决定了视图结构；状态变化，会自动通知组件渲染任务。
1. UI = render(state)
2. nextState = reducer(state, action)
 
副作用是对状态变化的监听，并触发的一段可能引起其他状态变化的逻辑，这是一种直观上的理解。
从数学的角度上，副作用就像是不动点迭代一样，副作用的意义，就是不断迭代状态，达到收敛、平衡条件。比喻起来，就是往平静的水面扔一颗石子，水面荡漾几个来回，最终归于平静。
 
## 生命周期？
同事问过我：你还记得几个 react 生命周期吗？ 
我：生命周期？几年没用过的东西了。
是的，react 实际上不需要生命周期。我其实不太想谈论这个问题。
生命周期其实专属于类组件的用法，是一种十分粗鲁的划分方式，也是不合理的。
奈何官方文档上来就给人灌输类组件生命周期 balabala 的东西，甚至把它放在所谓的 main concept 里面。
react 是状态驱动的，应该关注状态本身，而不是 react 组件的执行阶段。
 
面向未来、拥抱函数组件、拥抱 hook，好好理解 effect 。
群友提供：https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/
 
 
## 组件状态
**原生支持**
1. 类组件的 state 
2. 函数组件的 useState、useRef、useReducer
 
**自定义 hook**
1. 如果想要在函数组件里面像类组件一样操作state，使用 react-use(或者 hooks)中的useSetState
2. 如果想要避免 callback 里面获取过期的 state，使用 react-use 中的 useGetSet / useGetSetState
3. ... ... 无法穷举，总之 react-use / ahooks/ @byted/hooks 都是不错的，有很多好用的工具，可以整体过一遍
 
另外一些状态管理库支持 localStore，可以将状态和操作逻辑内聚
比如 reduck 的 useLocalModel、mobx 的 useLocalObservable
 
**表单状态**
表单状态其实就是带有 动态生成规则和校验规则的状态，取决于具体的业务逻辑，要多复杂有多复杂。自行体会。
方案：antd form、formik、formily
 
**其他**
1. 结合 @vue/reactivity 的 reactivue 👍🏻
2. GUI debug 控件 https://github.com/pmndrs/leva 
 
编不下去了，组件状态整体还是挺简单的，选择也很多...
 
## 信道 / 管道流
并不能直接作为状态管理，但是可用于信息传递、加工，了解这两个应该够用
1. eventemitter3：Nodejs 的 eventemitter 在浏览器的实现
2. rxjs：强大的事件流处理工具，FRP ，当你需要处理、转换、组合事件流的时候，rxjs 一定是很好的助力
 
## 全局状态
**通用**
1. redux ：唯一数据源，基于纯函数（reducer）生成新状态 nextState = reducer(state, action) ，向 store 发送 action 触发状态更新。
  1. 副作用全靠中间件支持 (redux-saga、redux-thunk，redux-observable)
  2. 模板写到怀疑人生 (redux toolkit、dva 等可以简化)
  3. 结合 react-redux、reselect 桥接 react 
2. mobx ：基于属性访问劫持（类似 vue ）的响应式方案可以很轻松地做精细的性能优化，但本身过于自由，使用 mobx-react 桥接 react
3. unstated-next：基于原生 hook + context
4. recoil：与 redux 的中心化状态不同，它是原子化的共享状态方案
 
 
**服务端状态管理**
fetch、cache
1. apollo：GraphQL 客户端，严格定义业务数据模型，按需获取
2. react-query：含请求、缓存、重试，实际上可以完全不限于请求，它是一个异步状态管理器 
 
 
## URL状态
react-router 实际上也是一种特殊的全局状态管理。
1. 路径参数 /post/:id ，用于定位、选择具体的页面、组件
2. SearchString 参数 ?a=1&b=hello，用于传递更多参数，通常用于页面上表单的初始化，v6 提供了操作 SearchString 的 hook，低版本需要自己封装
 
 
## 状态机
状态机其实都是 nextState = map(state, event)
1. redux：redux 实际上就是个状态机，严格定义了状态树结构，但状态变化没有严格定义，所以对于复杂的业务逻辑，很难使用 redux 描述清楚
2. xstate：有限状态机，xstate 将状态分成了状态机状态和附加的 context data。给状态迁移添加了条件，以 JSON 描述状态之间跳转逻辑，可以结合官方提供的可视化工具查看状态图，有助于理清状态机的变化逻辑
 
## 总结
本文根据我个人的理解对 react 状态管理做了一些分类，并列举了其中一些具体的常用的状态管理工具，简述了各种工具的特点，就不提供具体的示例了，各位同学可以根据业务场景选择合适的。
 
