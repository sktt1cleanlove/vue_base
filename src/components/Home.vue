<template>
    <div>
        <div id="vueCarousel">
            <VueCarousel></VueCarousel>
        </div>
        <div id= "vueContent">
            <el-row>
                <el-col :span="4" v-for="(b, index) in breads" :key="b.id" :offset="index">
                    <el-card :body-style="{ padding: '0px', margin:'0px'}">
                    <img :src="b.url" class="image" height="340px">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate() }}</time>
                            <el-button type="text" class="button" @click="breadDetail">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>   
            </el-row>
        </div>
    </div>
</template>

<script>
import VueCarousel from './VueCarousel'


export default {
    name:'Home',
    data(){
        return{
            currentDate:new Date(),
            breads:[
                {id:1, title:'bread1', url:require('../assets/bread/bread1.png')},
                {id:2, title:'bread2', url:require('../assets/bread/bread1.png')},
                {id:3, title:'bread3', url:require('../assets/bread/bread1.png')},
                {id:4, title:'bread4', url:require('../assets/bread/bread1.png')},
            ],
        }
    },
    methods:{
        breadDetail(){
            this.$router.push('/breadDetail');
        },
    },
    components:{
        VueCarousel,
    },
    
}
</script>


<style scoped>
   .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }

    
element.style {
    padding: 0px;
    margin: 0px;
}
.el-card__body {
    padding: 20px;
}
user agent stylesheet
div {
    display: block;
}
.el-card{
    width: 280px;
}

.el-col{
     width: 280px;
}

</style>


