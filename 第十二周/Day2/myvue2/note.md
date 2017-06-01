## vuex

> 数据状态管理库

### install vuex

```
npm i vuex -S
```
### 在src中单独建立个store.js
1. 导入依赖模块
```
store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 初始安装
```
2.生成Vuex.Store的实例

```
export default new Vuex.Store(options)

```        
### 获取vuex共享状态
> 注册到跟根组件store中\
1.直接获取
```
{{$store.state.count}}
```
2.计算属性
```
computed: {
   count(){
    return this.$store.state.count;
   }
}
```

3.辅助函数mapState
```
组件中
import {mapState} from 'vuex'

computed:{
  ...mapState(['count']) // count状态名
}

 ...扩展运算符需要配置.babelrc 
{
  "presets": [
    ["env", { "modules": false }],
    "stage-0" // 指定阶段
  ]
}

```

