---
sidebar_position: 1
---

# 总结一下几种排序算法

## O(n²)时间复杂度排序算法
1. 插入排序

外循环保证第 i-1 次循环后前 i 个数有序。
内循环保证将第 j 个数被插入到正确的位置。

``` cpp
#include <functional>
using namespace std;

template <typename T, class Compare>
void insertionSort(T begin,T end,Compare cmp){
    for(T i = begin+1;i!=end;i++){
        auto temp = *i;
        T  j = i-1;
        for(;j>=begin;j--){
            if(cmp(temp,*j))
                *(j+1) = *j;
            else
                break;
        }
        *(j+1) = temp;
    }
}

template <typename T>
void insertionSort(T begin,T end){
    insertionSort(begin,end,less_equal<decltype(*begin)>());
}
```

2. 冒泡排序

如其名，每次在未排序的部分将一个最值推到已排序的一端。

``` cpp
template <typename T, class Compare>
void bubbleSort(T  begin,T  end,Compare cmp){
    for(T i = begin,e = end-1,e2 = end -1;i != e; i++){
        for(T j = begin;j != e2;j++){
            if(cmp(*j,*(j+1)));
            else swap(*j,*(j+1));
        }
        e2--;
    }
}

template <typename T>
void bubbleSort(T  begin,T  end){
    bubbleSort(begin,end,less_equal<decltype(*begin)>());
}
```

3. 选择排序

类似冒泡但是不是每次比较都交换，而是在未排序的部分选择一个最值直接交换到已排序的一端。

``` cpp
template <typename T, class Compare>
void selectionSort(T  begin,T  end,Compare cmp){
    for(T i = begin;i!=end;i++){
        T  k = i;
        for(T  j=i;j!=end;j++){
            if(cmp(*j,*k))
                k = j;
        }
        swap(*i,*k);
    }
}

template <typename T>
void selectionSort(T begin,T  end){
    selectionSort(begin,end,less_equal<decltype(*begin)>());
}
```

## O(nlogn)时间复杂度排序算法
1. 快速排序(填坑式)

① 如果区间大小大于等于2，对一区间已区间内的某一个值划分成两个区间。

② 再对这两个区间递归的执行 ①

``` cpp
template <typename T, class Compare>
void __qsort(T  low,T  high,Compare cmp){
    if (low>=high)return;
    auto pivot = *low;
    T   l = low,
         h = high;
    while(l<h){
        while(l<h&&cmp(pivot,*h))h--;
        *l = *h;
        while(l<h&&cmp(*l,pivot))l++;
        *h = *l;
    }
    *l = pivot;
    __qsort(low,l-1,cmp);
    __qsort(l+1,high,cmp);
}

template <typename T, class Compare>
void qsort(T begin,T  end,Compare cmp){
    __qsort(begin,end-1,cmp);
}

template <typename T>
void qsort(T  begin,T  end){
    qsort(begin,end,less_equal<decltype(*begin)>());
}
```

2. 归并排序(自底向上)

对于两个已排序的序列，将它们合并成为一个有序序列是线性复杂度。
因此我们只要将一整个序列切分成小序列，逐步增加序列长度，相邻序列两两合并。
最后就可以得到有序序列
``` cpp
template <typename T, class Compare>
void __merge(T  afrom,T  ato,T  bfrom,T  bto,T  target,Compare cmp){
    while(afrom<=ato&&bfrom<=bto){
        if(cmp(*afrom,*bfrom)){
            *target = *afrom;
            afrom++;
        }else {
            *target = *bfrom;
            bfrom++;
        }
        target++;
    }
    while(afrom<=ato){
        *target = *afrom;
        afrom++; target++;
    }
    while(bfrom<=bto){
        *target = *bfrom;
        bfrom++; target++;
    }
}

template <typename T, class Compare>
void mergeSort(T  begin,T  end,Compare cmp){
    T  ord = begin;
    size_t size = end - begin;
    auto t = *begin;
    auto aux = new decltype(t)[size];
    auto aux2 = new decltype(t)[size];
    unsigned j = 0;
    for(T i = begin;i!=end;i++)
        aux[j++] = *i;

    for(unsigned i = 1;i<size;i+=i){
        auto *k = aux2;
        for(unsigned j = 0;j<size;j+=i+i,k+=i+i){
            unsigned ato = j + i - 1;
            if(ato>=size)ato = size - 1;
            unsigned  bto = j + i + i - 1;
            if(bto>=size)bto = size - 1;
            __merge(aux+j,aux+ato,aux+ato+1,aux+bto,k,cmp);
        }
        swap(aux,aux2);
    }
    for(unsigned i = 0;i<size;i++,begin++)
        *begin = aux[i];

   delete []aux;delete []aux2;
}

template <typename T>
void mergeSort(T  begin,T  end){
    mergeSort(begin,end,less_equal<decltype(*begin)>());
}
```

3. 堆排序

利用堆结构进行动态排序的方法。堆是完全二叉树，保证了在任意时刻全部父节点的值大于（或小于）两个子节点。根节点就是一个最大（小）值，每次取出根节点，就再将最后一个节点放到根节点下沉保证堆的特性。连续地取出根节点就可以得到排序好的序列。

```
template<typename T, class Compare>
void sink(T& arr,unsigned i,unsigned size,const Compare& cmp){
    unsigned j = i+i,
             k = i;
    while(j<=size){
        if(cmp(arr[k],arr[j]))
            k = j;
        j++;
        if(j<=size&&cmp(arr[k],arr[j]))
            k = j;
        if(i!=k){
            swap(arr[k],arr[i]);
            i = k;
            j = k+k;
        }
        else break;
    }
}

template<typename T, class Compare>
void heapSort(T& arr,unsigned size,const Compare& cmp){
    size--;
    for(unsigned i = size/2;i!=0;i--)
        sink(arr,i,size,cmp);
    while(size!=0){
        if(cmp(arr[1],arr[0]))
            swap(arr[0],arr[1]);
        swap(arr[size--],arr[1]);
        sink(arr,1,size,cmp);
    }
}

template<typename T>
void heapSort(T &arr,unsigned size){
   heapSort(arr,size,less_equal<decltype(arr[0])>());
}

```

上述的算法中,堆排序必须以```  heapSort(arr,sz);```，其中arr是可以进行随机下标访问操作的对象，即原生数组、vector、array类型,```sz```是大小。

其余的都可以使用形如```XXXsort.(begin(sequence),end(sequence))```
或
```XXXsort.(begin(sequence),end(sequence),[](const eletype& a,const eletype&b){return a.xx<b.xx})```的标准库sort形式。








