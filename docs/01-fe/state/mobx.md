---
sidebar_position: 3
---

# Mobx使用

前端的场景越来越复杂，现阶段，新项目都会采用`Vue`、`Angular`、`React`之一来管理数据到视图的映射关系，它们都有自己管理组件状态、生命周期的独特机制，但是在复杂场景下，还是会采用像`Vuex`、`Ngrx`、`Redux`这样的状态容器来管理**重要的全局状态**。

我工作最主要用的还是`React`，在项目中，我使用`Mobx`来作为`React`状态管理的补充，加快编码的效率，本文主要记录一些`Mobx`的用法。

## 介绍 📚

`Mobx`是一个状态管理库，在状态依赖的描述上面有独特的优势，就像是在写公式一样，它能让开发者更简洁的声明描述属性状态的依赖关系，自动的完成相关依赖的更新、引起副作用。

## 用法 🔧

`Mobx`的使用很灵活，可以将`observable`的特性直接作用在一个对象中，也可以声明在类中，甚至直接写入`React`组件类的属性中（在`Mobx`的视角中与类没有区别）。

### 直接装饰对象

直接使用 `observable` 包装的对象，会获得`Mobx`给予的能力。

```ts
import * as mobx from "mobx";

// 声明一个对象是 observable
const myObj = mobx.observable({
  a: 1,
  b: 3,
  get c() {
    return this.b * 2;
  }
});

// 注册一个副作用函数
mobx.autorun(() => {
  console.log("a", myObj.a);
});
mobx.autorun(() => {
  console.log("c", myObj.c);
});
// 改变这个对象的属性
myObj.a = false;
myObj.a = "hello";
myObj.b = 4;

/** 依次输出
a 1
c 6
a false
a hello 
c 8
*/
```

已经可以看出`Mobx`的一些特性了

1. 将对象转变为可观察。
2. 对象属性发生变化时，注册的副作用函数自动触发。
3. 与副作用无关的属性发生变化时，副作用不会触发，上例的`myObj.b`，变化时不会触发只与`a`有关的副作用。
4. `c`这个`getter`属性会被`autorun`副作用记录到关于`b`的依赖，当`b`发生变化，关联`c`的副作用也会被触发。

_知道以上的规则，就可以直接在项目中尝试它了_。

### 在类中声明其属性为 `observable`

```ts
import { observable, computed, action, autorun, flow } from "mobx";

// 使用属性装饰器声明
class SimpleStore {
  @observable a = 1;
  @observable c = 2;

  @computed get b() {
    return this.a * this.a + 1;
  }
  @action setA(a) {
    this.a = a;
  }
  asyncUpdate = flow(function*() {
    const next1 = yield new Promise(res => setTimeout(() => res(3), 1000));
    this.a = next1;
    const next2 = yield new Promise(res => setTimeout(() => res(4), 1000));
    this.a = next2;
  });
}

const store = new SimpleStore();

autorun(() => {
  console.log(store.a);
});

store.setA(2);
store.asyncUpdate();
/** 依次输出
1
2   // setA(2)
3   // asyncUpdate()   1s
4   // asyncUpdate()   2s
*/
```

从类的`observable`声明中又能看出一些东西来：

1. 需要使用装饰器的语法来快速的声明`Mobx`相关的功能，相比直接使用对象，需要输入的工作量会大一些，但是可以对其运作有更细粒度的控制
2. 实例化的类对象也拥有了`observable`的能力，在字段上加上`@observable`，该字段就会被副作用记录到。
3. `@action`是用来声明改变`@observable`字段的方法。如果开启了以下配置，将强制使用`@action`方法来修改属性，否则会报错。

```
mobx.configure({
    enforceActions: true
});
```

4. `flow`是 `Mobx`提供用于修饰异步`action`的方法。其实就是一个`async/await`方法的`Generator`实现，最棒的特性就是这个方法返回一个 Promise，是可以取消的。

### 在 `react` 组件中使用 `Mobx`

因为 `react` 组件需要监听 `observable` 的变化， `render` 的逻辑其实就是副作用，使用 `autorun` 的正确方式是引入 `mobx-react` 库。导入 `observer` 这个高阶组件，来自动完成 `autorun` 的注册与销毁。

#### 类组件中

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer, Observer } from "mobx-react";

@observer // 高阶组件，让react组件的render在mobx的autorun上下文中运行
class Counter extends React.Component {
  // 可以直接使用 observable 装饰使用，代替 react 自己的 state，更新属性比setState要直接一些
  @observable count = 0;
  @observable unused = 0;

  handleInc = () => this.count++;
  handleDec = () => this.unused--;

  render() {
    console.log("render");
    return (
      <div>
        {this.count}
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }
}
```

上例中，对 `count` 的更新会强制组件更新，对 `unused` 的更新不会导致重新渲染，因为 `render` 仅仅声明了对 `count` 的使用， `render`又被高阶组件用 `autorun` 包装过，`autorun` 其实有返回值，用于销毁这个副作用，不过被 `react`的 `unmount` 生命周期自动销毁了。

#### 函数组件中

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer, Observer, useLocalStore } from "mobx-react";

// 使用 observer 直接包装函数组件
const Counter = observer(() => {
  // 使用 useLocalStore 创建一个局部的 observable
  const local = useLocalStore(() => ({
    count: 0,
    unused: 0,
    handleInc() {
      this.count++;
    },
    handleDec() {
      this.unused--;
    }
  }));
  console.log("render");
  return (
    <div>
      {local.count}
      <button onClick={() => local.handleInc()}>+</button>
      <button onClick={() => local.handleDec()}>-</button>
    </div>
  );
});
```

**注意**：使用 `observer` ： 这个 `autorun` 的上下文仅仅用于当前 `render` 直接访问的属性，如果对 `observable` 属性的访问发生在子元素的 `props` 且为函数时，需要手动使用 `<Observer render={()=><JSX>...</JSX>}/>` 将其放入新的 `autorun` 上下文中，否则更新不会生效。

#### 外部的 `observable` 对象

可以直接在外面创建 `observable` 对象或类，再用 `observer` 消费它。这里介绍一下使用全局 `Store` 的方式。

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer, Observer, useLocalStore } from "mobx-react";

