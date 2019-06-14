<template>
 <!-- <div :class="['headerStyle']">
    <el-menu :default-active="activeIndex" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页中心</el-menu-item>
    <el-menu-item index="2">处理中心</el-menu-item>
    <el-submenu index="3">
      <template slot="title">我的工作台</template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item>
   </el-menu>
 </div> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       activeIndex: "1",
    }
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
 .headerStyle{
   margin: 0px;
   height: 100px;
   border: 1px solid black;
   position: relative;
   top: -60px;
 }
</style>

<style scoped>


  .el-menu{
    padding-left: 460px;
  }

.btn {
  padding-left:10px;
}

</style>
