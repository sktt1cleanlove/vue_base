import {OrderEnums, OrderType} from '@/utils/OrderEnums'

const state = {
    orderStatus: OrderEnums.STRAT,
    orderList:[
        {id:1, name:'蔬菜', type: OrderType.BILL},
        {id:2, name:'工具', type: OrderType.DIAN_ZI},
        {id:3, name:'书籍', type: OrderType.FILE},
    ],
}

const getters = {
    filterOrderList(state){
        let orderList = state.orderList;
        orderList.filter(o => o.id>1)
    }
}

export default {
    state,
    getters,
};