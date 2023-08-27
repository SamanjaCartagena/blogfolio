<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-page></footer-page>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterPage from './views/FooterPage.vue'

export default {
  components: { NavBar, FooterPage },
  

}
</script>

<style>
@import 'bulma/css/bulma.min.css';

body{
  padding:0;
  margin:0;
}
</style>