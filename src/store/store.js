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
    cartList:[
        {id:1, name:'电器', price:6},
        {id:2, name:'蔬菜', price:7},
        {id:3, name:'水果', price:2},
        {id:4, name:'书籍', price:8},
    ],
}

const getters = {
    changePrice(state){
        return state.cartList.filter(c => c.id > 0);
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
    getters,
    mutations,
})



export default store;