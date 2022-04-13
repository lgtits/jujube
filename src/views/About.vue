<template>
  <div class="about">
    <Header />
    <ComputerHeader />
    <h1>This is an about page</h1>

  </div>
</template>

<script>
import Header from '../components/header.vue'
import ComputerHeader from "../components/computerHeader.vue";

export default {
  components: {
    Header,
    ComputerHeader
  },
}

</script>

<style lang="scss">

</style>
