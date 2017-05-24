import Vue from 'vue' // 导入一个vue模块 得到里面Vue
import App from './App.vue' // 将组件导入进来
import Hello from './components/hello.vue' // 引入组件
import Liwenli from './components/liwenli.vue'
new Vue({
  el: '#app',
  // render: h => h(App)
   components: { // 注册组件
       App,  //App:App
       Hello,
       Liwenli
   }
});
