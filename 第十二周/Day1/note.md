## webpack

### webpack
```
webpack -w
-w 实时监听编译
--progress 显示进程
--hide-modules 隐藏模块信息
```

### webpack-dev-server
```
webpack-dev-server --progress  --open --port 8090 --hot
--progress 显示进程
--open 自动打开浏览器阅览
--port 8090 自定义端口
--hot 热替换
```    
### package.json中制定定运行脚本

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress --hide-modules",
    "dev": "webpack-dev-server --open --hot"
  },
```

### 生成阶段

```
npm run build
```

### 开发阶段

```
npm run dev
```

## es6转es5配置
```
npm i babel-core babel-loader -D
```
### 安装es2015 预设插件包
```
npm i babel-preset-es2015 -D

```

## 创建.babelrc
```
{
  "presets": ["es2015"]
}
```

### 指定草案阶段
```
npm i babel-preset-stage-0 -D
```
## 配置 .babelrc
```
{
  "presets": ["es2015","stage-0"]
}
```

## 处理vue导入
- main.js
```
import Vue from 'vue'
```        
> 默认导入进来的是 vue运行是版本 没有模板编译器

### webpack 中配置 resolve.alias
```
 第一种
 'vue$': 'vue/dist/vue.common.js'
 第二种
 'vue$': 'vue/dist/vue.esm.js'
```        

## 处理vue单文件组件
### 需要借助 vue-loader
```
npm i vue-loader vue-template-compiler -D
```
### webpack module.rules 中配置
```
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
```

## 处理css

```
npm i style-loader css-loader -D
```
### webpack module.rules 中配置
  ```
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
  ```
## 处理less
```
npm i less less-loader -D
```  
### webpack module.rules 中配置
  ```
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!less-loader'
    }
  ```
### 处理bootstrap

- main.js
```
import 'bootstrap'
```
> 注意 import 默认导入的是 bootstrap.js

### webpack中 配置 resolve.alias
```
'bootstrap$': 'bootstrap/dist/css/bootstrap.css'

```          
  
