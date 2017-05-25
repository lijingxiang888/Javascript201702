// import Vue from 'vue/dist/vue.esm.js'
import Vue from 'vue' // 需要在webpack中配置 resolve alias 默认导入的是 运行时js（不支持模板编译）
import Add from './public/aa.js'
import Hello from './components/hello.vue'
// console.log(Add);
// Add(10,20);
console.log('hello webpack!');
console.log(Vue);

new Vue({
    el: '#app',
    data:{
        title: 'hello vue.js'
    },
    render: (h) => h(Hello)
    // render: function (h) {
    //     return h('h4',this.title)
    // }
    // render: h => h('h4', 'hello nihao')
    // methods: {
    //     say(){
    //         alert('vue.js')
    //     }
    // }
});