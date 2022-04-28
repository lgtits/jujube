<template>
  <div class="amount-wrapper
  ">
    <div class="amount">
      <h2>
        總金額: $xxxxxx
      </h2> 
    </div>
    <div class="checkout-wrapper">
      <button class="checkout ">買單</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .amount-wrapper{
    border-top: 1px solid $main-gray;
    .amount{
      margin: 20px;
    }
    .checkout-wrapper{
      .checkout{
        border: none;
        outline: none;
        display: block;
        margin: 20px auto;
        width: 30%;
        display: block;
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