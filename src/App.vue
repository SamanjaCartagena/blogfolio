<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar },
  

}
</script>

<style>
@import 'bulma/css/bulma.min.css';

body{
  padding:0;
  margin:0;
}
</style>