<template>
  <div class="jujubs">
    <Header />
    <ComputerHeader />
    <h1>This is a product page</h1>
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
    <Footer />
  </div>
</template>

<script>
import Header from '../components/header.vue'
import ComputerHeader from "../components/computerHeader.vue";
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

<style lang="scss">
  .jujube-box{
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    flex-flow: wrap;
  }
</style>
