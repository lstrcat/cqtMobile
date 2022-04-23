<script setup>
import { ref } from 'vue'
import { NModal,NLayout,NLayoutContent,NLayoutFooter,NLayoutHeader,NLayoutSider } from 'naive-ui'
import { NInput,NButton,NCard, NIcon, NDivider, NImage, NCollapse, NCollapseItem, NCarousel, NGrid, NGridItem,NGi} from 'naive-ui'
import { apiGetZsInfo } from '../api/zhenghu'

defineProps({
  msg: String
})

const getAssetsImage = (name) => {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}
const count = ref(0)
const showModal = ref(false)
const showModalZhengshu = ref(false)
const rnumber = ref(null)

function sub2sub(data, s1, s2) {
    let n1 = data.indexOf(s1)
    if(n1 > 0) {
    let n2 = data.indexOf(s2, n1 + s1.length)
      if(n2 > 0){
        let cc = data.substring(n1,n2)
      //  console.log(cc)
        let suffix = "<td style=\"text-align:center;\">"
        let ns = cc.indexOf(suffix)
        if(ns > 0) {
          let result = cc.substr(ns + suffix.length, cc.length - ns - suffix.length)
        //  console.log(result)
          return result
        }
      }
    }
    return ""
}

function decQueryResult(data) {
  let Conclusion = sub2sub(data,"Conclusion</td>","</td>")
  let ReportNumber = sub2sub(data,"Report Number</td>","</td>")
  let Mass = sub2sub(data,"Total Mass</td>","</td>")
  let RefIndex = sub2sub(data,"Refractive index</td>","</td>")
  let Magnif = sub2sub(data,"Magnification Test</td>","</td>")
  let OptChara = sub2sub(data,"Optical Characteristics</td>","</td>")
  let Mark = sub2sub(data,"Mark</td>","</td>")
  let Remarks = sub2sub(data,"Remarks</td>","</td>")
  let auther = sub2sub(data,"Authorizer</td>","</td>")

  return { 
    Conclusion: Conclusion, 
    ReportNumber: ReportNumber,
    Mass: Mass,
    RefIndex: RefIndex,
    Magnif: Magnif,
    OptChara: OptChara,
    Mark: Mark,
    Remarks: Remarks,
    auther: auther
    }
}

const queryNumber = () => {


  let param = { "u": "xg.m." + rnumber.value}
  console.log(param)

  apiGetZsInfo(param).then((res) => {
		
    let data = res
    let obj = decQueryResult(data)
    console.log(obj)
	})
}

</script>

<template>
  <n-modal v-model:show="showModal">
    <n-card
      title="证书查询"
      :bordered="false"
      role="dialog"
      aria-modal="true"
    >
      <n-input v-model:value="rnumber" type="text" placeholder="输入证书编号" />
      <template #footer>
        <n-button @click="queryNumber">查询</n-button>
      </template>
    </n-card>
  </n-modal>

  <div class="cards">
  <n-grid x-gap="0" :cols="2">
    <n-gi>
      <div class="cardbtn">
          <n-button @click="showModal = true">
            证书查询
          </n-button>
      </div>
    </n-gi>
    <n-gi>
      <div class="cardbtn">
          <n-button @click="showModal = true">
            在线送检
          </n-button>        
      </div>
    </n-gi>
  </n-grid>
  </div>



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
.cards{
  margin: 20px;
}
.cardbtn{
  width: 140px;
  height: 80px;
  border-radius:10px;
  border: 1px solid #eeeeee;
  box-shadow: 0 0 6px rgba(18, 133, 96, 0.12);  
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
