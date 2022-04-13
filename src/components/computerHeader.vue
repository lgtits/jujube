<template>
  <header class="computer-header">
    <div class="cover">
      <img src="../assets/image/cover2.jpg" alt="" />
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

<style lang="scss" scoped>
.cover {
  height: 300px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
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
    background-color: #FFBB32;
    padding: 5px;
    border-radius: 5px;
    a{
      color: #484246;
      font-weight: 600;
    }
  }
}
</style>