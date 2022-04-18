<template>
  <div class="home">
    <Header />
    <ComputerHeader />
    <main>
      <div>
        購物車
      </div>
    </main>
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

<style lang="scss" scoped>
  main{
    padding: 60px;
  }
</style>

