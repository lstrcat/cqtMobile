<template>
  <div id="app">
    <!-- 用 v-for 渲染文章列表 -->
    <Article v-for="article in articleList" :key="article.title" :article="article"></Article>
  </div>
</template>

<script>
// 引入组件
import Article from './Article.vue';

const getAssetsImage = (name) => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

export default {
  name: 'app',
  // 注册组件
  components: {
    Article
  },
  data: function() {
    return {
      articleList: [
        {
          cover: getAssetsImage('cv1.jpg'),
          title: '压制琥珀的六大特征',
          time: '2022-04-01 14:40:00',
          content:
            '1、暗红色丝状体。压制琥珀在其压制过程中，会遗留下颜色较深的血丝状颗粒表层的痕迹，在紫外荧光下观察得更清楚。天然琥珀由于温度、湿度等条件的影响有时候也会炸裂,形成的裂隙也会被氧化成红色,但其呈树枝状沿裂隙而不是沿颗粒的边缘分布。'
        },
        {
          cover: getAssetsImage('cv2.jpg'),
          title: '什么是红宝石',
          time: '2022-03-21 18:51:00',
          content:
            '红宝石是色美、透明的宝石级刚玉。红宝石的英文名称是Ruby，来源于拉丁文“Ruber”，意思是红色。'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>

