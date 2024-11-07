---
title: node 包版本不一致导致的问题
createTime: 2024/11/07 14:42:06
permalink: /article/xfxe4uku/
tags: [nodejs, 开发问题]
---

机器人调试系统的一个登录接口，通过 `axios` 的 `auth` 授权（`Basic Auth`）传递参数，然后请求会自动将 `auth` 中的参数转换成 `base64` 放到 `Authorization` 请求头中，之前的代码中又有通过 `axios` 的 `response` 中的 `config.header` 去拿 `Authorization` 的值，但是发现自己项目跑起来拿不到这个值，然后别人项目跑起来拿得到。最后发现是 `axios` 在指定的 `1.6.8` 版本中可以拿到自动生成的 `Authorization` 的值，其他版本拿不到。因为那个项目的 lock 文件被另一个前端同时忽略没有提交到 `git` 上，所以导致 `axios` 版本不对。最坑的是好像只有 `1.6.8` 版本可以拿到。之前试过 1.6.7 或者更高的版本都拿不到。
