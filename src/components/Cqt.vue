<script setup>
import {  h,ref } from "vue";
import { NH1,NH2,NH3,NH4,NH5,NH6,NAffix,NTag } from 'naive-ui'
import router from "../router";
import { useRouter,useRoute } from "vue-router"


const r = useRouter()
const route = useRoute()

const goBack = (name) => {
  r.push({
      path: '/home'
  })
}

const containerRef = ref(null);

</script>

<template>

<div class="absolute-anchor-container">
    <div ref="containerRef" class="container">
        <n-affix
        :trigger-top="10"
        position="absolute"
        :listen-to="() => containerRef"
        >
        <div class="el-backtop">
            <router-link class="link" :to="{ name: 'brief' }">
            简介
            </router-link>
        </div>
        <div class="el-backtop2">
            <router-link class="link" :to="{ name: 'certs' }">
            资质证书
            </router-link>
        </div>
        <div class="el-backtop3">
            <router-link class="link" :to="{ name: 'claim' }">
            公正性声明
            </router-link>
        </div>
        <div class="el-backtop4" @click="goBack">
            返回首页
        </div>        
        </n-affix>
        <router-view name="renshi"></router-view>
    </div>    
    
</div>


 
 	
</template>

<style scoped>
.absolute-anchor-container {
  width: 100%;
  position: relative;
}

.container {
  overflow: auto;
}
.el-backtop:hover {
    background: linear-gradient(to right,#c5e4c4,#aed1ac,#a0c59d);
}

.link{
    text-decoration:none;
    color:#717171;
}
.link:hover{
    color:#faf1f7;
}

.el-backtop2:hover {
    background: linear-gradient(to right,#c5e4c4,#aed1ac,#a0c59d);
}
.el-backtop3:hover {
    background: linear-gradient(to right,#c5e4c4,#aed1ac,#a0c59d);
}
.el-backtop {
    position: absolute;
    background-color: #fff;
    top:35px;
    width: 60px;
    height: 25px;
    border-radius: 1%;
    color: #999;
    display: flex;
    font-size: x-small;
    align-items: center;
    justify-content: center;
    border: 1px solid #e3f3f0;
    box-shadow: 0 0 6px rgba(18, 133, 96, 0.12);
    cursor: pointer;
    z-index: 5;
}
.el-backtop2 {
    position: absolute;
    top:60px;
    background-color: #fff;
    width: 60px;
    height: 25px;
    border-radius: 1%;
    color: #999;
    display: flex;
    font-size: x-small;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 6px rgba(18, 133, 96, 0.12);
    border: 1px solid #e3f3f0;
    cursor: pointer;
    z-index: 5;
}
.el-backtop3 {
    position: absolute;
    top:85px;
    background-color: #fff;
    width: 60px;
    height: 25px;
    border-radius: 1%;
    color: #999;
    display: flex;
    font-size: x-small;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 6px rgba(18, 133, 96, 0.12);
    border: 1px solid #e3f3f0;
    cursor: pointer;
    z-index: 5;
}
.el-backtop4 {
    position: absolute;
    top:110px;
    background-color: #fff;
    width: 60px;
    height: 25px;
    border-radius: 1%;
    color: #999;
    display: flex;
    font-size: x-small;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 6px rgba(18, 133, 96, 0.12);
    border: 1px solid #e3f3f0;
    cursor: pointer;
    z-index: 5;
}
</style>