<template>
  <div class="contact">
    <Header />
    <ComputerHeader />

    <h1>This is a contact page</h1>
    <div>
      111年覓棗晨-雪麗(梨)棗訂購專區
訂單成立匯款後會在3-5個工作天寄出商品,並通知客戶商品已寄出,敬請耐心等候!!
高雄市阿蓮區農會(代號:619)   匯款帳號:00082220754420  陳炎清先生
    </div>
    <div>
      <img src="../assets/image/table.jpg" alt="">
    </div>
    <!-- fb messenger -->
    <div class="messenger">
      <div id="fb-root"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import ComputerHeader from "../components/computerHeader.vue";
import Footer from '../components/footer.vue'

export default {
  components: {
    Header,
    ComputerHeader,
    Footer

  },
}
</script>

<style lang="scss">

</style>
