<template>
    <div>
        {{status}}
        {{orderList}}
        {{roomInfo}}
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    name:'OrderHome',
    computed: {
        ...mapState({
            status: state => state.order.orderStatus,
            orderList: state => state.order.orderList,
            roomInfo: state => state.roomInfo,
        }),
       
    },
    created(){
        //调用actions
        this.$store.dispatch('getCartServerData', 175);
    },
    
}
</script>


<style scoped>

</style>








