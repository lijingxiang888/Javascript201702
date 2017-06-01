import Vue from 'vue'
// import App from './App.vue'
// import Index from './components/index.vue'
// import News from './components/news.vue'

import {Index, News} from './components'
import store from './store'
new Vue({
  el: '#app',
  // render: h => h(App)
  components: {
    Index,
    News
  },
  store // 注入到根组件
});
