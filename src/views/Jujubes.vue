<template>
  <div class="jujubes">
    <Header />
    <ComputerHeader />
    <main class="products">
      <Sidebar />
      <div class="main-content">
        <h1>
          棗子 & 棗子糖
        </h1>
        <div class="jujube-box">
          <ProductCard 
            :initial-jujube="jujube" 
            v-for="jujube in jujubes"
            :key="jujube.id"
          />
        </div>
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
      'id': 1,
      'name': '雪麗棗 4.5A',
      'image':'https://i.imgur.com/gpfAb8E.jpg',
      'specification':'超大大(每顆平均4.5兩)',
      'subSpecification':'顆數: 16 ± 1',
      'price': 750,
      'quantity': 0
    },
    {
      'id': 2,
      'name': '雪麗棗 4A',
      'image':'https://i.imgur.com/gpfAb8E.jpg',
      'specification':'超大(每顆平均4.0-4.4兩)',
      'subSpecification':'顆數: 18 ± 1',
      'price': 600,
      'quantity': 0
    },
    {
      'id': 3,
      'name': '雪麗棗 3.5A',
      'image':'https://i.imgur.com/gpfAb8E.jpg',
      'specification':'頂級(每顆平均3.5-3.9兩)',
      'subSpecification':'顆數: 21 ± 1',
      'price': 500,
      'quantity': 0
    },
    {
       'id': 4,
      'name': '雪麗棗 3A',
      'image':'https://i.imgur.com/gpfAb8E.jpg',
      'specification':'特級(每顆平均3.0-3.4兩)',
      'subSpecification':'顆數: 24 ± 1',
      'price': 400,
      'quantity': 0
    },
    {
      'id': 5,
      'name': '柴燒棗子糖',
      'image':'https://i.imgur.com/gLE8CD3.jpg',
      'specification':'頂級蜜棗製作',
      'subSpecification':'顆數: 10 ± 1',
      'price': 150,
      'quantity': 0

    }
  ],
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
      jujubes: [],
      others:[]
    }
  },
  created(){
    this.jujubes = productData.jujubes
    this.others = productData.others
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
