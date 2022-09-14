### Git

#### linux常用的命令

ls  查看文件夹的文件列表

cd 进入指定目录   cd 目录的路径（相对路径绝对路径）  cd..  进入上一级目录

rm 删除指定文件或者目录   rm-rf 目录名或者文件名

clear 清除当前命令行



#### 常用快捷键

tab  自动补全路径

ctrl + L   清除当前命令行

ctrl + c   终止当前命令

上下箭头展示之前的指令操作



#### 2  Vim 的使用

vim进入  或者 vim 指定的文件

进入vim界面后，没有文件会最终生成，有文件就修改

i  输入（编辑）模式

:wq 保存退出

误入了vim 界面直接 ：wq  保存退出即可。



#### 3.git 基础命令

##### 3.1 初始化配置

```
git config --global user.name 'li'  开发者名称
git config --global user.email 'li@big-house.com'  开发者邮箱
查看配置信息
git config -l
```



##### 3.2仓库初始化

```
git init  初始化仓库，并且创建仓库
```

##### 3.3 查看仓库状态

```
git status
git add 添加到暂存区  git commit -m提交到版本库
git diff 查看工作区和版本库的区别
git diff --cached 查看暂存区和版本库区别

//如果是已经跟踪的文件，可以直接一次性操作
 git commit --all -m  '直接跳过添加'
 git commit -am
```

##### 3.4 撤销修改和撤销暂存区

```
工作区的内容没有，从版本库恢复
git restore 指定的文件或者 ./
工作区的内容没有，从暂存区添加恢复
git restore --staged

```

##### 3.5历史版本回滚

```
git log  查看详细提交的记录
git log -n查看最近n次提交的记录
git log -oneline 每次提交记录只用一行显示
git reflog 查看所有状态的记录


指定版本回退
git reset --hard HEAD~  (~有几个回退几次)
git reset --hard 0917qe  (指定commit版本号回退)

```



### 4.忽略文件

创建忽略文件

在编辑器中创建 gitignore 文件 在里面添加要忽略的文件名称即可

### 5.设置分支

```
查看分支 git branch

创建分支 git branch 分支名称


切换分支 git checkout 分支名称
//一定要在切换分支之前提交完成

合并分支 git merge 分支名称

创建新的子分支并切换   git checkout -b  子分支名称
//在谁的分支上创建的子分支，就会同步拥有谁的目前的文件

删除分支 git branch -d 分支名
```

注意事项：在合并的时候，遇到冲突了

		两个分支的作者，对于同一个文件做出了修改
	
		在主分支上，合并的时候，会出现冲突，这个时候
	
	在编辑器中可以手动选择 ：

**只保留主分支的内容 /保留子分支/都保留/对比两个的区别**

选择保留之后要重新添加到暂存区中，并且添加到版本库中

主分支处理了之后，子分支要更新代码，也需要做一个merge



### tips:常见问题

##### 一、已经提交到版本库的，需要忽略 （解决方法）

1 ：git rm -r 指定的文件

			会删除工作区和版本库的文件，但需要提交 commit

2： git rm -r --cached 指定的文件名称

	会删除版本库中的文件，也会一处之前的提交引用，在项目中也会存在移出
	记录，先把文件拿走，再提交一次 add commit 再拿进来，设置忽略清单就好了

##### 二、主分支下有两个子分支  a子分支做了一个模块，b分支想直接获取，不通过主分支

使用  git cherry-pick  分支名称/对应的版本id

在没有创建记录的情况下，直接拥有了对应的代码。



**三、commit提交时 日志提交错误**

修改日志  git commit --amend

	会进入vim中，修改并退出，只能修改最近的一次



**四、在开发过程中，紧急修复一个其他分支的内容**

我们需要暂存现在的代码 再去切换别的分支修复

git stash  暂存代码，恢复为上次提交的内容

git stash pop 恢复上次暂存的代码

git stash list 暂存代码列表，里面有暂存的分支名称



**五、（极力推荐）合并提交的commit  / 合并代码**

合并 commit 如果要折叠的话，首先按照 log --oneline 的方式查看对应版本号

如果要折叠的范围不显示的话，那么上一版和下一版是不能修改的

那么进入rebase折叠就得在下下版进入

git  rebase -i 指定的版本号  进入vim界面

把pick  改成  s 然后保存的退出

如果有遇到问题,先修复问题，记得add和commit然后在执行

 git rebase --continue    再执行 git rebase --skip



合并代码

		以往的方式是使用 merge 合并，但是需要产生一次新的commit，还会合并之前分支的commit
	
		$ git rebase -i 指定的分支
	
		好处就是不会产生额外的commit，也会进入到vim的界面，进行commit的增减
	
		$ git rebase --continue
	
		$ git reabse --skip
### github操作

**上传**

1、在 github上新建一个仓库

2、根据github提示  添加和提交后

3、git remote add otigin 仓库地址    //如果要加新的  git remote remove origin

4/  git push -u origin master(分支名称)

**下载**

 通过code 中拿到 仓库地址 例子：https://github.com/lituogit/textli.git

通过git  clone 项目地址 +项目名 下载  

如果要更新版本库中代码 使用 git  pull

修改分支名称  git branch -M main



gitFlow 规范

团队开发的分支创建和日志提交的规范，每个公司都可能会有自己的单独文档

```
master：
		保护分支，主分支，不会在这上面开发，一般保存的是稳定版本，初始分支都是这个切换出来的
Relese ： 大版本分支，一般是前端的团队负责人，定期更新
Develop：功能分支，组长或开发者创建，会拆分出来小功能分支。
Feature：需求分支，每一个需求都会创建对应的该创建对应需求分支。

最终小需求会合并到Develop中，当功能分支完成后再次合并到Relese大版本中。
HotFix：紧急修复分支，一般临时处理，直接合并到master。

```

**命名规范**

git commit -m  'fix'

git commit -m  'feat'

git commit -m  'style'

git commit -m  ''











