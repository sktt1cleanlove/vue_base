import Vue from 'vue'
import Vuex from 'vuex'
import CartMoudle from '@/store/cart/Cart'

Vue.use(Vuex)

//先加载
const state = {
    // 测试数据
    testData:{
        count:2,
        title:'测试Vuex',
    },
}

const mutations = {
    increment(state){
        state.testData.count++;
    }
}



const store = new Vuex.Store({
    modules:{
        cart:CartMoudle,
    },
    state,
    mutations,
})



export default store;