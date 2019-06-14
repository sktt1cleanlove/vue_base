<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" style="height:56px" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-view"></i>发现</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-star-off"></i>关注</el-menu-item>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-bell"></i>消息</template>
                <el-menu-item index="3-1"><i class="el-icon-tickets"></i>评论</el-menu-item>
                <el-menu-item index="3-2"><i class="el-icon-message"></i>简信</el-menu-item>
                <el-menu-item index="3-3"><i class="el-icon-upload2"></i>投稿请求</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name:'PublicMessage',
    data(){
        return{
            activeIndex: '1',
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>

<style scoped>

</style>
