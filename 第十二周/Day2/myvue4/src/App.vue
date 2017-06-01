<template>
  <div id="app">
     <h3>{{msg}}</h3>
    <button type="button" @click="getData">获取数据</button>
    <button type="button" @click="getHello">获取Hello</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      getData(){
          this.$http.get('/api').then(res => {
              console.log(res);
          }).catch(err => {
              console.log(err);
          })
      },
      getHello(){
          this.$http.get('/api/hello').then(res => {
              console.log(res);
          }).catch(err => {
              console.log(err);
          })
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
