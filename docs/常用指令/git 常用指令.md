---
title: git 常用指令
createTime: 2024/11/07 11:03:46
permalink: /article/s6n2t80b/
tags: [git]
---

[Git 常用命令大全](https://www.runoob.com/note/56524)

[最全的 git 命令（详细）和对常见 git 操作流程讲解 - 掘金](https://juejin.cn/post/7133507623399194661)

> ps：下方命令中用<>包裹起来的内容为要填写的变量，remote-name 一般为 origin

## Git config 全局配置

- `git config --global user.name <username>`：配置提交代码的用户名
- `git config --global user.email <email>`：配置提交代码的邮箱
- `git config --global core.editor "code --wait"`：将 Visual Studio Code 配置为全局默认的 Git 编辑器，使得在执行交互式 rebase 时会自动打开 Visual Studio Code
- `git config --list`：显示当前的配置

## Git init 创建本地仓库

- `git init`：初始化本地仓库

## Git clone 克隆远程仓库到本地

- `git clone <repository_url>`：克隆远程仓库默认分支到本地
- `git clone -b <branch_name> <repository_url>`：克隆远程仓库指定分支到本地

## Git add 添加工作区修改到暂存区

- `git add <file1> <file2> …`：添加指定文件到暂存区
- `git add <dir>`：添加指定文件夹到暂存区，包括子文件夹
- `git add .`：添加当前终端所在文件夹下的所有修改到暂存区
- `git add -A`：添加当前工作区下所有修改到暂存区

## Git commit 将暂存区中的文件提交到仓库

- `git commit <file1> <file2> … -m <message>`：提交暂存区中的指定文件到本地仓库
- `git commit -m <message>`：提交暂存区中所有文件到本地仓库：
- `git commit --amend -m <message>`：覆盖上次提交记录（提交全部修改）
- `git commit --amend <file1> <file2> … -m <message>` ：覆盖上次提交记录（提交指定文件）
- `git commit -am <message>`：相当于 `git add -A` + `git commit -m <message>`，但是要注意的是，如果是新增的文件，没有被 `git` 跟踪过的，则无法将新增的文件添加到暂存区

## Git branch 分支操作

- `git branch`：列出所有本地分支
- `git branch -r`：列出所有远程分支
- `git branch -a`：列出所有本地分支和远程分支
- `git branch <branch-name>`：新建一个分支，但依然停留在当前分支
- `git checkout -b <brnach-name>`：新建一个分支，并切换到该分支
- `git branch <branch-name> <commit>`：基于指定 `commit` 新建一个分支，但依然停留在当前分支
- `git checkout -b <branch-name> <commit>`：基于指定 `commit` 新建一个分支，并切换到该分支
- `git checkout <branch-name>`：切换到指定分支
- `git branch -d <branch-name>`：删除本地分支
- `git branch -D <branch-name>`：强制删除本地分支，哪怕本地分支还有未合并的更改
- `git branch -dr <remote-branch-name>` | `git push origin --delete <branch-name>`：删除远程分支（注意这里一个是 `remote-branch-name`，一个是 `branch-name`。`remote-branch-name` 会多一个 `<remote-name>/`，具体取决于你远程的名字，一般为 `origin`）

## Git tag 标签操作

- `git tag`：列出本地所有 tag
- `git ls-remote --tags`：列出远程所有 tag
- `git tag <tag-name>`：基于当前 `commit` 新建一个 tag
- `git tag <tag-name> <commit>`：基于指定 `commit` 新建一个 tag
- `git tag -d <tag-name>`：删除本地 tag
- `git push origin --delete <tag-name>`：删除远程 tag
- `git push origin <tag-name>`：提交指定 tag
- `git push origin --tags`：提交所有 tag

## Git pull / git push 拉取/推送远程

- `git fetch origin`：下载远程仓库的所有变动
- `git pull <remote-name> <branch-name>`：拉取远程仓库代码并与本地分支合并（如果是 `clone` 下来的或者已经推送过的可以直接 `git pull`，会拉取远程默认分支合并到本地当前分支）
- `git push <remote-name> <branch-name>`：上传本地分支到远程仓库
- `git push -f <remote-name> <branch-name>`：强制推送当前分支到远程仓库分支（会覆盖远程仓库的）
- `git push <remote-name> --all`：推送所有分支到远程仓库
- `git push -u <remote-name>`：表示将本地分支与远程分支关联起来，并且将本地分支设置为远程分支的上游（upstream）。这意味着在以后的推送或拉取操作中，你可以直接使用 `git push` 或 `git pull`，而不需要指定远程分支的名称。（例如我们本地有一个 git 仓库，然后添加远程仓库管关联后第一次推送一般就需要使用该命令）
- `git remote add <远程仓库名称> <远程仓库地址> && git fetch <远程仓库名称> && git merge <远程仓库名称>/<远程分支名称>`：从另一个远程仓库地址拉取代码并与当前仓库的代码进行合并

## Git fetch 强制使用远程覆盖本地

- `git fetch --all`
- `git reset --hard <origin-branch-name>`

## Git push --force 强制使用本地覆盖远程

- `git push origin <branch-name> --force`
- `git push origin <branch-name> --force-with-lease`（如果你担心在你上次 fetch 后远程分支可能已被他人更新，可以使用 `--force-with-lease` 替代 `--force`。这能在防止意外覆盖他人工作的同时实现类似的效果）

## Git remote 查看远程仓库信息

- `git remote -v`：显示所有远程仓库
- `git remote show <remote-name>`：显示某个远程仓库的信息
- `git remote add <remote-name> <url>`：添加一个新的远程仓库（通常本地项目关联远程仓库第一次从远程仓库拉取代码的时候需要执行下面 2 行代码）
- `git remote set-url <remote-name> <newUrl>`：修改远程仓库地址
- `git branch --set-upstream-to=<origin-branch-name> <branch-name>`：将本地分支与指定的远程分支建立关联
- `git pull origin master --allow-unrelated-histories`：强制合并不相关的历史

## Git reset / git checkout 撤销修改

- `git reset HEAD <file>`：将单个文件移出暂存区，保留当前工作区中的修改
- `git reset HEAD .`：将全部文件移出暂存区，保留当前工作区中的去修
- `git reset --hard HEAD`： 将全部文件移出暂存区，并将其恢复到上一次的提交状态，这个命令会将暂存区和工作目录中的所有文件都恢复到上一次提交的状态，相当于完全撤销了所有的修改。请谨慎使用这个命令，因为它会永久性地删除工作目录中的所有未提交的修改。
- `git checkout -- <file>`：将工作区中的文件恢复到上一次 `commit` 记录（对于已经在暂存区中的无效）
- `git checkout HEAD~1 -- <file>`：恢复当前文件到上一次 `commit` 记录（不管暂存区还是工作区都有效）

## Git rebase 合并多个 commit

`git rebase -i HEAD~4`：合并最近 4 个 commit，需要注意的是这个命令在没有给 `git` 配置默认编辑器的时候会报错

## 查看信息与历史

- 查看当前修改状态：`git status`
- 查看 `commit` 提交记录：`git log`
- 根据关键词搜索提交记录：`git log --grep="关键字"`
