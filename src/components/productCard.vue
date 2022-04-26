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
      <button>+</button>
        <input type="number" min="0" v-model="jujube.quantity" class="quantity">
      <button>-</button>
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
.product-card {
  width: 250px;
  height: 400px;
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
    .button{
      width: 25%;
    }
    .quantity{
      width: 25%;
    }
  }
} 
</style>