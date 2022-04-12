<template>
  <div id="jujube">
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
  .jujube{
    margin: 0 auto;
  }

</style>

