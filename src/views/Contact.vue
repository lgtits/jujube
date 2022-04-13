<template>
  <div class="contact">
    <Header />
    <ComputerHeader />

    <h1>This is a contact page</h1>
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
