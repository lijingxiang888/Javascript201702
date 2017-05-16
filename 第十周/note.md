### vue
- 渐进式框架 mvvm

### mvc
- m: model 数据层 保存数据
- v: view 视图层 用户界面
- c: controller 控制器 业务逻辑

过程：v->c->m->v
过程：用户操作界面 通过 DOM事件 -> 向控制器发送指令 执行相应 业务逻辑 -> 通知 数据层 保存或修改 状态 再由数据层 -> 反馈给 视图层 

angular 采用 mvc 模式 单向通信

### mvvm 双向数据绑定
- m model 数据模型 保存数据
- v view 视图层 用户界面
- vm 视图模型 viewModel 

- 1.v -> vm -> m
- 2.m -> vm -> v

### vue 安装

- 初始化一个package.json

```
npm init -y
```
- 下载vue
```
npm install vue --save
```
### vue 压缩和不压缩
- 通常开发阶段 引入 开发版（不压缩） 报错提示 便于调试
- 生产版 （压缩） vue.min.js  是没有 报错提示的