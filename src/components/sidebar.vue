<template>
  <nav class="product-nav">
    <ul class="product-list">
      <li class="product-category">
        <router-link to="/jujubes">全部商品</router-link>
      </li>
      <li class="product-category">
        <router-link to="/jujubes/introduction">蜜棗介紹</router-link>
      </li>
      <li class="product-category">
        <router-link to="/jujubes/preserved">棗子糖介紹</router-link>
      </li>
      <li class="product-category">
        <router-link to="/jujubes/shipping">包裝出貨流程</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .product-nav{
    .product-list{
      display: flex;
      justify-content: center;
      li {
        width: 15%;
        margin: 0 15px;
        text-align: center;
        color: white;
        background-color: $main-green ;
        padding: 5px;
        border-radius: 5px;
        a{
          color: $main-color;
          font-weight: 600;
        }
      }
    }
  }
</style>