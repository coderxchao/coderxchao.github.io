---
title: npm install 底层原理
createTime: 2024/11/07 14:35:04
permalink: /article/loj8iqow/
tags: [工程化, npm]
---

> PS：如果想要更新一个已经安装的 node 包版本，可以通过 npm update <package_name> 来进行更新。此操作会实际更新 package-lock. Json 中的版本，但是不会更新 package. Json 中的版本。如果想两个文件中版本都更新到最新，则需要通过 npm install <package_name> 重新安装一次

## 有 package-lock. Json 文件的情况

### 1 . 读取 package-lock. Json 文件

- Npm 首先读取 package-lock. Json 文件，获取上次安装的确切依赖项版本和依赖树结构。

### 2 . 验证一致性

- Npm 检查 package. Json 文件中的依赖项版本范围是否与 package-lock. Json 文件中记录的确切版本一致。
- 如果一致，继续下一步；如果不一致，npm 会结合 package. Json 与 package-lock. Json 文件重新解析构建依赖树。

### 3 . 从缓存中获取依赖项

- Npm 尝试从本地缓存中获取依赖树中确切版本的依赖项。
- 如果本地缓存中有这些包，直接从缓存中恢复；如果没有，则从 npm 注册表下载并保存到本地缓存。

### 4. 安装依赖项

- Npm 按照构建好的依赖树结构，在 node_modules 目录中安装依赖项。

### 5. 执行生命周期脚本

- Npm 执行相关的生命周期脚本，如 preinstall、install 和 postinstall。

### 6. 生成或更新 package-lock. Json

- 如果 package. Json 中的依赖项没有变化，package-lock. Json 文件保持不变。
- 如果 package. Json 中的依赖项发生变化，package-lock. Json 文件会被更新。

## 没有 package-lock. Json 文件的情况

### 1 . 读取 package. Json 文件

- Npm 读取 package. Json 文件中的 dependencies 和 devDependencies 字段，获取所有依赖项及其版本范围。

### 2 . 解析依赖树

- 解析每个依赖项的版本范围，并构建一个完整的依赖树。
- 确定需要安装的具体依赖项版本。

### 3 . 下载依赖项

- 对于每个依赖项，npm 会尝试从 npm 注册表下载对应的包。
- 在下载之前，npm 会检查本地缓存中是否有对应版本的包。

### 4 . 利用缓存

- 如果本地缓存中有对应版本的包，npm 将直接从缓存中恢复这些包。
- 如果缓存中没有对应的包，npm 会从 npm 注册表下载这些包，并将其保存到本地缓存中。

### 5 . 安装依赖项

- 在 node_modules 目录中安装这些依赖项。
- 确保每个依赖项只安装一次，即使它被多个顶层依赖项共享。

### 6 . 生成 package-lock. Json 文件

- 安装完成后，npm 会生成一个 package-lock. Json 文件，记录所有安装的确切版本和依赖树结构。
    ![1724839328986.png](https://coderchao.oss-cn-shanghai.aliyuncs.com/images/1724839328986.png)
