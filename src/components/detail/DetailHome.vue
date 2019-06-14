<template>
    <div class="bread_detail">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="title" style="height:80px; top:-50px;">
                    面包
                </div> 
            </div>
            <div class="text item">
                <img src="@/assets/bread/bread1.png" width="228px" height="229px"/>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name:'DetailHome'
}
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 60%;
    }

    .bread_detail{
        display: flex;
        justify-content: center;
    }

    .el-card__header{
        font-size: 16px;
        position: relative;
    }
    .title{
        top:-50px;
    }


</style>

