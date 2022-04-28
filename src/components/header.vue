<template>
  <header class="mobile-header">
    <div class="cover">
      <router-link to="/">
        <img src="../assets/image/logo.png" alt="">
      </router-link>
    </div>
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news">最新消息</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/jujubes">商品資訊</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">聯絡我們</router-link>
        </li>
      </ul>
    </nav>
    <div class="cart">
      <router-link to="/cart">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" />
        <div class="favorite_count">
          <span>{{this.$store.state.shoppingCartQuantity}}</span>
        </div>
      </router-link>
    </div>
    <label class="navbar-toggle-label" for="navbar-toggle">
      <span class="hamburger">
        <font-awesome-icon icon="fa-solid fa-bars" size="xl"/>
      </span>
    </label>
    <label class="navbar-toggle-label-close" for="navbar-toggle">
      <span class="x">
        <font-awesome-icon icon="fa-solid fa-xmark"  size="2xl"/>
      </span>
    </label>
  </header>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  data() {
    return{
      // quantity: this.$store.state.shoppingCartQuantity,
    }
  },
  methods:{
    // getCartNumber(){
    //   if(!localStorage.getItem('jujube45')) {
    //     this.quantity = 0
    //   } else {
    //     this.quantity = localStorage.getItem('jujube45')
    //   }   
    // }
  },
  created(){
    // this.getCartNumber()
    this.$store.commit('getShoppingCartQuantity')
  },
  watch:{
    // localStorage.getItem('jujube45'){
    //   console.log('a')
    // }
  },
  computed:{
    // ...mapState('shoppingCartQuantity')
  }
}
</script>


<style lang="scss" scoped>
  /*Main Header*/
  header {
    width: 100%;
    height: 60px;
    text-align: center;
    background: #ffffff;
    /* 陰影 */
    -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    /*固定置頂*/
    position: fixed;
    z-index: 999;
    .cover{
      height: 60px;
      img{
        height: 100%;
        object-fit:cover;
      }
    }
    .navbar-toggle{
      visibility: hidden;
      position: absolute;
    }
    .navbar-toggle:checked ~ .nav {
        transform: scale(1, 1);
    }

    // toggle fontawesome figure
    .navbar-toggle:checked ~ .navbar-toggle-label {
       display: none;  
    }

    .navbar-toggle:checked ~ .nav .nav-item {
      /*開啟時透明度為1*/
      opacity: 1;
    }

    .nav{

      width: 100%;
      background: #ffffff;
      transition:transform 0.3s ease-out;
      transform: scale(1, 0);
      transform-origin: top;
      .nav-list{
        width: 100%;
        .nav-item{
          width: 80%;
          margin: 1.4rem auto;
          opacity: 0;
          a{
            color: $main-color;
            &:hover{
              color: $main-yellow;
            }
          }
        }
      }
    }
    .navbar-toggle-label {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 7.5%;
      display: flex;
      align-items: center;
      .hamburger{
        cursor: pointer;
      }
    }
    .navbar-toggle-label-close {
      position: absolute;
      top: 10px;
      bottom: 0;
      right: 7.5%;
      display: none;
      .x{
        cursor: pointer;
      }
    }
    .navbar-toggle:checked ~ .navbar-toggle-label-close {
       display: block;  
    }
    .cart{
      height: 60px;
      position: absolute;
      top: -4px;
      bottom: 0;
      right: 20%;
      line-height: 60px;
      a{
        color: $main-color;
      }
      .favorite_count{
        position: absolute;
        top: 10px;
        bottom: 0;
        right: -25%;
        background-color: rgb(255, 145, 145);
        height: 20px;
        width: 20px;
        border-radius: 50%;
        span{
          position: absolute;
          width: 100%;
          height: 100%;
          top: -20px;
          right: 0;
          font-size: 14px;
          color: white;
        }
      }
    }
  }
</style>