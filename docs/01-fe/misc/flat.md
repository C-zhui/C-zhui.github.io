---
sidebar_position: 1
---

# Flatten Array

⭐️突发奇想，写下 flatten 的几种写法，层层递进，达到最优，希望对大家的工作和面试有帮助。


第一种写法，使用 reduce，内部递归，估计性能不咋地。
```js
// reduce 递归
function flat(arr) {
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flat(b) : b), []);
}
```

第二种写法，直接递归，同上性能稍好一点，但也不咋地。
```js
function flat(arr) {
  return Array.isArray(arr) ? [].concat(...arr.map(flat)) : arr;
}
```


第三种写法，迭代，只要有一个元素是数组，就拍平一层，性能一般，与嵌套层数挂钩。

```js
function flat(arr){ 
    while(arr.some(Array.isArray(item)){ 
        arr = [].concat(...arr); 
    } 
    return arr;
}
```

第四种写法，内部 dfs，收集结果，性能尚可。
```js
function flat(arr) {
  const res = [];
  const dfs = (ar) => {
    if (Array.isArray(ar)) 
        ar.forEach(dfs);
    else res.push(ar);
  };
  dfs(arr);
  return res;
}
```

第五种写法，用迭代模拟 dfs，性能最佳。
```js
function flat(arr) {
  const res = [],
    st = arr.slice().reverse();
  while (st.length) {
    const item = st.pop();
    if (Array.isArray(item)) {
      st.push(...item.slice().reverse());
    } else res.push(item);
  }
  return res;
}
```