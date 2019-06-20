import Vue from 'vue'
import Vuex from 'vuex'
import CartMoudle from '@/store/cart/Cart'
import OrderModule from '@/store/order/Order'
import VideoApi from '@/api/videoApi'
import ModuleA from '@/store/namespace/ModuleA'
import ModuleB from '@/store/namespace/ModuleB'

Vue.use(Vuex)

//先加载
const state = {
    // 测试数据
    count: 1,
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

    setCount1(state){
        state.count++;
    },

    setCount2(state, id){
        state.count +=id;
    },

    //map修改map
    setCartList(state, param){
        console.log('cartList')
       state.cartList = param.roomInfo;
    },
}

const actions = {
    async getCartServerData(context, id){
        const res =  await VideoApi.getVideoInfo(id);
        context.commit('setCartList', {roomInfo:res.data.res});
    },

    //
    getTestMapAction1(context){
        console.log("test mapAction1:");
    },

    getTestMapAction2(context, id){
        console.log("test mapAction2:" +id);
    }
}



const store = new Vuex.Store({
    modules:{
        cart: CartMoudle,
        order: OrderModule,
        moduleA: ModuleA,
        moduleB: ModuleB,
    },
    state,
    getters,
    mutations,
    actions,
})


export default store;