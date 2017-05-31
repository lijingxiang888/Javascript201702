import Vue from 'vue'
import Hello from './components/hello' // 导入vue单文件组件
import './public/css/index' // 导入外部css
import './public/css/hello' //导入外部less
import $ from 'jquery'

$('.main').click(function () {
    alert('我是第一个依赖main的按钮');
});


// import 'bootstrap/dist/css/bootstrap.css' // 导入bootstrap ui组件
// import 'bootstrap'
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
console.log('main.js');
console.log('main.js');
console.log('main.js');
console.log('main.js');