---
title: for of 底层原理
createTime: 2024/11/07 14:39:25
permalink: /article/ehcdghal/
tags: [js高级, 原理]
---

> `for...of` 循环本质上是通过调用一个可迭代对象的 `[Symbol.iterator] ` 方法获取迭代器，然后循环调用该迭代器的 `next()` 方法，直到 `next()` 方法返回的对象中的 `done` 属性为 `true` 为止。这种机制使得 `for...of` 循环可以遍历任何实现了迭代协议的对象，包括数组、字符串、Map、Set 等。

具体来说，可以总结为以下几个步骤：

1. 获取迭代器：通过调用可迭代对象上的 `[Symbol.iterator]` 方法获取一个迭代器。
2. 循环调用 `next()` 方法：每次循环调用迭代器的 `next()` 方法。
3. 检查 `done` 属性：如果 `next()` 方法返回的对象中的 `done` 属性为 `false`，则继续循环；如果为 `true`，则停止循环。

下面是一个具体的示例来说明这个过程：

```javascript
const arr = [1, 2, 3];

// 1. 获取迭代器
const iterator = arr[Symbol.iterator]();

// 2. 循环调用 next() 方法
let result = iterator.next();
while (!result.done) {
  console.log(result.value); // 输出当前元素
  result = iterator.next(); // 获取下一个元素
}

// 输出结果：
// 1
// 2
// 3
```

for...of 循环内部也是按照上述逻辑工作的。具体来说：

```javascript
const arr = [1, 2, 3];

// for...of 循环
for (const value of arr) {
  console.log(value); // 输出当前元素
}

// 等价于：
const iterator = arr[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  console.log(result.value); // 输出当前元素
  result = iterator.next(); // 获取下一个元素
}
```
