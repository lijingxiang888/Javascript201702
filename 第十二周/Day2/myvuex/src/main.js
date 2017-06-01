import Vue from 'vue'
import App from './App.vue'
import Hello from './components/hello.vue'
import Index from './components/index.vue'
import store from './store' // 导入状态库
new Vue({
  el: '#app',
  // render: h => h(App)
  components: {
      Hello,
      Index
  },
   store //store: store 注入到根实例中
});
