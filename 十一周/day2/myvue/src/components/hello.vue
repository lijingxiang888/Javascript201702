<template>
    <div id="hello">
      <h3 @click="say">{{title}}</h3>
    </div>
</template>

<script>
export default {
   data(){
       return {title: 'hello vue.js'}
   },
    methods: {
       say() {
           alert(this.title);
       }
    }
}
</script>

<style>

</style>