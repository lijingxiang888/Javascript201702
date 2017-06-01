import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // 初始安装

export default new Vuex.Store({
   state: {
        liwenli: 0
    },
    // getters: { // 计算属性
    //     newCount(state){
    //         console.log(state);
    //         return state.liwenli+20
    //     }
    // },
    mutations: { // 配合devtool使用
       addFn(state){ // state状态对象
           state.liwenli ++; // 响应state
       }
    },
    actions: {
       modState(context) {
            context.commit('addFn'); //由actions 提交到 mutations => state
       }
    }
});