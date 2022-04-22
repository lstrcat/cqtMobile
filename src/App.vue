<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Cqt from './components/Cqt.vue'
import Baike from './components/Baike.vue'
import Contact from './components/Contact.vue'
import { NButton } from 'naive-ui'
import { NCard } from 'naive-ui'
import { NTabs } from 'naive-ui'
import { NTabPane } from 'naive-ui'
</script>

<template>
<div style="position: relative;"> 
    <img class="bg-head" src="./assets/bg.svg"> 
    <span class="title-top">国际互认珠宝检测机构</span> 
    <img alt="Vue logo" class="element-plus-logo" src="./assets/cqtlogo.png" />
  </div>

 
  <p class="title">珠宝检测 · 中检质技</p>

  <n-card title="" style="margin-bottom: 16px">
    <n-tabs default-value="home" justify-content="space-evenly" type="line">
      <n-tab-pane name="home" tab="主页">
        <HelloWorld msg="Hello Vue 3 + Vite" />
      </n-tab-pane>      
      <n-tab-pane name="oasis" tab="认识CQT">
        <Cqt />
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="科普百科">
        <Baike />
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="联系我们">
        <Contact />
      </n-tab-pane>
    </n-tabs>
  </n-card>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg-head {
  width: 100%;
}
.title-top {
  text-align:center;
  color: white;
  font-size: 0.5em;
  position: absolute; 
  letter-spacing:0.5em;
  top: 5%; 
  left: 50%;
  width: 120px;
  margin-left: -60px;
}
.title {
  margin-top: 6em;
  font-size: 0.5em;
  letter-spacing:0.5em;
}
.element-plus-logo {
  width: 30%;
  position: absolute; 
  top: 25%; 
  left: 37%;
}
</style>
