<template>
  <div>
    <first-part></first-part>
    <second-part></second-part>
    <footer-page></footer-page>
  </div>
</template>

<script>
import FirstPart from '../components/FirstPart.vue'
import SecondPart from '../components/SecondPart.vue'
import FooterPage from './FooterPage.vue'
export default {
    components:{
         FirstPart, SecondPart, FooterPage
    }

}
</script>

<style>

</style>