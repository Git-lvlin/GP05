#readme文档
- 项目说明文档
- 一般都与项目放在一起

# git操作

## 初始化版本库
- git init
- 初始化成功后，当前目录后面有(master)
- 初始化成功后当前目录下有个隐藏文件.git(不要去操作它，不要管)

## 工作区
- 持有实际文件
- 我们平时增删改查的文件都是工作区的内容

## 缓存区
- 可以理解为我们看不到的一个地方
- 也是存在于用户电脑中的
- 本地仓库的一个主要组成部分

## 本地仓库
- 可以理解为我们看不到的一个地方
- 也是存在于用户电脑中的
- 用于存储项目代码及版本项目记录等信息

## 提交到暂存区
- git add 文件名
- 将工作区的变动提交到暂存区
- git add . 将所有变动提交到暂存区git

## 查看变动
- git diff 文件名
- 会列出该文件前后的差异

## 正常提交(非第一次)
- git add . 提交到暂存区
- git commit -m '注释'
- git pull 先更新远程到本地
- git push 提交到远程仓库

## 创建远程仓库
- 进入GitHub官网
- 创建一个新的远程

## 将本地仓库与远程仓库关联
- git remote add origin https://github.com/Git-lvlin/GP05.git(你的远程仓库地址)
- git remote -v  查看本地仓库关联的远程仓库地址

##将本地仓库提交到远程仓库
- git push -u origin master 第一次提交到远程
-git push 将本地仓库提交到远程仓库
- -u origin master 设置默认的提交地址和分支

## 修改关联的远程仓库地址
- git remote rm origin
- git remote add origin

## 更新代码
- 确保自己工作区的代码先提交到本地仓库
- 然后再从远程更新到本地 git pull
- git clone 远程仓库地址 克隆代码到本地
## 其他人修改
.......

## 分支操作
- git branch 查看当前所以分支
- 当前分支名前有个*号
- git branch 分支名 创建一个分支
- git checkout 分支名 (切换分支)
- git merge 分支名 (合并某分支到当前分支)
- git branch -d 分支名 (删除分支)
- git push origin 分支名 (提交分支到远程)
- git pull origin 分支名 将某个分支更新到本地仓库

## fetch和pull的区别
1、它们都用于从远程更新到本地
2、git fetch不会自动合并到当前分支(不会merge)
3、git pull 会自动合并到当前分支(会merge)
## test分支
- 添加内容。。。。。。
