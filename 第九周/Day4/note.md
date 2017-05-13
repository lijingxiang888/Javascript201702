## node
### 什么是node？
> node 就是一个运行环境 可以让js运行在服务端 浏览器端不能操作本地文件等执行操作  

### node 
- 非阻塞异步I/0 
- commonjs 规范 require() 引入 module.exports 导出
- 基于V8 引擎 
- npm 包管理器 bower

### node安装

```
http://nodejs.cn/download/
```

Mac 安装 [Homebrew](https://brew.sh/index_zh-cn.html) 
在终端 输入下面 安装 Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
用brew安装node
```
 brew install node
```

### 查看是否安装成功

```
node -v
```
### 配置系统环境变量
```
右键计算机属性 -> 高级系统设置 -> 环境变量 -> 系统变量 -> 配置path -> node安装路径
```
### 进入 交互模式解析器
- 命令行中 输入 node 
- ctrl+ c 退出

### webstorm 中配置  node开发支持

> File ->settings -> serach node -> Nodejs and NPM -> enable

### webstorm中运行方式
```
在文件中 右键 -> run 文件名.js
```
### 通过命令行运行
```
node 文件名.js
```

### node 中全局对象 是 global

### 模块
1.内置模块
2.第三方模块
3.自定义模块

### http-server
- 全局安装
```
npm install http-server -g
```
- 使用
> 在当前目录下 打开命令行 输入以下命令即可
```
http-server  (默认8080 -p 指定一个端口号)

Starting up http-server, serving ./
Available on:
  http://192.168.0.102:8080
  http://127.0.0.1:8080
```
