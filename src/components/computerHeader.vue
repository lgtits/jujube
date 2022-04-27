<template>
  <header class="computer-header">
    <div class="cover">
      <img src="../assets/image/cover2.jpg" alt="" />
      <div class="cart">
        <router-link to="/cart">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" />
          <div class="favorite_count">
            <span>{{quantity}}</span>
          </div>
        </router-link>
      </div>
    </div>
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
  </header>
</template>
<script>

export default {
  data() {
    return{
      quantity: 25
    }
  },
}
</script>


<style lang="scss" scoped>
.cover {
  height: 300px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .cart{
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 25px;
    right: 25px;
    background-color: white;
    box-shadow: 0px 0px 10px $main-color;
    &:hover{
      background-color: $main-yellow;
    }
    a{
      color: $main-color; 
      line-height: 50px;
      padding-left: 10px;
    }
    .favorite_count{
      position: absolute;
      top: 5px;
      bottom: 0;
      right: 5px;
      background-color: rgb(255, 145, 145);
      height: 20px;
      width: 20px;
      border-radius: 50%;
      span{
        position: absolute;
        width: 100%;
        height: 100%;
        top: -15px;
        right: -2px;
        font-size: 14px;
        color: white;
      }
    }
  }
}
.nav-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px;
  .nav-item {
    width: 20%;
    text-align: center;
    font-size: 18px;
    border: 5px solid $main-yellow;
    padding: 2px;
    border-radius: 25px;
    &:hover{
      background-color: #FFBB32;
      a{
        text-decoration:none;
      }
    }
    a{
      color: #484246;
      font-weight: 600;
    }
  }
}
</style>