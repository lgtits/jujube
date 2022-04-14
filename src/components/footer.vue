<template>
  <div class="footer">
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchensjujube%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    <div class="description">
      <span class="icon">
        <a href="https://www.facebook.com/chensjujube/">
          <font-awesome-icon icon="fa-brands fa-facebook" size="xl"/>  
        </a>
      </span>
      <span class="icon">
        <a href="https://www.instagram.com/chens_jujube/">
          <font-awesome-icon icon="fa-brands fa-instagram" size="xl" />
        </a>
      </span>
      <span class="icon">
        <a href="https://line.me/ti/p/NVmn40qxKk">
          <font-awesome-icon icon="fa-brands fa-line" size="xl" beat/>
        </a>
      </span>
      <span class="icon">
        <router-link to="/jujubes">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl"/>
        </router-link>
      </span>
      <p>Copyright © 蜜棗晨 All rights reserved.</p>
      <p>訂購專線： xx-xxxxxxx</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .footer{
    text-align: center;
    padding: 20px;
    border-top: 1px solid rgb(179, 178, 178);
    .description{
      margin-top: 10px;
      .icon{
        margin-right: 15px;
        width: 16px;
        a{
          color: $main-color;
          
        }
      }
      p{
        margin: 10px auto;
        color: $main-color;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .footer{
      display: flex;
      justify-content: space-around;

    }
  }
  
  @media screen and (max-width: 700px){

  }
</style>