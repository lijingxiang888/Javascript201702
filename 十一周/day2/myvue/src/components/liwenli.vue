<template>
    <div id="liwenli">
        <button @click="flag=!flag">显示</button>
        <div class="oDiv" v-show="flag"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {flag: true}
        }
    }
</script>

<style scoped>
.oDiv {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 20px auto;
}
</style>