const store1 = observable({
  a: 1,
  b: "hello",
  incA() {
    this.a++;
  },
  repeatB() {
    this.b += this.b;
  },
  asyncIncA() {
    setTimeout(() => {
      this.a++;
    }, 1000);
  }
});

// 主要代码
//// {
const stores = {
  store1
};

type TStore = typeof stores;
const storeCtx = React.createContext<TStore>(stores);

const StoreProvider = ({ children }) => (
  <storeCtx.Provider value={stores}>{children}</storeCtx.Provider>
);

const useSore = () => React.useContext(storeCtx);

//// }
// 主要代码

const UsingStore = observer(() => {
  const { store1 } = useSore();

  return (
    <div>
      <div>a:{store1.a}</div>
      <div>b:{store1.b}</div>
      <button onClick={() => store1.incA()}>incA</button>
      <button onClick={() => store1.asyncIncA()}>asyncIncA</button>
      <button onClick={() => store1.repeatB()}>repeatB</button>
    </div>
  );
});

@observer
class UsingStoreInClass extends React.Component {
  static contextType = storeCtx;

  render() {
    const { store1 } = this.context as TStore;
    return (
      <div>
        <div>a:{store1.a}</div>
        <div>b:{store1.b}</div>
        <button onClick={() => store1.incA()}>incA</button>
        <button onClick={() => store1.repeatB()}>repeatB</button>
      </div>
    );
  }
}

const App = () => {
  return (
    <>
      <StoreProvider>
        <UsingStore />
        <br />
        <UsingStoreInClass />
        <br />
      </StoreProvider>
    </>
  );
};
```

主要的代码段就是创建一个 `stores` 并放入 `Context`，之后类组件和函数组件都用 `observer`装饰，从 `Context` 拿出这个全局状态使用，一旦这个全局状态有更新，相关的组件都会被通知到并重新 `render`。

这里还是要多说一句，不要把应用的全部状态放在全局 `Store` 里面，这样状态管理的难度会大大增加，内存资源的释放往往不到位，应该交由局部的状态让 `react`的生命周期函数来帮我们做这些事情，尤其是 `React v16.8` 提供的 `Hooks`就是不错的选择 ，应该只把一些 **关键的全局可变状态** 放入全局 `Store`，比如用户信息。

### 一些技巧

#### 调试

当使用 `observable` 包装一个对象或属性时，会递归的将其转换成 `observable`，在 `console.log` 查看调试的时候很不方便，充满了 `Proxy`(如果用的是 `Mobx 5.x`)，可以使用 `mobx.toJS` 来将其转换成一个普通的对象

#### 优化

有些时候，递归将属性转成 `observable` 粒度太细了，很没必要，其实也可以减少这部分的 `Proxy` 开销，方法是使用对属性使用 `observable.ref`、`observable.shallow`，或者对属性直接用 `observable.object`、`observable.array`、`observable.map` 创建时传入 `option` `{deep:false}`来调节。

#### 链式反应

一些复杂场景下，计算属性往往是根据依赖异步获取的，使用 `computed` 显得不合适，可以使用多个 `observable` 并用 `reaction` 来执行获取逻辑。

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { observable, reaction, autorun } from "mobx";
import { observer, Observer, useLocalStore } from "mobx-react";

class ChainDemo {
  @observable a = 0;
  @observable b = 0;
  @observable c = 0;
  @observable d = 0;

  init = () => {
    const disposer = [
      reaction(
        () => {
          const val = this.a;
          return new Promise<number>(res =>
            setTimeout(() => res(val + 1), 100)
          );
        },
        async p => {
          this.b = await p;
        }
      ),
      reaction(
        () => {
          const val = this.b;
          return new Promise<number>(res =>
            setTimeout(() => res(val + 1), 100)
          );
        },
        async p => {
          this.c = await p;
        }
      ),
      reaction(
        () => {
          const val = this.c;
          return new Promise<number>(res =>
            setTimeout(() => res(val + 1), 100)
          );
        },
        async p => {
          this.d = await p;
        }
      )
    ];

    return () => disposer.forEach(d=>d());
  };
}

const chain = new ChainDemo();
chain.init();

autorun(() => {
  console.log(chain.a, chain.b, chain.c, chain.d);
});

chain.a = 2;

/**
 * 0 0 0 0
 * 2 0 0 0
 * 2 3 0 0
 * 2 3 4 0
 * 2 3 4 5
 * /
```

上例中使用了几个延迟计算取值，状态根据我们描述的 `react` 链逐步更新，变化快时可以配合 `flow` 和 `debounce`做更加细粒度，可控的性能优化。

#### 由 `react` 生命周期管理局部的 `observable` 状态

接着上面的代码继续看这个例子，一系列的 `reaction` 返回了很多的 `disposer`用于销毁副作用，所以把这个 `init` 直接放在 `useEffect` 去执行简直是完美，利用组件的生命周期完成状态的初始化和销毁。

```tsx
const Comp = observer(() => {
  const [state] = useState(() => new ChainDemo());
  useEffect(state.init, [state]);
});
```
