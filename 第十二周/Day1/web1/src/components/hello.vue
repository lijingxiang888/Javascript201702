<template>
   <div id="hello" >
       <img src="../assets/logo.png" alt="">
       <img src="../assets/vuex1.png" alt="">
       <h3>{{title}}</h3>
       <h4>{{title}}</h4>
   </div>
</template>

<script>
   export default {
       name: 'hello',
       data() {
           return {title: 'hello a sdfsdf!'}
       }
   }
</script>

<!--<style scoped>-->
  <!--h3 {-->
      <!--color: red;-->
  <!--}-->
<!--</style>-->
<style lang="less" scoped>
    #hello{
       h3 {
           color: red;
       }
       h4 {
           color: blue;
       }
    }

</style>