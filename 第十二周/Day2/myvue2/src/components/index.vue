<template>
    <div id="index">
        <h3>{{title}}</h3>
        <!--<h3>直接获取</h3>-->
        <!--<p>{{$store.state.count}}</p>-->
        <!--<p>{{$store.state.say}}</p>-->
        <!--<h3>计算属性方式获取</h3> -->
        <!--<p>{{count}}</p>-->
        <!--<p>{{say}}</p>-->
        <h3>mapState</h3>
        <p>{{count}}</p>
        <p>{{say}}</p>
    </div>
</template>
<script>
//    import store from '../store' // 将store导入
    import {mapState} from 'vuex' // 导入辅助函数
    export default {
        name: 'index',
        data() {
            return {title: 'hello index!'}
        },
//        store
//        computed: { // 通过计算属性方式 简化获取
//            count() {
//                return this.$store.state.count;
//            },
//            say() {
//                return this.$store.state.say;
//            }
//        }
        computed: {
            ...mapState(['count', 'say']) // 需要配置.babelrc
        }
    }
</script>