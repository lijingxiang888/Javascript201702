<template>
    <div id="news">
        <h3>{{title}}</h3>
        <!--<p>{{$store.state.count}}</p>-->
        <!--<p>{{liwenli}}</p>-->
        <!--<p>{{count}}</p>-->
    </div>
</template>
<script>
//    import store from '../store'
import {mapState} from 'vuex'
    export default {
        name: 'news',
        data() {
            return {title: 'hello news!', say: 'hello zhufeng'}
        },
//        store
        computed: {
//            ...mapState(['say'])
            ...mapState({liwenli: 'say', count: 'count'})// 避免变量名重复
        }
    }
</script>