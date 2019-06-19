import Vue from 'vue'
import Vuex from 'vuex'
import CartMoudle from '@/store/cart/Cart'
import OrderModule from '@/store/order/Order'
import VideoApi from '@/api/videoApi'

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
    roomInfo:{},
}

const getters = {
    changePrice(state){
        return state.cartList.filter(c => c.id > 0);
    },

}

//所有需要修改state里的数据都是在mutations中完成
const mutations = {
    increment(state){
        state.testData.count++;
    },
    del(state, param){
        state.cartLis
        let index;
        for(let i = 0; i< state.cartList.lenth; i++){
            if(cartList[i].id === param.id){
                index = i;
                break;
            }
        }
        state.cartList.splice(index,1);
    },

    setCartList(state, param){
        state.roomInfo = param.roomInfo;
    },
}

const actions = {
    async getCartServerData(context, id){
        const res =  await VideoApi.getVideoInfo(id);
        context.commit('setCartList', {roomInfo:res.data.res});

    }
}



const store = new Vuex.Store({
    modules:{
        cart: CartMoudle,
        order: OrderModule,
    },
    state,
    getters,
    mutations,
    actions,
})


export default store;