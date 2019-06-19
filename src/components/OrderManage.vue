<template>
    <div class="container">
        <header class="o-header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for='breadCrumb in breadCrumbList' :key='breadCrumb.id' :to="{ path: breadCrumb.url }">{{breadCrumb.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <div class="o-body">
            <router-view></router-view>
        </div>
        <footer class="o-footer"></footer>
    </div>
</template>

<script>
export default {
    name:'OrderManage',
    data(){
        return{
            breadCrumbList:[
                {id:1, name:'首页', url: '/orderManage/orderHome'},
                {id:2, name:'活动管理', url: '/orderManage/orderManager'},
                {id:3, name:'活动列表', url: '/orderManage/orderList'},
                {id:4, name:'活动详情', url: '/orderManage/orderDetail'},
            ],
        }
    },
}
</script>

<style scoped>
    /* div{
        border: 1px solid black;
    } */

    .container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    /*    header */
    .o-header{
        height: 50px;
        width: 100%;
        border-bottom: 2px solid #909399;
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .el-breadcrumb__inner {
        font-size: 18px;
    }

    /*    body    */

    .o-body{
        width: 80%;
        height: 600px;
    }

    .o-footer{
        width: 100%;
        height: 50px;
        border-top:2px solid #909399;
    }
</style>
