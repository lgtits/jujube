<template>
  <div class="jujubes">
    <Header />
    <ComputerHeader />
    <main class="products">
      <Sidebar />
      <div class="main-content">
        <h1>
          棗子
        </h1>
        <div class="jujube-box">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <h1 class="other-product">
          棗子糖
        </h1>
        <ProductCard />
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
import ProductCard from "../components/productCard.vue";

const productData = {
  'jujubes': [
    {
      'name': 'jujube 1',
      'price': 100
    },
    {
      'name': 'jujube2',
      'price': 200
    }
  ],
  'others': [
    {
      'name': 'jujube candy',
      'price': 150
    }
  ]
}

export default {
  components: {
    Header,
    ComputerHeader,
    Sidebar,
    ProductCard,
    Footer
  },
  data(){
    return {
      products: []
    }
  },
  created(){
    this.products = productData.jujubes
  }
}

</script>

<style lang="scss" >
.jujubes{
  .main-content{
    padding: 20px;
    .jujube-box{
      display: flex;
      margin: 0 auto;
      justify-content: space-around;
      flex-flow: wrap;
    }
  }
}

  @media screen and (max-width: 700px) {
    .products{
      padding-top: 80px;
    }
  }

</style>
