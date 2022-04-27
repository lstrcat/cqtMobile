<template>
<router-link style="text-decoration:none;" :to="{name:'Detail',params:{'title':article.title, 'content': article.content}}">
  <div class="article">
    <div class="article-cover">
      <img :src="article.cover" alt="">
    </div>
    <div class="info">
      <div class="article-title">{{ article && article.title }}</div>
      <div class="article-content">
        {{ brief }}
      </div>     
    </div>    
  </div>
      <div class="footer">
        <div class="article-author">中检质技</div>
        <div class="article-time">{{ formatTime }}</div>
      </div>  
</router-link>
   
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { NEllipsis } from 'naive-ui'


  // 接收父组件传来的 article 对象

    const props = defineProps({
        article : {}
    })


    const formatTime = computed(() => {
    
        const dt = new Date(props.article.time)
        const month = dt.getMonth()
        const date = dt.getDate()
        console.log("月",month)
        console.log("日",date)

        return month + '月' + date + '日'
    })

    const brief = computed(() => {
        return props.article.content.substr(0, 35) + '...';
    })  

</script>

<style lang="scss" scoped>
.article {
  display: flex;
  padding: 5px 0;
  &:last-child {
    border: none;
  }
  .article-title {
    font-size: 16px;
    font-weight: 500;
    color: #42b983;
    text-align: justify;
  }
  .article-cover {
    flex: none;
    width: 120px;
    margin-right: 10px;
    > img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .article-content {
    font-size: 14px;
    color: #76819d;
  }
  .article-time {
    color: #c3c8d5;
  }
}

  .article-author {
    color: #a0a8ba;
  }
  .article-time {
       text-align: right;
    color: #a0a8ba;
  }
  .footer{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    border-bottom: 1px solid #f7f9fc;
  }
</style>

