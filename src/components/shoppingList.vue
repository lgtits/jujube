<template>
  <div class="shopping-list">
    <ul class="product-list">
      <li class="product">
        <input type="checkbox" class="product-checkbox" name="product-checkbox">
        <label for="product-checkbox" class="product-info">
          <div class="product-image-wrapper">
            <img src="../assets/image/product1.jpg" alt="" class="product-image">
          </div>
          <span class="product-name">雪麗棗</span>
        </label>
        <div class="specification-wrapper">
          <span class="specification">4.5A-超大大</span>
          <span class="specification">(每顆平均4.5兩以上)</span>
        </div>
        <div class="price-wrapper">
          <span class="unit-price">$300</span>
        </div>
        <div class="quantity-control-panel">
          <button class="quantity-down">
            -
          </button>
          <input type="number" min="0" v-model="quantity" class="quantity">
          <button class="quantity-up">
            +
          </button>
        </div>
        <div class="gross-price-wrapper">
          <span class="gross-price">$300</span>
        </div>
        <button class="btn delete">
          刪除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return{
      quantity:"1"
    }   
  },
  methods:{

  }
}
</script>


<style lang="scss" scoped>
  .quantity::-webkit-outer-spin-button,
  .quantity::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .product{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid $main-gray;
    .product-checkbox{
      height: 20px;
      width: 20px;
      background-color: yellow;
    }
    .product-info{
      display: flex;
      height: 100%;
      align-items: center;
      margin: 0;
      .product-image-wrapper{
        width: 80px;
        height: 80px;
        img{
          height: 100%;
          width: 100%;
          object-fit:cover;
        }
      }
    }
    .specification-wrapper{
        text-align: center;
        
        .specification{
          display: block;
        }
    }
    .quantity-control-panel{
      width: 100px;
      button{
        width: 25%;
      }
      .quantity{
        width: 50%;
        text-align: center;
      }
    }
  }

</style>