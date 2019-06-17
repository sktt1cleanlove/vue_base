<template>
  <div>
    <h3>{{count.title}}</h3>
    <h4>{{count.count}}</h4>
    <h4>{{cartTitle}}</h4>
    <br>

    <template>
      <el-table :data="changePrice" border style="width: 100%">
        <el-table-column prop="id" label="编号" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
      </el-table>
    </template>
  </div>
</template>
        
        <button @click="increment">点击</button>
    </div>
</template>

<script>
export default {
  name: "CommunityActivity",
  data() {
    return {
       
    };
  },

  computed: {
    // 获取store中的state
    count() {
      return this.$store.state.testData;
    },
    //获取cart模块的state
    cartTitle() {
      return this.$store.state.cart.title;
    },
    //获取store中的getters
    changePrice() {
      return this.$store.getters.changePrice;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  },
  

};
</script>

<style scoped>
</style>

