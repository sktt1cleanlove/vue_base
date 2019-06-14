<template>
    <div>
        <el-carousel :interval="2000" type="card" height="200px" :autoplay=true>
            <el-carousel-item v-for="(img, i) in homeImages" :key="img.id">
                <!-- 属性的值动态值一定要绑定 -->
                <img :src="img.url" height="200px" width="720px">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "VueCarousel",
     data() {
        return {
            homeImages:[
                {id:1, title:'vue1', url:require('../assets/jianshu/chadiangushi.png')},
                {id:2, title:'vue2', url:require('../assets/jianshu/xingyunshouzhang.png')},
                {id:3, title:'vue3', url:require('../assets/jianshu/jinjiebaodian.png')},
            ],
        }
    },
}
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>


