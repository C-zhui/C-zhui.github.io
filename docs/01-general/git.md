---
sidebar_position: 1
---

# Git

git 是很重要的分支、版本管理工具，帮助开发团队更好的沟通协作。

## 安装
官网 https://git-scm.com/download/mac 点击链接下载

mac 上可以终端输入 `brew install git` 安装

## 可选安装 
### oh my zsh

`sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

内置了很多 git 命令别名，可以通过 `alias` 查看

### tig 

tig 可以方便查看 log

终端输入 `brew install tig` 安装

### Git Lens 

这是个 VS Code 插件，可以很方便地翻看提交历史、文件历史、diff

## 配置 用户名 和 email
使用下面的命令填入
```sh
git config --global user.name "your name"
git config --global user.email your_email@example.com
```

## 生成 ssh key
```sh
cd ~
mkdir .ssh
cd .ssh 
ssh-keygen # 一路回车即可
```

可以看到生成了 id_rsa、id_rsa.pub， 一个公钥一个私钥，私钥自己留着，公钥需要注册到远程托管服务器。

## 配置 github SSH Key
1. 复制 id_rsa.pub 的内容
2. 在 github 的 设置页 找到 `SSH and GPG keys`，点击 `new SSH key`，并粘贴 id_rsa.pub 的内容
3. 之后便可以正常的 clone 仓库，提交推送代码，当然其他的托管平台也是一样的做法。

## 创建本地仓库 
```sh
git init
echo init project > README
git add .
git commit -m "chore: init project"
# 设置远程仓库，push 代码
```

## 或者 克隆远程仓库
从远程克隆仓库是比较常见的操作，随意进入一个 github 仓库，点击 Code 下拉按钮，复制 git 协议链接，以 MUI 为例，
`git@github.com:mui-org/material-ui.git`，在合适的文件夹下面，终端执行 `git clone git@github.com:mui-org/material-ui.git` 即可克隆仓库。

## 概念
1. 远程仓库，在服务器上存放的 git 仓库。
1. 本地仓库，经过 git init 或者 git clone 得到的本地仓库，项目文件夹下的隐藏文件夹 .git 就是本地仓库。
1. 工作区，当前正在修改的文件，都属于工作区。
1. 暂存区，经过 git add 的文件，被 git 记录到后续 commit 命令的操作对象集合中。
1. 索引区，所有提交入库的文件都在索引区，一旦进入索引区，不管后面怎么修改，都可以通过命令回退版本文件。

## 常用的指令
1. git add [. | files]，添加文件到暂存区。
1. git commit ，打开 vim 编辑，完事儿 :wq 保存提交信息退出，此时就已经对暂存区的文件完成了一次提交。使用 git log 可以查看提交内容。
1. git merge [other-branch]，将其他分支合入当前的分支，如果出现冲突，该文件会出现特殊的分割线，分割线上方是当前分支的内容，分割线下方是其他分支的内容（使用 VS Code 查看会有高亮提示），操作者可以选择保留其一或者都保留。
1. git push，将代码推送到远程分支中，如果远程分支不存在，会有提示设置 up-stream。如果推送前有回退操作，需要 git push -f 强推（谨慎操作，要通知到所有在这分支上工作的人）。
1. git stash，将当前的暂存区内容放入 git 的栈中（当然可以通过 -k 和 -u 调节这个行为），通常是为了切换别的分支去完成其他工作，再回来继续完成当前分支的内容。但是实践中并不推荐使用这个命令，因为有一定概率会忘记 `git stash pop`，过了一阵子又突然发现有东西没有复原出来，这时候 `git stash pop` 很大概率出冲突，所以一般是直接将暂存区提交，给自己一个提交信息暗示，比如 `chore: temp commit`，不推送到远程，后续再软回退。
1. git reset --soft [commit]，软回退，回退提交至目标提交点，并把沿途的提交更改回退到暂存区，上一条中就可以使用 `git reset --soft HEAD~` 来退回暂存的提交。
1. git reset --hard [commit]，硬回退、强行对齐，指针直接对过去，放弃沿途的一切修改。
1. git revert [commit]，反向提交，将单一的提交点改动反过来应用一遍，相当于没有做过这个提交的修改，用于消除本次提交的影响。也可以 revert 一个 revert 点，负负得正，再把修改返回去。
1. git cherry-pick [commit]，将一个提交的修改应用在当前的分支中，提交通常应该不存在于当前的分支。用于在不合并代码的前提下应用提交修改。
1. git rebase [commit]，变基操作，可用于合并分支，通常是两个人同时在改同一分支时，一人提交到了远程，另一人需要 pull 代码合并，但是不想出现 merge 提交点，这时候可以使用 `git pull -r`，相当于 `git fetch` + `git rebase origin/当前分支`。其行为等同于 硬回退 到共同祖先提交后，先应用变基目标提交的修改，再应用当前分支提交的修改。如果变基导致偏离远程分支，那么需要通过强推（谨慎操作），最好只在前面描述的场景下使用。
1. git reflog，查看 HEAD 指针历史，救命的技能，如果你误操作了，比如硬回退完了又 push 了代码，远程仓库也找不回来了，这时候不要急，`git reflog` 可以找到当前的 HEAD 在硬回退前的提交，复制 commit id，再执行一次 `git reset --hard [commit_id]` ，就能够恢复了。


以上操作已经可以满足大部分工作需要，大部分也可以通过 VS Code 版本管理界面来完成。

