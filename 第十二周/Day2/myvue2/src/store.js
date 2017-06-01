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

export default new Vuex.Store({
    // state: { // 数据状态
    //     count: 0
    // }
    state // state:state
});