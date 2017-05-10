## ajax+node 

### dos 命令
###在windows 命令窗口中使用linux  命令
1.安装git时候 选择 adjusting your path env 中第三项

2.配置环境变量
 右键计算机-> 属性 -> 高级系统设置 -> 环境变量 -> 系统变量 -> path -> (git安装目录下cmd 路径) f:\Program Files\Git\cmd
 
1. ipconfig  ipconfig /all 查看 本机ip信息
2. clear/cls 清屏
3. ls -al  查看所有文件
4. cd 切换目录 change direction
5. mkdir  创建目录
6. touch 创建文件
7. echo 编辑文件内容

```
 添加 并将原有内容覆盖
 echo 编辑的内容 > 文件名 
 
 追加内容
 echo 编辑的内容 >> 文件名 
 
```
 8. cat 查看文件内容
 
 9. 递归强制删除
 
 ```
   rm -rf cc
```
10. vi 文件名 调出vim编辑器

 i/o/u 进入编辑状态 esc 退出编辑状态 shift+: q不保存并退出 q! 强制退出 wq 保存并退出
 
11. 在webstorm 中打开 命令行 
```
  编辑器左上角 view -> Tool Windows -> terminal  在当前目录下打开命令行
```
12. ping 网络是否通

### node
node 一个运行环境 让js可以 在服务端运行  浏览器客户端js 是不可以操作本地系统 
node 基于V8 引擎 

node 提供了 很多操作系统api 

Js单线程 异步非阻塞I/O 读写 输入和输出
可以 同步 也可以 异步
自带模块化 commonjs规范

require() // 引入模块
module.exports // 导出模块   
requirejs amd 规范 sea.js 

http fs url ...
模块 
内置模块
自定义模块
第三方模块 

node  支持 es6 let const 服务端没有兼容性

node 全局对象global

npm init  当前文件名 不能是 中文 不能是大写 不要有特殊符号

```
npm install 包名 --save / --save-dev  

--save 保存到 package.json 的dependencies 属性里
--save-dev 保存到 package.json 的devDependencies 属性里

```
当前项目依赖包 安装到哪个文件夹
```
 npm root
```

2. 全局安装
```
npm install package -g
```
查看全局安装 的目录

```
 npm root -g
```


  

