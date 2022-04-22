<script setup>
import {  h } from "vue";
import { NH1,NH2,NH3,NH4,NH5,NH6 } from 'naive-ui'

const menuOptions = [
  {
    whateverLabel: "简介",
    whateverKey: "hear-the-wind-sing"
  },
  {
    whateverLabel: "资质证书",
    whateverKey: "a-wild-sheep-chase"
  }
];

</script>

<template>
    <div class="content">
        <n-h3 style="color:#7ea08d;">
            中检质技（北京）金银珠宝质量检验中心 
        </n-h3>
        

        <div class="gline"></div>
        <p>
            中检质技（北京）金银珠宝质量检验中心，机构总部在北京，英文名称：Technical quality of China Jewelery Quality Testing Center，简称：CQT（中国CQT），经国家市场监管部门按照《检验检测机构资质认定评审准则》的严格审查，依法取得资质认定证书（CMA），可以向社会出具具有证明作用的数据和结果的检验检测机构；同时通过中国合格评定国家认可委员会按照《检测和校准实验室能力认可准则》严格考核认可，取得国家实验室认可证书（CNAS），被列入国际互认组织的机构之一，出具的检验报告和鉴定证书国际认可。        
        </p>
        <p>
            我们根植中国沃土，以本土化的专业服务，传递和共享全球化的信赖与认可，凭借专业的检测技术，致力于保障珠宝品质与安全，推动管控与合规，促进优化与创新，助力珠宝行业绿色可持续发展。自2008年成立以来，已设有多个分支机构，每年可出具上百万份具有公信力的检测报告。服务珠宝领域进出口企业、厂商、拍卖行、典当行、消费者及公、检、法客户10万多家。
        </p>
        <p>
            我们关注万千消费者身边存在的隐患，护航品质生活；我们守护众多企业在价值链中的合理利益，确保公平交易和有序贸易；我们协助相关部门发现市场中存在的风险，推动行业健康发展。
        </p>
        <p>
            作为中国第三方金银珠宝检测服务领先者，中检质技将不断创新和探索，开启新征程，遵循新的愿景和使命，不忘初心，砥砺奋进，与全球客户及合作伙伴诚信随行，缔造美好生活。
        </p>
        <n-h3 style="color:#7ea08d;">
            中心文化
        </n-h3>
        <div class="gline"></div>

        <n-h5>使   命</n-h5>
        <div>用通俗易懂的方式为您解读珠宝检测，让您与我们一样的专业</div>
        <n-h5>愿   景</n-h5>
        <div>成为消费者最值得信赖的珠宝检测品牌</div>
        <n-h5>宗   旨</n-h5>
        <div>专注珠宝检测，为客户创造价值，为员工提供更好的发展平台</div>     
        <n-h5>价值观</n-h5>
        <div>仁善：心地纯洁、乐善好施、善心常驻</div>
        <div>专业：技术专业、服务专业、管理专业</div>
        <div>创新：思维创新、技术创新、模式创新</div>
        <div>高效：行动必快、行必有果、果必过关</div>
        <n-h5>服务承诺</n-h5>
        <div>客户满意，中国CQT的终极目标</div>
        <div>保障消费者权益，中国CQT的永恒承诺</div>             
    </div>
</template>

<style scoped>
.content{
    background: #f3f3f3;
    border-radius:15px;
    padding: 20px;
}
.content > p{
    text-align: left;
    text-indent:2em; 
    padding-bottom:10px;
}
.gline{
    height: 1px;    
    background:linear-gradient(to left,#f3f3f3,#d8E6b6,#f3f3f3);
}
</style>