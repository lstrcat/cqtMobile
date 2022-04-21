<template>
  <div class="article">
    <div class="article-cover">
      <img :src="article.cover" alt="">
    </div>
    <div class="info">
      <div class="article-title">{{ article && article.title }}</div>
      <div class="article-time">{{ formatTime }}</div>
      <div class="article-content">
          <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
          {{ article.content }}
          </n-ellipsis>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
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
  padding: 10px 0;
  border-bottom: 1px solid #dbdbdb;
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
    }
  }
  .article-content, .article-time {
    font-size: 14px;
  }
  .article-time {
    margin: 10px 0;
    color: #c5c5c5;
  }
}
</style>

