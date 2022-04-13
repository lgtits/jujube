<template>
  <div class="product-card">
    <div class="product-image">
      <img src="../assets/image/product1.jpg" alt="" />
    </div>
    <p class="product-name">蜜棗 (6粒裝)</p>
    <p class="product-price">2.5斤/盒 (含盒底重)</p>
    <p class="product-price">300 元</p>
  </div>
</template>

<script>

export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  data() {
    return{

    }
  },
}
</script>


<style lang="scss" scoped>
.product-card{
  width: 250px;
  height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid white;

  &:hover{
    border: 1px solid #99E64D;
  }
  .product-image{
    width: 200px;
    height: 200px;
    margin: 25px auto;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p{
    margin-bottom: 10px;
  }
}
</style>