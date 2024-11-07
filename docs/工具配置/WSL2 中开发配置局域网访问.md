---
title: WSL2 中开发配置局域网访问
createTime: 2024/11/07 11:08:25
permalink: /article/xdxilw1b/
tags: [wsl]
---

## WSL 2 中查询 WSL 2 中的 IP

在 wsl 2 中执行命令：ifconig
![1725615057695.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1725615057695.png)

> 获得 wsl 2 中的 ip 地址为 `172.24.203.60`，这里需要注意找的 wsl 2 的 ip 地址为后面的 netmask 是 `255.255.240.0` 这个对应的 `inet` 的值

## 设置端口转发

在 windows 中，管理员打开 `power shell`，执行以下命令：
`netsh interface portproxy add v4tov4 listenport=[宿主机windows平台监听端口] listenaddress=0.0.0.0 connectport=[wsl2平台监听端口] connectaddress=[wsl2平台ip] protocol=tcp`

> 比如 vite 开发服务器端口 5173，即把 WSL 2 中的 5173 端口转发到 windows 下的 5173 端口
> `netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=172.24.203.60 protocol=tcp`

另外，其他两个命令：

> 查看端口转发状态：`netsh interface portproxy show all`
> 删除端口转发：`netsh interface portproxy delete v4tov4 listenport=[宿主机windows平台监听端口] listenaddress=0.0.0.0`

比如删除刚刚建立的端口转发：`netsh interface portproxy delete v4tov4 listenport=5173 listenaddress=0.0.0.0`

> 上述命令中的 listenaddress=0.0.0.0 可以全部更改为 listenaddress=\*

## Window 设置防火墙

> 在高级防火墙设置中 (找不到的话可以在开始菜单搜索防火墙)，新建入站规则，选择端口-TCP, 特定本机端口: 5173-允许连接，保存规则名称为 vite 本机开发服务器。

![1725615483294.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1725615483294.png)

上面设置完后就可以通过局域网访问 wsl 2 中的程序端口了。

> 如需查看 windows 的局域网 ip 地址，可通过 ipconfig 查看

[WSL2 设置局域网访问 (wtto00.github.io)](https://wtto00.github.io/posts/setting-up-lan-access-for-wsl2/)
