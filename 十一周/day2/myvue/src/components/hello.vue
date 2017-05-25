<template>
    <div id="hello">
      <h3 @click="say">{{title}}</h3>
        <div class="oDiv">sdf</div>
    </div>
</template>

<script>
    console.log(200);
export default {
   data(){
       return {title: 'hello vue.js11'}
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