<template>
    <div id="index">
        <h3>组件首页</h3>
        <h4>{{title}}</h4>
        <p>{{$store.state.liwenli}}</p>
    </div>
</template>
<script>
//    import store from '../store'
    export default{
        data() {
            return {title:'欢迎来到首页'}
        },
//        store
    }
</script>