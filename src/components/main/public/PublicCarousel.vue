<template>
    <div>
        <div class="block">
            <el-carousel trigger="click" height="210px">
            <el-carousel-item v-for="navData in navDataList" :key="navData.id">
                <a href="http://www.baidu.com"><img :src="navData.url" style="height:210px;"/></a>
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name:'PublicCarousel',
    data(){
        return{
            navDataList:[
                {id:1, name:'茶点', url:require('@/assets/jianshu/chadiangushi.png')},
                {id:2, name:'幸运', url:require('@/assets/jianshu/xingyunshouzhang.png')},
            ],
        }
    }
}
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>


