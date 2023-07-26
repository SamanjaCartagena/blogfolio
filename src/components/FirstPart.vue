<template>
  <div class="container is-fluid">
<div class="demo-type">
 
   <center>
    <el-avatar :size="100" src="https://empty" @error="errorHandler">
      <img
        :src="this.profile"
        style="object-fit:cover"
      />
    </el-avatar>
   </center>
  </div>
   
  <center><p class="heading">Welcome to My<br/> BlogFolio</p></center>
  <center><input type="search" class="search"/></center>
 <center><button class="patreons" >Patreon</button><button class="patreons">Donate</button><button class="patreons">Courses</button>
 <button class="patreons">Books</button>
  <button class="patreons">Stuff</button>

 </center>
</div>
</template>

<script>
import profile from '../assets/profile.jpg'

export default {
    data(){
        return{
            profile:profile
        }
    }

}
</script>

<style >
.container{
    background-color: #001a1f;
    height:500px;
    color:white;
}
.patreons{
    position: relative;
    top:55px;
    background-color: transparent;
    color:white;
    padding:10px;
    border-left:0px;
    border-top:0px;
    border-bottom:0px;
    border-right:.2px solid white;
    margin:5px;
}
.heading{
    font-size: 50px;
    position: relative;
    top:40px;
}
.search{
    position: relative;
    top:50px;
    width:35%;
    height:35px;
}
.demo-type {
    position: relative;
    top:25px;
 
}
.demo-type > div {
  
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
@media only screen and (max-width:700px){
  .heading {
     font-size: 30px;
  }
  .search{
    position: relative;
    top:50px;
    width:80%;
    height:35px;
}
}
</style>