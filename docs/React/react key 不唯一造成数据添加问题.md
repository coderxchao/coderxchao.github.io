---
title: react key 不唯一造成数据添加问题
createTime: 2024/11/07 14:43:23
permalink: /article/iz20k7vz/
tags: [开发问题]
---

> 问题描述，在 react 开发中，使用
>
> setRfidList((pre) => [{ code: material }, ...pre]);
> setRfidList((pre) => [...pre, { code: material }]);
>
> 发现第二行的代码能正常添加一条数据进去，但是第一行添加的时候会在添加数据的上方再加上两条额外的之前的测试数据

经排查发现是手动添加测试数据时，rfidList 添加了 3 条一样的数据，造成 key 相同造成的。将测试数据添加成不一样的数据，保证 key 唯一就没问题了
