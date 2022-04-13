<template>
  <div class="news">
    <Header />
    <ComputerHeader />
    <h1>This is a news page</h1>
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
    Footer,
  },
}

</script>

<style lang="scss">

</style>
