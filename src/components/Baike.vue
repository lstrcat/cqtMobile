<template>
  <div id="app">
    <!-- 用 v-for 渲染文章列表 -->
    <Article v-for="article in articleList" :key="article.title" :article="article"></Article>
  </div>
</template>

<script setup>
// 引入组件
import Article from './Article.vue';
import { NButton } from 'naive-ui'

const emit = defineEmits(["change"]);
const handleClick = () => {
  // 必须经过defineEmits声明，不然方法无效！
  emit("change", "home");
};

const getAssetsImage = (name) => {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

const  articleList = [
        {
          cover: getAssetsImage('cv1.jpg'),
          title: '压制琥珀的六大特征',
          time: '2022-04-01 14:40:00',
          content:
            '1、暗红色丝状体。压制琥珀在其压制过程中，会遗留下颜色较深的血丝状颗粒表层的痕迹，在紫外荧光下观察得更清楚。天然琥珀由于温度、湿度等条件的影响有时候也会炸裂,形成的裂隙也会被氧化成红色,但其呈树枝状沿裂隙而不是沿颗粒的边缘分布。<br />2、动、植物包裹体。在显微镜下放大观察,压制琥珀内部一般无法见到完整的动、植物包裹体。琥珀最主要的价值体现在其化石价值,一般情况下,如果有内含物的琥珀原料是不会用来制造压制琥珀的。<br /><img src="http://www.chinacqtc.com/upload/articleImages/2016052014341867webwxgetmsgimg1.jpg"><br />3、气泡。天然琥珀中存在大量的气泡,压制琥珀的气泡更丰富。压制琥珀除琥珀本身包含的气泡外,颗粒与颗粒之间以及搅动过程中都会形成新的气泡。气泡不规则地分布于整块琥珀中,密集、细小,经过热处理,同样也会炸裂成睡莲状琥珀花,只是特别细小,且多为定向排列,一层一层地非常密集,这是由于压制琥珀在冷凝过程中经常被施以定向的压力,致使颗粒之间的接触更加紧密。<br />4、流动构造。压制琥珀都明显或不明显地表现出流动构造特征。琥珀在压制过程中以及在熔融时间足够长的情况下,分子会通过对流、扩散或者通过人工干预等使内部的血丝趋于完全扩散,各颗粒之间的界限不明显,内部看起来非常均一,使压制琥珀中出现流动构造。但天然琥珀中不能排除这种构造的存在,所以这只是鉴定压制琥珀的一个参考性依据。<br />5、未熔融颗粒。在有些压制琥珀内部可以观察到未被熔融的固体琥珀颗粒,它们棱角分明,在显微镜下可以看到颗粒整体(或局部) 边缘的轮廓,是压制琥珀所独有的包裹体特征--固体琥珀颗粒包裹体。这是由于压制琥珀在加热的过程中受热不均匀或未达到全部熔融造成的。<br />6、发光性。多数情况下,天然琥珀在长波紫外光下具有明显的白蓝色、蓝绿色等强度不等的荧光,在短波下不明显。压制琥珀也具有此荧光性质。在紫外荧光灯下,压制琥珀的边缘和轮廓被显现出来,可以清晰地看清楚单个个体的结合和颗粒的形状,观察有暗红色血丝状体的样品,可以看到颗粒的界线沿着丝状体分布。'
        },
        {
          cover: getAssetsImage('cv2.jpg'),
          title: '什么是红宝石',
          time: '2022-03-21 18:51:00',
          content:
            '红宝石是色美、透明的宝石级刚玉。红宝石的英文名称是Ruby，来源于拉丁文“Ruber”，意思是红色。 <br /><br />    红宝石以其晶莹剔透的美丽颜色，被古代人们蒙上神秘的超自然的色彩，被视为吉祥之物。早在古埃及、古希腊和古罗马，被用来装饰清真寺、教堂和寺院，并作为宗教仪式的贡品。它也曾与钻石、珍珠一起成为英帝国国王、俄国沙皇皇冠上和礼服上不可缺少的饰物。自从近 百年宝石进入民间以来，红宝石分别跻身于世界五大珍辰石之列，是人们珍爱的宝石品种。世界宝石学界定红宝石为七月的生辰石。<br /><br />    世界红宝石产地不多，主要有缅甸、斯里兰卡、泰国、澳大利亚、中国等，但就宝石质量而言，以缅甸、斯里兰卡质量最佳。'
        }
  ]
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>

