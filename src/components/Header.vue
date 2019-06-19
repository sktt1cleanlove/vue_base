<template>
 <div class="header" :class="['headerStyle']">
    
    <img class="vueLogo" src="../assets/bread/logo.png"/>
    <el-menu :default-active="activeIndex" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><router-link to="/">首页中心</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/handle">处理中心</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/orderManage">订单管理</router-link></el-menu-item>
    <el-submenu index="4">
      <template slot="title">我的工作台</template>
        <el-menu-item index="4-1"><router-link to="/handle">选项1</router-link></el-menu-item>
        <el-menu-item index="4-2"><router-link to="/handle">选项2</router-link></el-menu-item>
        <el-menu-item index="4-3"><router-link to="/handle">选项3</router-link></el-menu-item>
    </el-submenu>  
   </el-menu>
 </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
       activeIndex: "1",
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },   

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
 .headerStyle{
   margin: 0px;
   position: relative;
   top: -60px;
 }
</style>



<style scoped>
  .header{
    position: relative;
    display: flex;
  }

  .el-menu{
    padding-left: 350px;
  }

  .el-menu-item{
    display: inline-flex;
  }

  a:-webkit-any-link { 
    text-decoration: none;
  }



</style>
