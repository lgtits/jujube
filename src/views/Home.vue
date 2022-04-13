<template>
  <div class="home">
    <Header />
    <ComputerHeader />
    <img alt="Vue logo" src="../assets/image/logo.png" />
    <div>
      覓棗晨， 覓/蜜 飽水灌溉，清脆甜蜜 棗/找 棗子分級，品質第一 晨/陳
      清晨採收，注入朝氣 傳承百年的覓棗晨滿載著陳家三代對栽種的熱愛與執著。
      生根於高雄阿蓮的在地小農陳爺爺，秉持著農夫應有的良心與責任，
      選擇友善耕作的模式，降低對環境衝擊的影響。
      在這超過三十年的棗子園裡，每一次的收成，都可以看出陳爺爺四季裏對一顆顆棗兒的悉心照顧，
      施肥、灌溉、整枝、授粉、疏果、採收，每一個環節都不鬆懈，
      看見每位顧客大口咬下，露出滿足的表情，就是對覓棗晨最大的支持！
      也期望能持續散播這份幸福甘甜，讓更多人品嚐到覓棗晨的美好。
      想欲呷棗仔，就來找陳家！
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import ComputerHeader from "../components/computerHeader.vue";
import Footer from '../components/footer.vue'

export default {
  name: "Home",
  components: {
    Header,
    ComputerHeader,
    Footer
  },
};
</script>

<style lang="scss">

</style>

