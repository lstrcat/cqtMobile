<script setup>
import { ref } from 'vue'
import { NLayout,NLayoutContent,NLayoutFooter,NLayoutHeader,NLayoutSider } from 'naive-ui'
import { NCard, NIcon, NDivider, NImage, NCollapse, NCollapseItem, NCarousel} from 'naive-ui'

defineProps({
  msg: String
})

const getAssetsImage = (name) => {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}
const count = ref(0)

</script>

<template>

  <n-image 
  width="250"
  :src="getAssetsImage('xcxm.jpg')"
  >

  </n-image>

<n-carousel autoplay>
    <img
      class="carousel-img"
      src="/src/assets/diamond1.png"
    >
    <img
      class="carousel-img"
      src="/src/assets/diamond2.png"
    >
    <img
      class="carousel-img"
      src="/src/assets/diamond3.png"
    >
  </n-carousel>


	<router-link style="text-decoration:none;" to='/page1'>
    <n-card :bordered="false" content-style="padding: 0;" header-style="padding: 0;">
    <n-layout>
      <n-layout-header>我们的优势</n-layout-header>
      <n-layout has-sider>
        <n-layout-sider >
          OUR ADVANTAGES
        </n-layout-sider>
        <n-layout-content >
          <n-icon size="20" :depth="3">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" fill="currentColor"></path></svg>
          </n-icon>   
        </n-layout-content>
      </n-layout>
    </n-layout>   
    </n-card> 
  </router-link>
  <n-divider />
	<router-link style="text-decoration:none;" to='/page2'>
    <n-card :bordered="false" content-style="padding: 0;" header-style="padding: 0;">
    <n-layout>
      <n-layout-header>关于我们</n-layout-header>
      <n-layout has-sider>
        <n-layout-sider >
          ABOUT US
        </n-layout-sider>
        <n-layout-content >
          <n-icon size="20" :depth="3">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" fill="currentColor"></path></svg>
          </n-icon>          
        </n-layout-content>
      </n-layout>
    </n-layout>  
    </n-card>
  </router-link>



  <div class="card">
      <div class="card-label">证书样式</div>
      <n-image
        width="300"
        height="150"
        object-fit="cover"
        :src= "getAssetsImage('yang.png')"
      />      
  </div>  
    
 
</template>

<style scoped>
a {
  color: #458a6e;
}
.n-layout-header{
  text-align: left;
  font-size: large;
  color: #458a6e;
}
.n-layout-footer {
  padding: 24px;

}

.n-layout-sider {
  padding-left: 24px;
  text-align: left;
  font-size: small;
}

.n-layout-content {
  text-align: right;
}

.carousel-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.n-card {
  max-height: 200px;
}
.card{
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius:10px;
  border: 1px solid #eeeeee;
  box-shadow: 0 0 6px rgba(18, 133, 96, 0.12);
}
.card-label {
    position: absolute;
    padding: 20px;
    height: 30px;
    color: #94aea5;
    display: flex;
    font-size: x-large;
    align-items: center;
    justify-content: center;
    z-index: 5;
}
</style>
