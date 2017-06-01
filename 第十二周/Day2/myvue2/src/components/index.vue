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

        <!--<p>{{say}}</p>-->

        <!-- state 状态改变 -->
        <h3>直接改变state</h3>
        <button @click="$store.state.count++">改变state状态</button>
        <p>{{count}}</p>
        <h3>mutations 改变 state</h3>
        <button @click="$store.commit('modState')">改变state</button>
        <br>
        mapMutations：<button @click="modState(20)">改变state</button>
        <p>{{count}}</p>

        <h3>actions 改变 state</h3>
        actions：<button @click="$store.dispatch('aMode')">改变state</button>
        <br>
        mapActions: <button @click="aMode">mapActions</button>
        <p>{{count}}</p>



        <!-- getters -->
        <h3>getters</h3>
        <p>getters：{{$store.getters.newCount}}</p>
        <p>mapGetters：{{newCount}}</p>
    </div>
</template>
<script>
//    import store from '../store' // 将store导入
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex' // 导入辅助函数
    export default {
        name: 'index',
        data() {
            return {title: 'hello index!'}
        },
        methods: {
            ...mapMutations(['modState']), // this.modState => this.$store.commit('modState')
            ...mapActions(['aMode']) // this.aMode => this.$store.dispatch('aMode')
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
            ...mapState(['count', 'say']), // 需要配置.babelrc
            ...mapGetters(['newCount'])
        }
    }
</script>