<template>
  <div class="amount-wrapper
  ">
    <div class="amount">
      <h2>
        總金額: {{this.$store.state.totalAmount.toLocaleString('en-US')}}
      </h2> 
    </div>
    <div class="checkout-wrapper">
      <router-link to="/jujubes" class="return">← 繼續選購</router-link>
      <button class="checkout" @click="checkout">結賬 →</button>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    checkout(){
      console.log('結賬')
    }
  },
}
</script>


<style lang="scss" scoped>
  .amount-wrapper{
    border-top: 1px solid $main-gray;
    .amount{
      margin: 20px;
    }
    .checkout-wrapper{
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 20px;
      .return{
        width: 30%;
        font-weight: 800;
        font-size: 20px;
        line-height: 50px;
        font-weight: 800;
        color: $main-green;
        &:hover{
          color: $main-yellow;
          text-decoration: none;
        }
      }
      .checkout{
        border: none;
        outline: none;
        width: 30%;
        background-color: white;
        border-radius: 50px;
        border:  5px solid $main-green;
        color: $main-green;
        font-weight: 800;
        font-size: 20px;
        line-height: 16px;
        padding: 10px;
        &:hover{
          border:  5px solid $main-yellow;
          color: $main-yellow;
        }
      }
    }
  }
</style>