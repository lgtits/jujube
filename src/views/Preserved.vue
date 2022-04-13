<template>
  <div class="jujubes">
    <Header />
    <ComputerHeader />
    <main class="products">
      <Sidebar />
      <div class="content">
        <h1>
          棗子糖介紹
        </h1>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import ComputerHeader from "../components/computerHeader.vue";
import Sidebar from '../components/sidebar.vue'
import Footer from '../components/footer.vue'


export default {
  components: {
    Header,
    ComputerHeader,
    Sidebar,
    Footer
  },
  data(){
    return {
      products: []
    }
  },
}

</script>

<style lang="scss" scoped>
  .content{
    padding: 20px;
  }
</style>
