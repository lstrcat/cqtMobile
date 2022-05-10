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
    <n-h5>北京总部</n-h5>
    <div>证书查询：010-87249817</div>
    <div>服务时间：工作日：9:30-11:30 ，14:00-17:30</div>
    <div>质量监督：15712850891</div>
    <div>全国服务热线：400-068-6161</div>

    <n-h5>广州分中心</n-h5>
    <div>广州市荔湾区康王南路293号华林国际B馆二楼B12</div>
    <div>广州市荔湾区康王中路305号华林国际C馆C区4楼4099</div>
    <div class="tel">业务合作：15102065138</div>

    <n-h5>佛山分中心</n-h5>
    <div>佛山市南海区桂城街道平东大道138号首层</div>
    <div class="tel">业务合作：15914438896</div>

    </div>
</template>

<style scoped>
.content{
    text-align: left;
    background: #f3f3f3;
    border-radius:15px;
    padding: 20px;
}

.tel{
    font-weight: bold;
}
.content > p{
    text-align: left;
    padding-bottom:10px;
}
</style>