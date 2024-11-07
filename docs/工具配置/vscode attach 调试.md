---
title: vscode attach 调试
createTime: 2024/11/07 11:08:25
permalink: /article/z912f27k/
tags: [vscode]
---

## Vscode 配置

项目根目录 . vscode 目录下增加 .launch.json 文件，内容如下：

```json
{
  "configurations": [
    {
      "name": "Attach to Chrome",
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

## Chrome 浏览器配置

chrome 浏览器桌面图标右键属性>快捷方式>目标后面空格增加--remote-debugging-port=9222，以这种方式启动 chrome 浏览器即可。

![h3xlqd.png](https://files.catbox.moe/h3xlqd.png)

> launch 模式：由 vscode 来启动一个独立的具有 debug 模式的程序
> attach 模式：附加于（也可以说“监听”）一个已经启动的程序>
