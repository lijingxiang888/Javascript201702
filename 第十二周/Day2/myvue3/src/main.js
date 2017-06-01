import Vue from 'vue'
import {Index, Hello} from './components'
// import myStore from './store'
import store from './store'
new Vue({
  el: '#app',
  components: {
     Index,
     Hello
  },
  // store: myStore // 注入store
    store
});
