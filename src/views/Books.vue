<template>
  <div>
 <div class="columns">
  <div class="column">
    <img :src='this.book1' style="height:500px;width:50%;"/>
  </div>
  <div class="column">
    Second column
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
  }
}
</script>

<style scoped>
.column{
    height:300px;
   background-color:red;
    margin:10px;
}


</style>