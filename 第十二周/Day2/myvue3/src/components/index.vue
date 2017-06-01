<template>
    <div id="index">
        <h3>{{title}}</h3>
        <h3>改变state</h3>
        mapMutations：<button @click="modState()">Mutations</button>
        <br>
        mapActions：<button @click="aMode(20)">Actions</button>
        <!--<p>mapState：{{count}}</p>-->
         <p>mapState：{{storeCount}}</p>
         <p>mapGetters：{{newCount}}</p>
    </div>
</template>
<script>
    /**
     * mapState 获取state里的状态
     * mapMutations 同步修改state状态 commit mutations
     * mapActions 可以异步修改 state状态 dispatch => commit
     * mapGetters 计算出来的新数据属性
     */
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
    export default {
        name: 'index',
        data() {
            return {title: 'hello 首页!', count: 'nihao'};
        },
        methods: {
            ...mapMutations(['modState']),
            ...mapActions(['aMode'])
        },
        computed: {
//          ...mapState(['count'])
            ...mapState({storeCount: 'count'}),
            ...mapGetters(['newCount'])
        }
    }
</script>