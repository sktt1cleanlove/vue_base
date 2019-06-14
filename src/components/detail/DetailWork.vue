<template>
    <div>
        <div class="header"></div>
        <div class="nav"></div>
        <div class="contentBox">
            <div class="content"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailWork'
}
</script>

<style scoped>
    .header, .nav, .content, .bar, .contentBox{
        border: 1px solid black;
    }

    .header{
        height: 100px;
        width: 100%;
    }

    .nav{
        height: 34px;
        width: 100%;
    }
    
    .contentBox{
        display: flex; 
        justify-content: center;
    }

    .content{
        width: 60%;
        height: 500px;
        /* background-color: aqua; */
        margin-left: -20px;
    }

    .bar{
        width: 30%;
        height: 500px;
        /* background-color: azure; */
        margin-left: 20px;
    }

</style>