<template>
    <div>
        <h3>{{count.title}}</h3>
        <h4>{{count.count}}</h4>
        <h4>{{cartTitle}}</h4>
        <button @click="increment">点击</button>
    </div>
</template>

<script>
export default {
    name:"CommunityActivity",
    data(){
        return{

        }
    },
    
    computed:{
        // 获取store中的state
        count(){
            return this.$store.state.testData;
        },
        //
        cartTitle(){
            return this.$store.state.cart.title;
        }
    },
    methods:{
        increment(){
            this.$store.commit('increment');
        }
    },
}
</script>

<style scoped>

</style>

