import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // 初始安装

export default new Vuex.Store({
   state: {
        liwenli: 'hello vuex.store!'
    }
});