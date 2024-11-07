---
title: linux 常用指令
createTime: 2024/11/07 11:03:46
permalink: /article/ci2go8el/
tags: [linux]
---

[Linux 命令大全 | 菜鸟教程](https://www.runoob.com/linux/linux-command-manual.html)

## Ls（列出指定工作目录下的文件夹与文件）

英文全拼：list directory contents

> `ls` 后面可以跟上路径，例如 ls root/test/ 或 ls -l root/test

`-a`：列出所有文件及文件夹（以 `.` 开头的隐藏文件也会列出）

`-A`：同 -a ，但不列出 "." (目前目录) 及 ".." (父目录)

`-l`：以长格式显示文件和目录信息，包括权限、所有者、大小、创建时间等

`-t`：将按照修改时间排序，最新的文件在最前面

`-F`：在列出的文件名称后加一符号；例如可执行档则加 "\*", 目录则加 "/"

`-R`：递归显示目录中的所有文件和子目录

## Alias（给命令创建别名）

示例：`alias ls="ls --color=auto"`

> 当这样设置后，我们输入 `ls` 时，其实执行的是 `ls --color=auto`。直接输入 `alias` 将列出当前已经存在的别名

## Unalias（删除别名）

示例：`unalias ls`

## Pwd（打印当前工作目录）

英文全拼：print work directory

## Cd（切换工作目录）

英文全拼：change directory

> 直接输入 `cd` 会切换到当前用户目录

## Cp（复制文件与文件夹）

英文全拼：copy file

示例：`cp 源文件 复制文件`, 表示将 a.txt 复制一份，名称为 b.txt。如果需要复制目录则需要使用在 `cp` 后加上 `-r`，表示递归复制，例如，`cp 源目录/ 复制目录/`

## Rm（删除文件与文件夹）

英文全拼：remove

删除文件：`rm 文件名`

删除空文件夹：`rm -r 文件夹名称/`

删除有内容的文件夹：`rm -rf 文件夹名称/`

## Mv（移动或重命名文件与文件夹）

英文全拼：move file

重命名文件：`mv b.txt c.txt`，表示将 b.txt 重命名为 c.txt

重命名文件夹：`mv frontend/ new_frontend/`，表示将 frontend 目录重命名为 new_frontend

移动文件：`mv c.txt new_frontend/`，表示将 c.txt 文件移动到 new_frontend 文件夹

## Mkdir（创建文件夹）

英文全拼：make director

创建单个文件夹：`mkdir test/`，创建 test 文件夹

一次性创建多级文件夹（）：`mkdir -p aaa/bbb/ccc`，表示创建 aaa/bbb/ccc 3 个文件夹

## Touch（创建文件）

示例：`touch dd.txt`，将创建 dd. Txt 文件

## Chmod（）

英文全拼：change mode

[Linux chmod 命令 | 菜鸟教程](https://www.runoob.com/linux/linux-comm-chmod.html)

示例：`chmod 777 dd.txt`，777 表示读写可执行权限

## . 与 ./（执行可执行文件）

假如我有一个 test. Sh 文件需要执行，可以通过 `. test.sh` 或 `./test.sh` 来执行。他们之间有一点区别:

- .（点号）命令用于在当前 shell 环境中执行指定的脚本文件。这意味着脚本文件中的任何导出的变量或修改的环境变量都会影响当前 shell。
- ./（点斜杠）命令用于执行当前目录下的脚本文件。它指示系统在当前目录中查找并执行指定的脚本文件。

## Cat（查看文件内容）

英文全拼：concatenate

示例：`cat dd.txt`

## Ping（测试网络连接）

> Ping 是用于测试网络连接的最流行的网络终端工具。Ping 有很多选项，但在大多数情况下，您将使用它来请求域或 IP 地址

## Sudo（超级用户）

`sudo` 通常用于安装软件或编辑用户主目录以外的文件，有些操作没有权限可以通过加上 `sudo` 来进行，需要输入密码
