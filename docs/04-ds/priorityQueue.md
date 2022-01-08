---
sidebar_position: 1
---

# 优先队列

1. 基于数组，概念上是完全二叉树
2. 两个基本操作，上浮、下沉。上浮将优先级高的节点向上置换，下沉将节点的子节点中优先级高的与当前节点置换
3. 先通过从后往前遍历并下沉初始化堆
4. push 时，放入数组末尾，并执行上浮
5. pop 时，拿出数组首个元素，将数组末尾元素换到数组首位，并执行下沉

```ts
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function PriorityQueue<T>(
  fstTop: (a: T, b: T) => boolean,
  initArr: T[] = []
) {
  const arr = initArr.concat()

  const up = (i: number) => {
    if (i === 0) return
    const p = (i - 1) >> 2
    if (fstTop(arr[p], arr[i])) {
      return
    }
    ;[arr[p], arr[i]] = [arr[i], arr[p]]
    up(p)
  }

  const down = (i: number) => {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let max = i
    if (left < arr.length && fstTop(arr[left], arr[max])) max = left
    if (right < arr.length && fstTop(arr[right], arr[max])) max = right
    if (max === i) {
      return
    }
    ;[arr[max], arr[i]] = [arr[i], arr[max]]
    down(max) // tail recursive call
  }

  let i = arr.length >> 2
  while (i > 0) down(i--) // 造堆

  return {
    len() {
      return arr.length
    },
    push(item: T) {
      arr.push(item)
      up(this.len() - 1)
    },
    peek() {
      return arr[0]
    },
    pop() {
      if (arr.length > 0) {
        const out = this.peek()
        const last = arr.pop()
        if (arr.length) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          arr[0] = last!
          down(0)
        }
        return out
      } else return null
    },
  }
}

```