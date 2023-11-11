<template>
  <div>
    <router-view></router-view>
    <footer-page></footer-page>
  </div>
</template>

<script>
import FooterPage from './views/FooterPage.vue'

export default {
  components: {FooterPage },


}
</script>

<style>
@import 'bulma/css/bulma.min.css';

body { 
    margin: 0; 
    height: 100vh;
}
  footer-page{
    z-index: 1000;
  }

</style>