---
title: pnpm 常用指令
createTime: 2024/11/07 11:03:46
permalink: /article/pe98f082/
tags: [pnpm, workspace]
---

https://pnpm.io/zh/cli/add

## 管理 node 版本：pnpm env

### 安装 node 版本

1. 安装并使用 node 的 lts 版本：`pnpm env use --global lts`
2. 安装并使用 node 的指定版本：`pnpm env use --global 18`
3. 安装并使用 node 的预发布版本：`pnpm env use --global latest`
4. 安装指定版本的 node，但不激活：`pnpm env add --global lts 18 20.0.1`

### 移除 node 版本

示例：

1. `pnpm env remove --global 14.0.0`
2. `pnpm env remove --global 14.0.0 16.2.3`

### 查看 node 版本

1. 查看本地安装的 node 版本：`pnpm env list`
2. 查看远程可用的 node 版本：`pnpm env list --remote`
3. 查看远程可用的 node 指定版本：`pnpm env list --remote 18`

## 添加软件包：pnpm add

1. 添加到生产环境 `dependencies`：`pnpm add <packagename>`
2. 添加到开发环境 `devDependencies`：`pnpm add -D <packagename>`
3. 添加到全局：`pnpm add -g <packagename>`
4. 添加指定版本：`pnpm add <packagename>@1.0.0`
5. 添加到依赖项 `peerDependencies`：`pnpm add --save-peer <packagename>`

## 删除软件包：pnpm remove

> Aliases：rm, uninstall, unn

1. 从全局删除：`pnpm remove -g <packagename>`
2. 从开发环境删除：`pnpm remove -D <packagename>`
3. 从生产环境删除：`pnpm remove <packagename>`

## 过滤：--filter 或 -F

`pnpm --filter <package_selector> <command>`

示例：在 workspace 模式下

1. 将一个子包 1 添加到另一个子包 2：`pnpm --filter <子包2名称> add <子包1名称>`

## 安装到根目录：-w

`pnpm add <packagename> -w`

## 以 workspace 模式安装：--workspace

`pnpm --filter <packagename1> add <packagename2> --workspace`

## 发布：publish

`"prepublishOnly": "pnpm version patch && pnpm run build"`

> 此命令表示当执行 pnpm publish 前先执行该脚本的内容，即先执行 pnpm version patch 修改 package. Json 中的版本号然后再执行 pnpm run build 打包，等该脚本内容执行完后才会执行 pnpm publish 真正去发布。

## Monorepo 开发模式总结

1. Monorepo 适合用来在同一个 git 仓库中管理公司所有项目或模块包
2. 在 packages 下面存放所有的子项目及模块
3. 对于一些通用的 node 包直接通过 -w 指令安装到根目录下即可，在子包中可以找到根目录下安装的所有 node 包，且子包在进行打包的时候也能找到全局安装的 node 包打进去
4. 如果子包是需要发布的 node 包而不是项目在打包配置中最好排除掉依赖的根目录 node 包，因为如果多个子模块包都可能依赖根目录下的 node 包，全都打进子模块包里面会增加模块体积
5. 子包需要依赖另一个子包的时候最好通过 `--workspace` 模式添加依赖
