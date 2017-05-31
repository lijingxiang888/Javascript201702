import Vue from 'vue'
import Hello from './components/hello.vue' // 导入单文件组件
import './public/css/index.css' // 导入外部css
import './public/css/hello.less' //导入外部less
// import 'bootstrap/dist/css/bootstrap.css' // 导入bootstrap ui组件
import 'bootstrap'
// console.log('HELLO WEBPACK!');

// let add = (a, b) => console.log(a+b);
//
// add(10, 10);

new Vue({
   el: '#app',
   data: {
       title: 'hello vue.js!'
   },
    components: { //局部注册
       Hello  // Hello: Hello
    }
});