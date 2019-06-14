<template>
    <div class="public">
        <!-- header -->
        <div class="headerBox">
            <div class="logo">
                <img class="i_logo" src="@/assets/jianshu/logo.png" />
            </div>
            <div class="message">
                <PublicMessage/>
                <el-input :class="[{finputStyle:focusInputSize}, {binputStyle:blurInputSize}]" @focus="focusInputSizeF" @blur="blurInputSizeF" v-model="input" placeholder="请输入内容"><i slot="suffix" class="el-input__icon el-icon-search"></i></el-input>
            </div>
            <div class="loginInfo">
                <img src="@/assets/jianshu/logininfo.png"/>
            </div>
        </div>
        <!-- main -->
        <div class="contentBox">
            <div class="content">
                <!-- cau -->
                <div class="nav">
                    <PublicCarousel></PublicCarousel>
                </div>
                <div class="note"></div>
            </div>
            <div class="zaluan">
                <div class="tupian huiyuan">
                    <img class="imgZa tese" src="@/assets/jianshu/huiyuan.png"/>
                </div>
                <div class="tupian lianzai">
                    <img class="imgZa tese" src="@/assets/jianshu/lianzai.png"/>
                </div>
                <div class="tupian banquan">
                    <img class="imgZa tese" src="@/assets/jianshu/banquan.png"/>
                </div>
                <div class="tupian daxuetang">
                    <img class="imgZa tese" src="@/assets/jianshu/daxuetang.png"/>
                </div>

                <div class="shaoma">
                    <img class="imgZa i_shaoma" src="@/assets/jianshu/shaoma.png"/>
                </div>

                <div class="tupian kaifabaodian">
                    <img class="imgZa i_kaifabaodian" src="@/assets/jianshu/jinjiebaodian.png"/>
                </div>

                <div class="tupian zuozhetuijian"></div>

                <div class="tupian chakan">
                    <img class="imgZa i_chakan" src="@/assets/jianshu/dianji.png"/>
                </div>

                <div class="tupian fenxishi">
                    <img class="imgZa i_fenxishi" src="@/assets/jianshu/fenxishi.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PublicCarousel from './public/PublicCarousel'
import PublicMessage from './public/PublicMessage'

export default {
    name:'FindProject',
    data(){
        return{
            input:'',
            focusInputSize: false,
            blurInputSize:true,
        }
    },
    methods:{
         focusInputSizeF(){
             this.focusInputSize = true;
             this.blurInputSize = false;
         },
         blurInputSizeF(){
             this.blurInputSize = true;
             this.focusInputSize = false;
         }
    },
    components:{
        PublicCarousel,
        PublicMessage,
    }
}
</script>

<style scoped>
    div{
        border: 1px solid black;
    }


  /********* header ********/
    .headerBox{
        display: flex;
        justify-content: space-between;
    }

    .logo{
        width: 10%;
        height: 56px;
        margin-left: 30px;
    }

    .i_logo{
        height: 56px;
    }

    .message{
        width:50%;
        height: 56px;
        display: flex;
        justify-content: flex-start;
    }

   .binputStyle{
       margin-left: 10px;
       width: 200px;
       align-self:center;
       border-radius:50px;
   }

   .finputStyle{
       margin-left: 10px;
       width: 250px;
       align-self:center;
       border-radius:50px;
   }

    .loginInfo{
        width: 30%;
        height: 56px;
        margin-right: 30px;
    }

    /********* main ********/

    .contentBox{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .content{
        width: 484px;
        margin-left: -10px;
        display: flex;
        justify-content: center;
        /* 
            容器默认是不换行的，设置成wrap排不下换行
         */
        flex-wrap:wrap;
    }

    .nav{
        width: 484px;
        height: 210px;
        flex-shrink: 0;
    }

    .note{
        width: 484px;
        height: 300px;
        /* 
            item是默认缩小，设置成0大小不改变
         */
        flex-shrink: 0;
        margin-top: -360px;
    }


    .zaluan{
        width: 218px;
        margin-left: 10px;
    }

    .shaoma, .kaifabaodian, .zuozhetuijian, .chakan, .fenxishi{
        width: 218px;
    }

    .imgZa{
        width: 218px;
    }

    .tese{
        height: 39px;
    }

    .tupian{
        height: 39px;
        margin-bottom: 10px;
    }

    .shaoma{
        height: 66px;
        margin-bottom: 20px;
    }

    .i_shaoma{
        height: 66px;
    }
   
   .kaifabaodian{
       height: 160px;
   }

   .i_kaifabaodian{
       height: 160px;
   }

    .zuozhetuijian{
        height: 320px;
    }

   .chakan{
       height: 34px;
   }

   .i_chakan{
       height: 34px;
   }

   .fenxishi{
       height: 160px;
   }

   .i_fenxishi{
       height: 160px;
   }



</style>