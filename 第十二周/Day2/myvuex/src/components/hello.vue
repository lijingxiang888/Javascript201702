<template>
    <div id="hello">
        <h3>组件hello</h3>
        <h4>{{title}}</h4>
        <p>{{$store.state.liwenli}}</p>
        <p>state：{{hello}}</p>
         <p>getters:{{$store.getters.newCount}}</p>
        直接改变state：<button @click="$store.state.liwenli++">add</button>
        <br>
        通过mutaions改变状态：<button @click="add">mutations</button>
        <br>
        通过actions改变状态：<button @click="$store.dispatch('modState')">actions</button>
    </div>
</template>
<script>
//    import store from '../store'
    export default {
        data(){
            return {title: 'hello vuex!'}
        },
//        store
        computed: {
            hello() {
                return this.$store.state.liwenli;
            }
        },
        methods: {
            add(){
                this.$store.commit('addFn'); //提交到mutations 触发mutations中的addFn事件
//                this.$store.commit('addFn', {
//                    count: 10
//                });
//                this.$store.commit({
//                    type: 'addFn',
//                    count: 20
//                })
            }
        }
    }
</script>