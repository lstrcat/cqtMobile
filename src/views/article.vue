<script setup>
import { NIcon,NH4,NH5,NH6 } from 'naive-ui'
import { useRouter,useRoute } from "vue-router"


const router = useRouter()
const route = useRoute()

const goBack = (name) => {
  router.go(-1)
}

</script>

<template>
  <div class="header">
    <n-icon size="30" color="white" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77z" fill="currentColor"></path></svg>
    </n-icon>
  </div>
  <n-h6>{{route.params.title}}</n-h6>
  <p v-html="route.params.content"></p>
  
</template>
<style  scoped>
.header{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  background: #6f9673;
  width: 100%;
  height: 60px;
}

div > p{
  padding: 10px;
  text-align: left;
  text-indent:2em; 
}
</style>