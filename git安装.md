## git安装 

[git下载官网](https://git-scm.com/downloads)
### windows系统 直接下载相应版本

### MAC os 
1.先安装Homebrew
[Homebrew官网](https://brew.sh/)
在命令窗口输入 
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```
  brew install git
```

## github 注册账号

 注册网址 https://github.com/

## 创建git仓库

1.先登录 git账号 
2.头像右上角 your profile 回到简介页
3.选择 Repositories -> New 然后填写 仓库信息

## 将在github创建的仓库下载到本地
1.进入仓库 复制右边 clone绿色按钮 出来的 仓库地址（https://github.com/JasonLi0204/2017jstext.git）
2.当本地给找一个空目录作为父级目录 

3.clone克隆仓库 右键打开 git bash 窗口 输入 
```
 git clone https://github.com/JasonLi0204/2017jstext.git
```

4.回车 出现 Done 说明 成功 会发现 当前目录多了一个 文件夹 并且里面有一个隐藏的 .git文件

## 查看本地仓库和远程仓库是否建立联系(一定要进入仓库)
```
git remote -v

origin  https://github.com/JasonLi0204/2017jstext.git (fetch)
origin  https://github.com/JasonLi0204/2017jstext.git (push)

```

# 向远程仓库提交修改
## 从工作区提交到暂存区
```
  git add ./-A
```

## 第一次使用git 会在commit的时候 配置 email 和 name（如commit时不提示配置email和name 则忽略）
```
git config --global user.email "你的邮箱"
git config -- global user.name "名字"
```
## commit 从暂存区提交到历史区
```
 git commit -m "填写更新描述"

```

## push 推送到远程仓库

```
 git push origin master
```


# 拉取别人的仓库 方式一
## 把别人仓库 clone到本地
```
  git clone 仓库地址
```

## 以后每次把别人仓库更新到本地
```
 git pull origin master
```


# 拉取别人仓库 方式二

## 把老师 仓库 fork 到自己github 这样自己的github上就有了一份和老师一样的仓库
### 进入老师仓库 点击 右上角 fork按钮

## 然后把从老师fork的仓库 从自己github clone下来到本地
```
 git clone 自己github的仓库地址
```
## 然后 和老师 仓库建立联系
```
git  remote add teacher 老师仓库地址
```

## 以后每次和老师仓库同步
1.更新与老师的仓库联系状态

```
git remote update teacher

```

2.然后再拉取(注意是拉取老师仓库的同步到自己本地仓库)
```
git pull teacher master
```

## 在将自己本地仓库和老师同步后 再推送到自己的github远程仓库
```
git add .
```

```
git commit -m "更新老师讲义"
```
- 推送到自己远程仓库

```
git push origin master
```





