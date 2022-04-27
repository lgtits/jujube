<template>
  <div class="product-card">
    <div class="product-image">
      <img 
        :src="jujube.image" alt="" 
      />
    </div>
    <div class="description">
      <p class="product-name">{{jujube.name}}</p>
      <p class="product-price">{{jujube.specification}}</p>
      <p class="product-price">{{jujube.subSpecification}}</p>
      <p class="product-price">{{jujube.price}} 元</p>
    </div>
    <div class="control-panel">
      <button class="quantity-control">+</button>
        <input type="number" min="0" v-model="jujube.quantity" class="quantity">
      <button class="quantity-control">-</button>
      <button class="add-cart" @click="addCart()">加入購物車</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialJujube: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      jujube: this.initialJujube,
    };
  },
  methods:{
    addCart(){
      alert('成功加入購物車!')
    }
  }
};
</script>


<style lang="scss" scoped>
  .quantity::-webkit-outer-spin-button,
  .quantity::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
.product-card {
  width: 250px;
  height: 430px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5px;
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
  .description{
    p {
      margin-bottom: 10px;
      color: $main-color;
    }
  }
  .control-panel{
    width: 100%;
    .quantity-control{
      width: 10%;
      background-color: transparent;
      outline: none;
      border: 1px solid black;
      height: 30px;
            padding: none;
    }
    .quantity{
      width: 20%;
      background-color: transparent;
      text-align: center;
      height: 30px;
      border:none;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      outline: none;
      padding: none;
    }
    .add-cart{
      color: $main-green;
      font-weight: 800;
      line-height: 20px;
      background-color: white;
      border: 4px solid $main-green;
      border-radius: 10px;
      outline: none;
      margin-left: 10px;
      &:hover{
        color: $main-yellow;
        border: 4px solid $main-yellow;
      }
    }
  }
} 
</style>