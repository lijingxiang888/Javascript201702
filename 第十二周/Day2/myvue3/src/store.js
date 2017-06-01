import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{ // 驱动应用的数据源
        count: 10
    },
    mutations: { // 响应state变化
        modState(state, m = 2) {
            state.count +=m;
        }
    },
    actions: { // 派发mutations
        aMode({commit}, n){
            commit('modState', n)
        }
    },
    getters: { // store的计算属性
        newCount(state) {
            return state.count * 100
        }
    }
});