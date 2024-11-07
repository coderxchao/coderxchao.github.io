---
title: webgl 对于超大图片无法渲染问题
createTime: 2024/11/07 14:44:46
permalink: /article/h9d6c654/
tags: [webgl, 性能优化, 开发问题]
---

> 使用 pixi. Js 绘制地图的时候，后端给了一张超级大尺寸（17000\*4700）的图片，导致 pixi. Js 无法正常绘制，直接黑屏了

经过测试发现在更高性能的显卡上可以正常绘制显示，在正常的显卡上会出现 `WebGL: INVALID_VALUE: texImage2D: width or height out of range` 这个错误。

## 解决方案

1. 对后端返回的 base 64 图片进行压缩，将尺寸压缩到 webgl 支持的尺寸范围（与显卡性能有关）内即可正常显示。
2. 对返回过来的 base 64 转换为图片，然后通过 canvas 2 D 进行切图后分批渲染
