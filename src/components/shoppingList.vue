<template>
  <div class="shopping-list">
    <ul class="product-list">
      <li class="product" v-for="item in this.$store.state.shoppingList" :key="item.id">
        <div class="product-select-panel">
          <input type="checkbox" class="product-checkbox" name="product-checkbox">
          <label for="product-checkbox" class="product-info">
            <div class="product-image-wrapper">
              <img :src="item.image" alt="" class="product-image">
            </div>
          </label>
        </div>
        <div class="product-description">
          <div class="product-name-wrapper">
            <span class="product-name">{{item.name}}</span>
          </div>
          <div class="specification-wrapper">
            <span class="specification">{{item.specification}}</span>
            <span class="specification">{{item.subSpecification}}</span>
          </div>
          <div class="price-wrapper">
            <span class="unit-price">${{item.price}}</span>
          </div>
        </div>
        <div class="control-panel">
          <div class="quantity-control-panel">
            <button class="quantity-up" @click="quantityControl">
              +
            </button>
            <input type="number" min="0" v-model="item.quantity" class="quantity">
            <button class="quantity-down" @click="quantityControl(item.id)">
              -
            </button>
          </div>
          <div class="gross-price-wrapper">
            <span class="gross-price">$300</span>
          </div>
          <button class="btn delete" @click="deleteItem">
            刪除
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return{
      shoppingList: ''
    }   
  },
  methods:{
     quantityControl(e){
       if(e.target.className === 'quantity-up'){
         console.log('quantity up')
         this.quantity ++
       } else if(e.target.className === 'quantity-down'){
         console.log('quantity down')
         this.quantity > 0 ? this.quantity -- : this.quantity = 0
       }
     },
     getShoppingList(){
       this.shoppingList = localStorage.getItem('jujube45')
     },
     deleteItem(){
       console.log(this.$store.state.shoppingList)
       console.log(this.$store.state.shoppingCartQuantity)
     }
  }
}
</script>


<style lang="scss" scoped>
  // *{
  //   border: 0.1px solid red;
  // }
  .quantity::-webkit-outer-spin-button,
  .quantity::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .product{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid $main-gray;
    height: 120px;
    .product-select-panel{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 25%;
      height: 100%;
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
    }
    .product-description{
      width: 45%;
      text-align: center;
      .product-name-wrapper{
        width: 100%;
        span{
          display: block;
        }
      }
      .specification-wrapper{
          .specification{
            display: block;
          }
      }
      .price-wrapper{
        width: 100%;
        span{
          display: block;
        }
      }
    }
    .control-panel{
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .quantity-control-panel{
        width: 90%;
        button{
          width: 25%;
          max-width: 50px;
        }
        .quantity{
          width: 40%;
          text-align: center;
        }
      }
      .delete{
        
      }
      .gross-price-wrapper{
        display: none;
      }
    }

  }
  @media screen and (min-width: 700px) {
    .product{
      .product-description{
        display: flex;
        align-items: center;
        width: 60%;
        .product-name-wrapper, .price-wrapper{
          width: 25%;
        }
        .specification-wrapper{
          width: 50%;
        }
      }
      .control-panel{
        display: flex;
        justify-content: center;
        .gross-price-wrapper{
          display: block;
        }
      }
    }
  }
</style>