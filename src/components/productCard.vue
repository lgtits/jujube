<template>
  <div class="product-card">
    <div class="product-image">
      <img src="../assets/image/product1.jpg" alt="" />
    </div>
    <p class="product-name">雪麗蜜棗 (16粒裝)</p>
    <p class="product-price">2.7公斤/盒 (含盒底重)</p>
    <p class="product-price">750 元</p>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.product-card {
  width: 250px;
  height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5px;

  &:hover {
    border: 1px solid $main-green;
  }
  .product-image {
    width: 200px;
    height: 200px;
    margin: 25px auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    margin-bottom: 10px;
    color: $main-color;
  }
}
</style>