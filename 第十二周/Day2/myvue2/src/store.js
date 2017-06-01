/**
 * Created by liwenli on 2017/6/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count: 0,
    say: 'hello vex!'
};

const mutations = {
    modState(state, n = 2){
    state.count += n;
   },
    subState(state, n = 4){
        state.count -= n;
    }
};

export default new Vuex.Store({
    // state: { // 数据状态
    //     count: 0
    // }
    state, // state:state
    mutations, // mutations: mutations
    actions:{
       // aMode(context) { // commit dispatch
       //     console.log(context);
       //     context.commit('modState'); // 提交到mutations 发布 modState事件
       //     context.commit('subState');
       // }
        aMode({commit}) { // es6 解构赋值 {commit} commit dispatch
            commit('modState'); // 提交到mutations 发布 modState事件
            // commit('subState');
        }
    },
    getters: { // store的计算属性
        newCount(state) {
            return state.count + 20;
        }
    }
});