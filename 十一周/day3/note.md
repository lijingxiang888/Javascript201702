## webpack
### 安装
1. 全局安装（可以在cmd中使用）
```
npm i webpack -g
```
2.项目依赖中安装
```
npm i weback --save-dev/-D
```
## 在当前目录中创建webpack配置文件（webpack.config.js）


### 开发环境部署
1. 安装webpack-dev-server
```
npm i webpack-dev-server -g
```
2.项目依赖中安装
```
npm i webpack-dev-server --save-dev
```

3.在项目根目录创建index.html

4.引入编译后文件  
```
<script src="/index.js"></script>
```

> 在哪个目录运行 webpack-dev-server 就是服务根目录
```
Project is running at http://localhost:8080/
webpack output is served from /
```

## package.json 指定运行脚本
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --hot"
  },
```
- 运行

```
npm run [dev]
```

### 手工指定webpack配置文件

```
webpack-dev-server --config webpack2.config.js
```

### .gitignore(git上传忽略文件)