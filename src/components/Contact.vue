<script setup>
import {  h } from "vue";
import { NH1,NH2,NH3,NH4,NH5,NH6 } from 'naive-ui'
import { NImage,NGrid,NGridItem,NGi } from 'naive-ui'

const getAssetsImage = (name) => {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}

</script>

<template>
    <div class="content">
    <div>
    证书查询专线：010-87249817
    </div>
    <div>
    服务时间：周一至周五9:30-18:00 周日10:00-17:00
    </div>
    <div>
    检测业务热线：15102065138
    </div>
    <div>
    服务监督电话：15712850891
    </div>
    <div>
    全国服务热线：400-068-6161
    </div>
    <n-h6>中检质技（北京）金银珠宝质量检验中心丰台站</n-h6>
    <p>北京市丰台区南木樨园84号方仕国际黄金珠宝城2-27</p>
    <n-h5>中检质技（北京）金银珠宝质量检验中心华林站</n-h5>
    <p>广州市荔湾区康王路华林国际B馆二楼B12</p>
    <n-h5>中检质技（北京）金银珠宝质量检验中心国际站</n-h5>
    <p>华林国际C馆C区4楼4099</p>
    <n-h5>中检质技（北京）金银珠宝质量检验中心平洲站</n-h5>
    <p>佛山市平洲玉器街平东大道38号首层</p>
    </div>
</template>

<style scoped>
.content{
    background: #f3f3f3;
    border-radius:15px;
    padding: 20px;
}
.content > p{
    text-align: left;
    padding-bottom:10px;
}
</style>