<template>
  <div>
 <div class="columns">
  <div class="column">
    <img :src='this.book1' style="height:500px;width:50%;"/>
    <button type="submit" @submit="buybook" value='book1'>Get book</button>
  </div>
  <div class="column">
    
  </div>
 
 
</div>
  </div>
</template>

<script>
import book1 from '../assets/javascript.png'
export default {

  data(){
    return {
      book1:book1,
      colors:['red','blue','yellow','green']
    }
  },
  methods:{
    buybook(){
      
    }
  }
}
</script>

<style scoped>
.column{
    height:300px;
    margin:10px;
}


</style>