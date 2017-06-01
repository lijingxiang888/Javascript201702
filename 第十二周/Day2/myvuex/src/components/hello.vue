<template>
    <div id="hello">
        <h3>组件hello</h3>
        <h4>{{title}}</h4>
        <p>{{$store.state.liwenli}}</p>
    </div>
</template>
<script>
//    import store from '../store'
    export default {
        data(){
            return {title: 'hello vuex!'}
        },
//        store
    }
</script>