<template>
  <div class="home">
    <Header />
    <ComputerHeader />
    <main>
      <div>
        購物車
      </div>
      <ShoppingList />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import ComputerHeader from "../components/computerHeader.vue";
import ShoppingList from '../components/shoppingList.vue';
import Footer from '../components/footer.vue'

export default {
  name: "Cart",
  components: {
    Header,
    ComputerHeader,
    Footer,
    ShoppingList
  },
};
</script>

<style lang="scss" scoped>
  main{
    margin: 20px auto;
  }
</style>

