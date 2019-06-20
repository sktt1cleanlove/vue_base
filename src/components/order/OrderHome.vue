<template>
    <div>
        {{status}}
        {{orderList}}
        {{roomInfo}}
         {{count}}
        {{cartList}}

        
        <button @click="getTestMapAction1">mapAction1</button><br>
        <button @click="getActionFrom">mapAction2</button><br>
        <button @click="setCount1">setCount1</button><br>
        <button @click="setCountMutations">setCount2</button><br>
        <button @click="setCartList">setCartList</button><br>
        
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name:'OrderHome',
    data(){
        return {
            cartListToMutation: this.cartList,
        }
    },
    computed: {
        ...mapState({
            count: state => state.count,
            status: state => state.order.orderStatus,
            orderList: state => state.order.orderList,
            roomInfo: state => state.roomInfo,
            cartList: state => state.cartList,
        }),
       
    },

    //
    methods:{
        //action中不带参数的方法(直接调用)
        ...mapActions(['getTestMapAction1', 'getTestMapAction2']),
        //action中带参数的方法(需要再写一个方法来调用)
        getActionFrom(){
            this.getTestMapAction2(33);
        },

        //mutations
        ...mapMutations(['setCount1', 'setCount2', 'setCartList']),
        setCountMutations(){
            this.setCount2(3);
        },

    },



    created(){
        //调用actions
        //this.$store.dispatch('getCartServerData', 175);
    },
    
}
</script>


<style scoped>

</style>








