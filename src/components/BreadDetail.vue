<template>
    <div>
        <el-container>
            <!-- header -->
            <el-header>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item v-for="(d) in detailRouter" :to="{ path: d.url }" :key="d.id">{{d.name}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <!-- main -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name:'BreadDetail',
    data(){
        return{
            detailRouter:[
                {id:1, name:'详情首页', url:'/breadDetail'},
                {id:2, name:'详情列表', url:'/breadDetail/detailList'},
                {id:3, name:'详情活动', url:'/breadDetail/detailWork'},
            ],
        }
    }
}
</script>

<style scoped>
    .el-header{
        /* background-color: #B3C0D1; */
        color: #333;
        text-align: center;
        line-height: 60px;
        padding: 14px 20px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container{
        margin-top: -50px;
    }
  
  
</style>


