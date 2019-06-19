<template>
    <div>
        <!-- manager_center -->
        <p>{{Size}}</p>
        <p>{{SizeProperties}}</p>
        <p>{{SizePropertiesCode}}</p>
        <p>{{SizePropertiesName}}</p>
    </div>
</template>



<script>
//非默认导入
//1.导入的名称需要大括号
//2.导入的名称不是文件的名称，是导出的变量名
import {
         SizeEnums, 
         SizeEnumsProperties,
} from '@/utils/TestEnums'

export default {
    name:'ManageCenter',
    data(){
        return{
            Size: SizeEnums.LARGE,
            SizeProperties: SizeEnumsProperties.P_SAMMLL,
            SizePropertiesCode: SizeEnumsProperties.properties[SizeEnumsProperties.P_SAMMLL].code,
            SizePropertiesName: SizeEnumsProperties.properties[SizeEnumsProperties.P_SAMMLL].name,
        }
    },
}
</script>



<style scoped>

</style>
