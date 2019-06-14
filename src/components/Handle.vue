<template>
    <div class="container">
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col :span="12">
                        <h5>默认颜色</h5>
                        <el-menu :default-active="this.$router.path" router mode="horizontal">
                        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                            {{ item.navItem }}
                        </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name:'Home',
    data() {
        return {
            navList:[
                {name:'/handle/findProject',navItem:'发现项目'},
                {name:'/handle/communityActivity',navItem:'社区动态'},
                {name:'/handle/publishProject',navItem:'发布项目'},
                {name:'/handle/personalCenter',navItem:'个人中心'},
                {name:'/handle/manageCenter',navItem:'管理员中心'},
            ],
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    
}
</script>


<style scoped>
    
    .el-aside {
        color: #333;
        text-align: center;  
    }
    
    .el-main {
        color: #333;
        text-align: center;
        display: flex;
        justify-content: center;
        border: 1px solid red;

    }

    
    body > .el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .el-main{
        width: 100%;
    }
    .el-container{
        width: 100%;
        float: left;
        margin-top: -50px;
    }

</style>


