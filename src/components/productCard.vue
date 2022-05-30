<template>
  <div class="product-card">
    <div class="product-image">
      <img 
        :src="jujube.image" alt="" 
        v-b-modal="jujube.id"
        class="product-thumbnail"
      />
    </div>
    <!-- bootstrap modal -->
    <b-modal :id="jujube.id" title="BootstrapVue" hide-footer size="xl" class="vue-modal">
      <div class="pic-wrapper">
        <img :src="jujube.image" alt="" class="modal-image">
      </div>
    </b-modal>
    <div class="description">
      <p class="product-name">{{jujube.name}}</p>
      <p class="product-price">{{jujube.specification}}</p>
      <p class="product-price">{{jujube.subSpecification}}</p>
      <p class="product-price">{{jujube.price}} 元</p>
    </div>
    <div class="control-panel">
      <button class="quantity-control" @click="addQuantity">+</button>
      <input type="number" min="0" v-model="jujube.quantity" class="quantity">
      <button class="quantity-control" @click="minusQuantity">-</button>
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
      if(this.jujube.quantity ===0){
        return
      } else{
        if(this.jujube.name === '柴燒蜜棗糖'){
          alert(` ${this.jujube.name} ${this.jujube.quantity}包，成功加入購物車!`)
           localStorage.getItem(this.jujube.id) > 0 ? localStorage.setItem(this.jujube.id,  Number(localStorage.getItem(this.jujube.id)) + this.jujube.quantity) : localStorage.setItem(this.jujube.id, this.jujube.quantity)
          this.$store.commit('getShoppingCartQuantity')
          this.$store.commit('getShoppingList')
          this.jujube.quantity = 0
          
        } else {
          alert(` ${this.jujube.name} ${this.jujube.quantity}箱，成功加入購物車!`)
          localStorage.getItem(this.jujube.id) > 0 ? localStorage.setItem(this.jujube.id,  Number(localStorage.getItem(this.jujube.id)) + this.jujube.quantity) : localStorage.setItem(this.jujube.id, this.jujube.quantity)
          this.$store.commit('getShoppingCartQuantity')
          this.$store.commit('getShoppingList')
          this.jujube.quantity = 0
        }
      }

    },
    addQuantity(){
      this.jujube.quantity ++
    },
    minusQuantity(){
      if(this.jujube.quantity > 0){
        this.jujube.quantity -- 
      } else {
        this.jujube.quantity = 0
      }
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
    .product-thumbnail {
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
    height: 30px;
    .quantity-control{
      width: 10%;
      background-color: transparent;
      outline: none;
      border:none;
      border: 1px solid $main-gray;
      height: 100%;
      padding: none;
    }
    .quantity{
      width: 20%;
      background-color: transparent;
      text-align: center;
      height: 100%;
      outline: none;
      border:none;
      border-top: 1px solid $main-gray;
      border-bottom: 1px solid $main-gray;
      outline: none;
      padding: none;
    }
    .add-cart{
      color: $main-green;
      font-weight: 800;
      height: 100%;
      line-height: 100%;
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
// modal content
.pic-wrapper{
      .modal-image{
        width: 200px;
        height: 200px;
      }
}
</style>