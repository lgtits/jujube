<template>
  <div class="contact">
    <Header />
    <ComputerHeader />
    <main class="contact-info">
      <!-- <div>
        111年覓棗晨-雪麗(梨)棗訂購專區
        訂單成立匯款後會在3-5個工作天寄出商品,並通知客戶商品已寄出,敬請耐心等候!!
        高雄市阿蓮區農會(代號:619)   匯款帳號:00082220754420  陳炎清先生
      </div> -->
      <div class="info">
        <div class="content phone">
          <p class="info-title"><font-awesome-icon icon="fa-solid fa-phone" /> 電話客服</p>
          <p class="info-account">00-0000000</p>
          <P class="info-time">電話客服時間：星期一～星期五，09:00～18:00</P>
        </div>
        <div class="content line">
          <p class="info-title"><font-awesome-icon icon="fa-brands fa-line" /> LINE 客服</p>
          <p class="info-account">ID: @XXXXXXX</p>
          <P class="info-time">LINE 客服時間：星期一～星期五，09:00～18:00</P>
        </div>
      </div>
      <ContactUs />
      <!-- fb messenger -->
      <div class="messenger">
        <div id="fb-root"></div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import ComputerHeader from "../components/computerHeader.vue";
import Footer from '../components/footer.vue'
import ContactUs from '../components/contactUs.vue'

export default {
  components: {
    Header,
    ComputerHeader,
    Footer,
    ContactUs
  },
}
</script>

<style lang="scss">
  .contact-info{
    padding-top: 80px;
    margin-bottom: 20px;
    .info{
      width: 80%;
      margin: 0 auto;
      .content {
        padding: 16px;
        border: 1px solid rgb(179, 178, 178);
        border-radius: 5px;
        margin-bottom: 16px;
        .info-title{
        font-size: 20px;
        margin-bottom: 16px;
        }
        .info-account{
          color: $main-green;
          margin-bottom: 16px;
        }
      }
    }
  }
  @media screen and (min-width: 700px) {
    .contact-info{
      .info{
        width: 60%;
      }
    }
  }
</style>
