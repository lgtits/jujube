<template>
  <div class="shopping-list">
    <ul class="product-list">
      <li class="product" v-for="item in this.$store.state.shoppingListFiltered" :key="item.id" >
        <div class="product-select-panel" >
          <!-- <input type="checkbox" class="product-checkbox" name="product-checkbox"> -->
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
            <button class="quantity-up" @click="addQuantity(item)">
              +
            </button>
            <input type="number" min="0" v-model="item.quantity" class="quantity">
            <button class="quantity-down" @click="reduceQuantity(item)">
              -
            </button>
          </div>
          <div class="gross-price-wrapper">
            <span class="gross-price">$300</span>
          </div>
          <button class="btn delete" @click="deleteItem(item.id)">
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
      shoppingList: []
    }   
  },
  methods:{
     addQuantity(item){
       item.quantity ++
      localStorage.setItem(item.id, item.quantity)
      this.$store.commit('getShoppingCartQuantity')
      this.$store.commit('getShoppingList')
     },
     reduceQuantity(item){
       if(item.quantity === 1) {
         localStorage.setItem(item.id, 0)
         this.$store.commit('getShoppingList')
       }
       item.quantity --
       localStorage.setItem(item.id, item.quantity)
         this.$store.commit('getShoppingCartQuantity')
         this.$store.commit('getShoppingList')
     },
     deleteItem(id){
       localStorage.setItem(id, 0)
       this.$store.commit('getShoppingList')
     }
  },
  created(){
    this.$store.commit('getShoppingList')
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
    padding: 10px;
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
      margin-left: 10px;
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
            font-size: 0.9rem;
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
        margin-left: 30px;
        button{
          width: 20%;
          max-width: 50px;
          outline: none;
          border:none;
          border: 1px solid $main-gray;
          background-color: white;
        }
        .quantity{
          width: 35%;
          text-align: center;
          outline: none;
          border:none;
          border-top: 1px solid $main-gray;
          border-bottom: 1px solid $main-gray;
        }
      }
      .delete{
        &:hover{
          color: $main-yellow;
        }
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
          .specification{
          font-size: 1rem;
          }
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