<template>
  <div class="home">
    <Header />
    <ComputerHeader />
    <main>
      <div>
        購物車
      </div>
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
  }
</style>

