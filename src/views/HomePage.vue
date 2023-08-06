<template>
  <div>
    <first-part :search='search' @passsearch="getData($event)"></first-part>
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
    },
    data(){
      return{
        search:''
       
      }
    },
    methods:{
      getData(data){
        console.log('data is '+data)
      }
    }

}
</script>

<style>

</style>