<template>
  <header class="mobile-header">
    <div class="cover">
      <img src="../assets/image/logo.png" alt="">
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
    <label class="navbar-toggle-label" for="navbar-toggle">
      <span class="hamburger">
        <font-awesome-icon icon="fa-solid fa-bars" size="xl"/>
      </span>
    </label>
  </header>
</template>

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
  }
</style>