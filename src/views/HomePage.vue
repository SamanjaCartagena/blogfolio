<template>
  <div>
    <first-part :search='search' @passsearch="getData($event)"></first-part>
    <second-part :results='results'></second-part>
  </div>
</template>

<script>
import FirstPart from '../components/FirstPart.vue'
import SecondPart from '../components/SecondPart.vue'
export default {
    components:{
         FirstPart, SecondPart
    },
    data(){
      return{
        results:''
       
      }
    },
    methods:{
      getData(data){
        console.log('data is '+data)
        this.results=data;
      }
    }

}
</script>

<style>

</style>