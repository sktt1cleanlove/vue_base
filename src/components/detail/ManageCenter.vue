<template>
    <div>
        <!-- manager_center -->
        {{Size}}
    </div>
</template>



<script>
//非默认导入
//1.导入的名称需要大括号
//2.导入的名称不是文件的名称，是导出的变量名
import {SizeEnums} from '@/utils/TestEnums'

export default {
    name:'ManageCenter',
    data(){
        return{
            Size:SizeEnums.LARGE,
        }
    },
}
</script>



<style scoped>

</style>
