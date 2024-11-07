---
title: node.js 中 exports 与 module.exports 的区别
createTime: 2024/11/07 14:35:04
permalink: /article/v4bgab27/
tags: [工程化, nodejs]
---

1. Node. Js 中最终导出的其实是 module. Exports 所指向的对象
2. Exports 本质上是一个指向 module. Exports 对象的引用
3. 当 Exports 重新赋值另一个对象后，exports 导出就不再生效了
