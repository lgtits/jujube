<template>
  <div class="home">
    <Header />
    <ComputerHeader />
    <main>
      <h2 class="title">
        購物車
      </h2>
      <ShoppingList />
      <TotalAmount />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import ComputerHeader from "../components/computerHeader.vue";
import ShoppingList from '../components/shoppingList.vue';
import TotalAmount from '../components/totalAmount.vue';
import Footer from '../components/footer.vue'

export default {
  name: "Cart",
  components: {
    Header,
    ComputerHeader,
    Footer,
    ShoppingList,
    TotalAmount
  },
};
</script>

<style lang="scss" scoped>
  main{
    padding-top: 60px;
    h2{
      margin: 20px;
    }
  }

  @media screen and (min-width: 700px) {
    main{
      padding-top: 0;
      .title{
        margin-top: 10px;
      }
    }
  }
</style>

