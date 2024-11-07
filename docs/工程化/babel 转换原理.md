---
title: babel 转换原理
createTime: 2024/11/07 14:35:04
permalink: /article/071wkx26/
tags: [工程化, babel]
---

Babel 主要用来将一些现代或者实验性的 JavaScript 语法转换为兼容性更强的语法。比如将 es 6 或更新的语法转换为 es 5 语法以便于兼容更多浏览器。其核心原理主要如下：

## 解析 （Parsing）

Babel 首先会对源代码进行解析。将 JS 源码通过 @babel/parser 解析器进行词法分析，语法分析然后转换成 AST 抽象语法树。

## 转换（Transformation）

得到 AST 后，Babel 会遍历这个 AST，对生成的 AST 树通过预先定义好的插件（plugins）和预设（presets）对 AST 树进行转换。例如，一个插件可能会将箭头函数转换为普通函数，或者将新的 JavaScript 语法特性转换为向后兼容的语法。这个转换过程可以看作是对 AST 进行“重写”或“修改”。

## 生成（Generation）

最后，Babel 会通过 @babel/generator 生成器（generator）将修改后的 AST 树重新生成源代码，这个新的源代码字符串通常是向后兼容的，可以在旧版本的 JavaScript 环境中运行。
