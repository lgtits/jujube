<template>
  <div id="jujube" class="container80">
    <main>
      <router-view/>
    </main>
    <footer>
    </footer>
  </div>
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "assets/style/reset.css";
  @import "assets/style/main.scss";


  .jujube{
    margin: 0 auto;
  }
  @media screen and (min-width: 700px) {
    .mobile-header {
      display: none;
    }
    .container80 {
      width: 85%;
      margin: 0 auto 3rem auto;
    }
  }
  
  @media screen and (max-width: 700px){
    .computer-header{
      display: none;
    }  
  }
</style>

