<script setup>
import { ref } from 'vue'
import { NModal,NLayout,NLayoutContent,NLayoutFooter,NLayoutHeader,NLayoutSider } from 'naive-ui'
import { NEmpty,NTable,NInput,NButton,NCard, NIcon, NDivider, NImage, NCollapse, NCollapseItem, NCarousel, NGrid, NGridItem,NGi} from 'naive-ui'
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
const showModalSongjian = ref(false)
const showModalImgs = ref(false)
const rnumber = ref(null)   //证书编号
const zsObj = ref({
  Has: false
}) //证书结果

function sub2sub(data, s1, s2, suffix) {
    let n1 = data.indexOf(s1)
    if(n1 > 0) {
    let n2 = data.indexOf(s2, n1 + s1.length)
      if(n2 > 0){
        let cc = data.substring(n1,n2)
      //  console.log(cc)
        let ns = cc.indexOf(suffix)
        if(ns >= 0) {
          let result = cc.substr(ns + suffix.length, cc.length - ns - suffix.length)
        //  console.log(result)
          return result
        }
      }
    }
    return ""
}

function decQueryResult(data) {

  //证书图片
  let img = sub2sub(data,"<img src=\"https://img","\">", "<img src=\"")

  let sfxItem = "<td style=\"text-align:center;\">"

  let Conclusion = sub2sub(data,"Conclusion</td>","</td>",sfxItem)
  let ReportNumber = sub2sub(data,"Report Number</td>","</td>",sfxItem)
  let Mass = sub2sub(data,"Total Mass</td>","</td>",sfxItem)
  let RefIndex = sub2sub(data,"Refractive index</td>","</td>",sfxItem)
  let Magnif = sub2sub(data,"Magnification Test</td>","</td>",sfxItem)
  let OptChara = sub2sub(data,"Optical Characteristics</td>","</td>",sfxItem)
  let Mark = sub2sub(data,"Mark</td>","</td>",sfxItem)
  let Remarks = sub2sub(data,"Remarks</td>","</td>",sfxItem)
  let auther = sub2sub(data,"Authorizer</td>","</td>",sfxItem)

  let found = false
  if(ReportNumber.length > 0){
    found = true
  }

  return { 
    Has : found,
    Img : img,
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
    zsObj.value = obj
	})

  showModal.value = false
  showModalZhengshu.value = true
}

</script>

<template>
  <n-modal v-model:show="showModal" transform-origin="center">
    <n-card
      title="证书查询"
      :bordered="false"
      role="dialog"
      aria-modal="true"
      style="width: 300px; position: fixed; left: 50%; top: 25%; margin-left: -150px;"
    >
      <n-input v-model:value="rnumber" type="number" placeholder="输入证书编号" />
      <template #footer>
        <n-button @click="queryNumber">查询</n-button>
      </template>
    </n-card>
  </n-modal>

  <n-modal v-model:show="showModalZhengshu" preset="dialog" title="查询结果">

    <div v-if="zsObj.Has == false">
      <n-empty description="没有查询到结果"></n-empty>
    </div>
    <div v-else>
      <div style="text-align:center;">
        <n-image width="100" :src="zsObj.Img"/>
      </div>
    </div>
     <n-table :single-line="false" size="small">
      <tbody>
        <tr>
          <td>检测结论<br>Conclusion</td>
          <td>{{zsObj.Conclusion}}</td>
        </tr>
        <tr>
          <td>证书编号<br>Report Number</td>
          <td>{{zsObj.ReportNumber}}</td>
        </tr>
        <tr>
          <td>总质量<br>Total Mass</td>
          <td>{{zsObj.Mass}}</td>
        </tr>
        <tr>
          <td>折射率<br>Refractive index</td>
          <td>{{zsObj.RefIndex}}</td>
        </tr>
        <tr>
          <td>放大检查<br>Magnification Test</td>
          <td>{{zsObj.Magnif}}</td>
        </tr>
        <tr>
          <td>光性特征<br>Optical Characteristics</td>
          <td>{{zsObj.OptChara}}</td>
        </tr>
        <tr>
          <td>托注<br>Mark</td>
          <td>{{zsObj.Mark}}</td>
        </tr>    
        <tr>
          <td>备注<br>Remarks</td>
          <td>{{zsObj.Remarks}}</td>
        </tr> 
        <tr>
          <td>签发人<br>Authorizer</td>
          <td>{{zsObj.auther}}</td>
        </tr>                                                     
      </tbody>
    </n-table>  

        
  </n-modal>

  <n-modal v-model:show="showModalSongjian">
    <n-card
      title="在线送检"
      :bordered="false"
      role="dialog"
      aria-modal="true"
      style="width: 300px; position: fixed; left: 50%; top: 25%; margin-left: -150px;"
    >
      跳转到小程序   
     
    </n-card>
  </n-modal>

  <n-modal v-model:show="showModalImgs">
  <n-image
    width="100"
    :src="getAssetsImage('yang.png')"
  />
  </n-modal>

  <div class="cards">
  <n-grid x-gap="0" :cols="2">
    <n-gi>
      <div class="cardbtn" @click="showModal = true">
     
            <div class="cardtitle">
              <div class="ztitle">证书查询</div>
              <div class="entitle">QUERY</div>
            </div>
            <img class="cardimg" :src="getAssetsImage('query.png')" />
      </div>
      
    </n-gi>
    <n-gi>
      <div class="cardbtn" @click="showModalSongjian = true">
     
            <div class="cardtitle">
              <div class="ztitle">在线送检</div>
              <div class="entitle">CENSORSHIP</div>
            </div>
            <img class="cardimg" :src="getAssetsImage('query.png')" />
      </div>
    </n-gi>
  </n-grid>
  </div>



  <n-image 
  height="250"
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


  <div style="margin-top:20px;">
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
  </div>


  <div class="card" @click="showModalImgs = true">
      <div class="card-label">证书样式</div>
      <img class="card-img"
        object-fit="scale-down"
        :src= "getAssetsImage('zsbg.png')"
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
  margin-top: 20px;
  margin-bottom: 20px;
}
.cardbtn{
  width: 160px;
  height: 70px;
  border-radius:5px;
  border: 1px solid #eeeeee;
  box-shadow: 0 0 6px #e0f3f0; 
  display: flex;
}
.cardtitle{
  margin:auto;
}
.ztitle{
  font-size: large;
  color: #6d6d6d;
}
.entitle{
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: x-small;
  border-radius:8px;
  border: 1px solid #eeeeee;
  background: #a9d2ad;
  color: white;
}
.cardimg{
  width: 50px;
  height: 50px;
  margin: auto;
}
.card{
  align-content: center;
  justify-content: center;
  display: flex;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius:10px;
/*  border: 1px solid #eeeeee;*/
}
.card-img {
  height: 120px;
}
.card-label {
    position: absolute;
    padding: 40px;
    height: 30px;
    color: #94aea5;
    display: flex;
    font-size: x-large;
    align-items: center;
    justify-content: center;
    z-index: 5;
}
</style>
