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
        <n-h4 style="color:#7ea08d;">中检质技（北京）金银珠宝质量检验中心 </n-h4>
        <div class="gline"></div>

        <n-h6 style="color:#737373;">资质证书概览</n-h6>
        <n-image
          height="200"
          :src= "getAssetsImage('zzzs.png')"
        />
        <div class="gline"></div>
        <p></p>

        <div class="parent">
          <div class="son1">
            <n-image
              height="110"
              :src= "getAssetsImage('syrz.png')"
            />
          </div>
          <div class="son2">
            <n-image
            height="110"
              :src= "getAssetsImage('syrzen.png')"
            />
          </div>
        </div>

    </div>
</template>

<style scoped>
.content{
    background: #f5f5f5;
    border-radius:15px;
    padding: 20px;
}
.content > p{
    text-align: left;
    text-indent:2em; 
    padding-bottom:10px;
}
.gline{
    height: 1px;    
    background:linear-gradient(to left,#f3f3f3,#d8E6b6,#f3f3f3);
}
.light-green {
  background-color: #eeeeee;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}

.parent {
	display: flex;
}

.son1 {
  padding: 4px;
	width: 110px;
	background-color: #efefef;
	margin:auto;
  margin-right: 0px;
}
.son2 {
  padding: 4px;
	width: 110px;
	background-color: #efefef;
	margin:auto;
  margin-left: 0px;
}
</style>