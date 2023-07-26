<template>
  <div>
    <nav-bar></nav-bar>
    <first-part></first-part>
    <second-part></second-part>
  </div>
</template>

<script>
import FirstPart from '../components/FirstPart.vue'
import NavBar from '../components/NavBar.vue'
import SecondPart from '../components/SecondPart.vue'
export default {
    components:{
        NavBar, FirstPart, SecondPart
    }

}
</script>

<style>

</style>